/**
 * Export Encryption Module
 * 
 * AES-256 encryption with PBKDF2 key derivation for password-protected
 * health data exports. All processing is done locally in the browser.
 */

import type { EncryptionOptions, EncryptedExport } from './types';

// ============================================================================
// Constants
// ============================================================================

const ALGORITHM = 'AES-GCM';
const KEY_LENGTH = 256;
const IV_LENGTH = 12; // 96 bits for GCM
const SALT_LENGTH = 16; // 128 bits
const DEFAULT_ITERATIONS = 100000;
const VERSION = '1.0';

// Text encoder/decoder
const encoder = new TextEncoder();
const decoder = new TextDecoder();

// ============================================================================
// Key Derivation
// ============================================================================

/**
 * Derive encryption key from password using PBKDF2
 */
async function deriveKey(
  password: string,
  salt: Uint8Array,
  iterations: number
): Promise<CryptoKey> {
  const passwordBuffer = encoder.encode(password);

  // Import password as key material
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    passwordBuffer,
    'PBKDF2',
    false,
    ['deriveBits', 'deriveKey']
  );

  // Derive AES-GCM key
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt.buffer as ArrayBuffer,
      iterations,
      hash: 'SHA-256',
    },
    keyMaterial,
    {
      name: ALGORITHM,
      length: KEY_LENGTH,
    },
    false,
    ['encrypt', 'decrypt']
  );
}

// ============================================================================
// Encryption
// ============================================================================

/**
 * Encrypt data with password protection
 * Uses AES-256-GCM with PBKDF2 key derivation
 */
export async function encryptData(
  data: string,
  options: EncryptionOptions
): Promise<EncryptedExport> {
  const iterations = options.iterations || DEFAULT_ITERATIONS;
  
  // Generate random salt and IV
  const salt = crypto.getRandomValues(new Uint8Array(SALT_LENGTH));
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH));
  
  // Derive encryption key
  const key = await deriveKey(options.password, salt, iterations);
  
  // Encode data
  const plaintext = encoder.encode(data);
  
  // Encrypt
  const ciphertext = await crypto.subtle.encrypt(
    {
      name: ALGORITHM,
      iv,
    },
    key,
    plaintext
  );
  
  // Convert to base64 for storage/transmission
  const encryptedExport: EncryptedExport = {
    encrypted: true,
    salt: arrayBufferToBase64(salt.buffer),
    iv: arrayBufferToBase64(iv.buffer),
    ciphertext: arrayBufferToBase64(ciphertext),
    iterations,
    version: VERSION,
    metadata: {
      exportedAt: new Date().toISOString(),
      format: 'json',
      originalSize: plaintext.length,
    },
  };
  
  return encryptedExport;
}

/**
 * Decrypt encrypted export data
 */
export async function decryptData(
  encryptedExport: EncryptedExport,
  password: string
): Promise<string> {
  // Decode base64 values
  const saltBuffer = base64ToArrayBuffer(encryptedExport.salt);
  const ivBuffer = base64ToArrayBuffer(encryptedExport.iv);
  const ciphertext = base64ToArrayBuffer(encryptedExport.ciphertext);

  // Derive key with same parameters
  const saltArray = new Uint8Array(saltBuffer);
  const key = await deriveKey(password, saltArray, encryptedExport.iterations);

  // Decrypt
  try {
    const ivArray = new Uint8Array(ivBuffer);
    const plaintext = await crypto.subtle.decrypt(
      {
        name: ALGORITHM,
        iv: ivArray,
      },
      key,
      ciphertext
    );
    
    return decoder.decode(plaintext);
  } catch (error) {
    throw new ExportEncryptionError(
      'Contraseña incorrecta o datos corruptos',
      'Incorrect password or corrupted data'
    );
  }
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Convert ArrayBuffer to base64 string
 */
function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/**
 * Convert base64 string to ArrayBuffer
 */
function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

// ============================================================================
// Secure Export/Import
// ============================================================================

/**
 * Create encrypted backup package
 */
export async function createEncryptedBackup(
  healthData: unknown,
  password: string
): Promise<string> {
  const jsonString = JSON.stringify(healthData, null, 2);
  const encrypted = await encryptData(jsonString, { password });
  return JSON.stringify(encrypted, null, 2);
}

/**
 * Restore from encrypted backup
 */
export async function restoreFromBackup(
  encryptedData: string,
  password: string
): Promise<unknown> {
  let encryptedExport: EncryptedExport;
  
  try {
    encryptedExport = JSON.parse(encryptedData) as EncryptedExport;
  } catch {
    throw new ExportEncryptionError(
      'Formato de archivo inválido',
      'Invalid file format'
    );
  }
  
  if (!encryptedExport.encrypted) {
    throw new ExportEncryptionError(
      'El archivo no está encriptado',
      'File is not encrypted'
    );
  }
  
  const decrypted = await decryptData(encryptedExport, password);
  
  try {
    return JSON.parse(decrypted);
  } catch {
    throw new ExportEncryptionError(
      'Datos desencriptados corruptos',
      'Decrypted data is corrupted'
    );
  }
}

/**
 * Verify password against encrypted backup without full decryption
 */
export async function verifyBackupPassword(
  encryptedData: string,
  password: string
): Promise<boolean> {
  try {
    const encryptedExport = JSON.parse(encryptedData) as EncryptedExport;
    await decryptData(encryptedExport, password);
    return true;
  } catch {
    return false;
  }
}

// ============================================================================
// Password Validation
// ============================================================================

export interface PasswordStrength {
  score: number; // 0-4
  label: string;
  labelEs: string;
  feedback: string[];
  feedbackEs: string[];
}

/**
 * Check password strength
 */
export function checkPasswordStrength(password: string): PasswordStrength {
  let score = 0;
  const feedback: string[] = [];
  const feedbackEs: string[] = [];
  
  // Length check
  if (password.length >= 12) {
    score++;
  } else {
    feedback.push('Use at least 12 characters');
    feedbackEs.push('Use al menos 12 caracteres');
  }
  
  // Complexity checks
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  
  if (hasUpper && hasLower) score++;
  else {
    feedback.push('Use both uppercase and lowercase letters');
    feedbackEs.push('Use mayúsculas y minúsculas');
  }
  
  if (hasNumber) score++;
  else {
    feedback.push('Include at least one number');
    feedbackEs.push('Incluya al menos un número');
  }
  
  if (hasSpecial) score++;
  else {
    feedback.push('Include special characters (!@#$%^*)');
    feedbackEs.push('Incluya caracteres especiales (!@#$%^*)');
  }
  
  const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const labelsEs = ['Muy Débil', 'Débil', 'Regular', 'Buena', 'Fuerte'];
  
  return {
    score,
    label: labels[score],
    labelEs: labelsEs[score],
    feedback,
    feedbackEs,
  };
}

/**
 * Generate a secure random password
 */
export function generateSecurePassword(length = 16): string {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^*';
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset[array[i] % charset.length];
  }
  
  return password;
}

// ============================================================================
// Error Classes
// ============================================================================

export class ExportEncryptionError extends Error {
  messageEs: string;
  messageEn: string;
  
  constructor(messageEs: string, messageEn: string) {
    super(messageEn);
    this.name = 'ExportEncryptionError';
    this.messageEs = messageEs;
    this.messageEn = messageEn;
  }
}

// ============================================================================
// Export
// ============================================================================

export {
  DEFAULT_ITERATIONS,
  VERSION,
};
