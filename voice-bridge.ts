/**
 * Voice Bridge - CLI interface for Tauri Voice IPC
 *
 * This script is called by Tauri Rust commands for voice operations.
 * It spawns Python processes to run Qwen2-Audio (STT) and Qwen3-TTS (TTS).
 */

import { spawn } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import type {
  VoiceHealthStatus,
  TranscriptionResult,
  SynthesisResult,
  VoiceError,
} from './core/voice/types.js';

// =============================================================================
// Types
// =============================================================================

interface BridgeResponse<T> {
  success: boolean;
  data?: T;
  error?: VoiceError;
}

interface PythonHealthResponse {
  available: boolean;
  pythonAvailable: boolean;
  pythonVersion: string | null;
  sttModelLoaded: boolean;
  ttsModelLoaded: boolean;
  sttAvailable: boolean;
  ttsAvailable: boolean;
  device: {
    deviceType: 'cuda' | 'mps' | 'cpu';
    vramGb: number | null;
    ramGb: number;
    cpuCores: number;
    cudaAvailable: boolean;
    mpsAvailable: boolean;
    recommendedSttModel: string;
    recommendedTtsModel: string;
    canRunStt: boolean;
    canRunTts: boolean;
  };
  recommendedConfig: {
    sttModel: string;
    ttsModel: string;
    selectedVoice: string;
    language: string;
    autoSpeak: boolean;
    speakingRate: number;
  };
}

interface PythonTranscriptionResponse {
  text: string;
  confidence: number;
  language: string;
  durationMs: number;
  processingTimeMs: number;
  wordTimestamps: null | Array<{
    word: string;
    start: number;
    end: number;
  }>;
}

interface PythonSynthesisResponse {
  audioBase64: string;
  format: string;
  sampleRate: number;
  durationMs: number;
  processingTimeMs: number;
}

interface PythonModelsResponse {
  sttModels: Array<{
    id: string;
    name: string;
    description: string;
    languages: string[];
    minVram: number;
  }>;
  ttsModels: Array<{
    id: string;
    name: string;
    description: string;
    languages: string[];
    minVram: number;
  }>;
  voices: Array<{
    name: string;
    description: string;
    language: string;
    gender: string;
    style: string;
  }>;
}

// =============================================================================
// Python Process Execution
// =============================================================================

/**
 * Get the path to the Python executable in the bioself-voice conda environment.
 */
function getPythonPath(): string {
  // Try conda environment first
  const condaPath = process.env.CONDA_PREFIX;
  if (condaPath) {
    const pythonPath = path.join(condaPath, 'bin', 'python');
    if (fs.existsSync(pythonPath)) {
      return pythonPath;
    }
  }

  // Try common conda locations
  const homeDir = process.env.HOME || process.env.USERPROFILE || '';
  const condaEnvPaths = [
    path.join(homeDir, 'miniconda3', 'envs', 'bioself-voice', 'bin', 'python'),
    path.join(homeDir, 'anaconda3', 'envs', 'bioself-voice', 'bin', 'python'),
    path.join(homeDir, '.conda', 'envs', 'bioself-voice', 'bin', 'python'),
    '/opt/homebrew/Caskroom/miniconda/base/envs/bioself-voice/bin/python',
  ];

  for (const envPath of condaEnvPaths) {
    if (fs.existsSync(envPath)) {
      return envPath;
    }
  }

  // Fallback to system Python 3.12
  return 'python3.12';
}

/**
 * Get the project root directory.
 */
function getProjectRoot(): string {
  return process.cwd();
}

/**
 * Execute a Python voice CLI command.
 */
async function executePythonCommand<T>(
  command: string,
  args: string[] = [],
  timeoutMs: number = 60000
): Promise<BridgeResponse<T>> {
  return new Promise((resolve) => {
    const pythonPath = getPythonPath();
    const projectRoot = getProjectRoot();

    // Build command arguments
    const pythonArgs = ['-m', 'voice.cli', command, ...args];

    // Spawn Python process
    const proc = spawn(pythonPath, pythonArgs, {
      cwd: projectRoot,
      env: {
        ...process.env,
        PYTHONPATH: projectRoot,
        PYTHONUNBUFFERED: '1',
      },
    });

    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    proc.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    // Set timeout
    const timeout = setTimeout(() => {
      proc.kill();
      resolve({
        success: false,
        error: {
          code: 'TIMEOUT',
          message: `Voice command timed out after ${timeoutMs}ms`,
        },
      });
    }, timeoutMs);

    proc.on('close', (code) => {
      clearTimeout(timeout);

      if (code !== 0 && !stdout) {
        // Check for common errors
        if (stderr.includes('ModuleNotFoundError') || stderr.includes('No module named')) {
          resolve({
            success: false,
            error: {
              code: 'PYTHON_NOT_FOUND',
              message: 'Python voice module not installed',
              details: stderr,
            },
          });
        } else if (stderr.includes('CUDA out of memory') || stderr.includes('OutOfMemoryError')) {
          resolve({
            success: false,
            error: {
              code: 'GPU_OUT_OF_MEMORY',
              message: 'Not enough GPU memory',
              details: stderr,
            },
          });
        } else {
          resolve({
            success: false,
            error: {
              code: 'SERVICE_UNAVAILABLE',
              message: `Voice command failed with code ${code}`,
              details: stderr,
            },
          });
        }
        return;
      }

      // Parse JSON response
      try {
        const response = JSON.parse(stdout.trim());
        resolve(response as BridgeResponse<T>);
      } catch (parseError) {
        resolve({
          success: false,
          error: {
            code: 'SERVICE_UNAVAILABLE',
            message: 'Failed to parse voice response',
            details: stdout,
          },
        });
      }
    });

    proc.on('error', (err) => {
      clearTimeout(timeout);
      resolve({
        success: false,
        error: {
          code: 'PYTHON_NOT_FOUND',
          message: `Failed to start Python process: ${err.message}`,
        },
      });
    });
  });
}

// =============================================================================
// Bridge Commands
// =============================================================================

/**
 * Check voice service health.
 */
async function health(): Promise<BridgeResponse<VoiceHealthStatus>> {
  const response = await executePythonCommand<PythonHealthResponse>('health');

  if (!response.success || !response.data) {
    return {
      success: false,
      error: response.error || {
        code: 'SERVICE_UNAVAILABLE',
        message: 'Health check failed',
      },
    };
  }

  const data = response.data;
  return {
    success: true,
    data: {
      available: data.available,
      pythonAvailable: data.pythonAvailable,
      pythonVersion: data.pythonVersion,
      sttModelLoaded: data.sttModelLoaded,
      ttsModelLoaded: data.ttsModelLoaded,
      device: {
        deviceType: data.device.deviceType,
        vramGb: data.device.vramGb,
        ramGb: data.device.ramGb,
        cpuCores: data.device.cpuCores,
        cudaAvailable: data.device.cudaAvailable,
        mpsAvailable: data.device.mpsAvailable,
      },
      error: undefined,
    },
  };
}

/**
 * Get available models and voices.
 */
async function models(): Promise<BridgeResponse<PythonModelsResponse>> {
  return await executePythonCommand<PythonModelsResponse>('models');
}

/**
 * Transcribe audio from file path.
 */
async function transcribe(
  audioPath: string,
  language?: string
): Promise<BridgeResponse<TranscriptionResult>> {
  const args = [audioPath];
  if (language) {
    args.push('--language', language);
  }

  const response = await executePythonCommand<PythonTranscriptionResponse>(
    'transcribe',
    args,
    120000 // 2 minute timeout for transcription
  );

  if (!response.success || !response.data) {
    return {
      success: false,
      error: response.error,
    };
  }

  const data = response.data;
  return {
    success: true,
    data: {
      text: data.text,
      confidence: data.confidence,
      language: data.language as any,
      durationMs: data.durationMs,
      processingTimeMs: data.processingTimeMs,
      wordTimestamps: data.wordTimestamps || undefined,
    },
  };
}

/**
 * Transcribe audio from base64-encoded string.
 */
async function transcribeBase64(
  audioBase64: string,
  language?: string
): Promise<BridgeResponse<TranscriptionResult>> {
  const args = [audioBase64];
  if (language) {
    args.push('--language', language);
  }

  const response = await executePythonCommand<PythonTranscriptionResponse>(
    'transcribe-base64',
    args,
    120000
  );

  if (!response.success || !response.data) {
    return {
      success: false,
      error: response.error,
    };
  }

  const data = response.data;
  return {
    success: true,
    data: {
      text: data.text,
      confidence: data.confidence,
      language: data.language as any,
      durationMs: data.durationMs,
      processingTimeMs: data.processingTimeMs,
      wordTimestamps: data.wordTimestamps || undefined,
    },
  };
}

/**
 * Synthesize text to speech.
 */
async function synthesize(
  text: string,
  voice?: string,
  language?: string,
  rate?: number
): Promise<BridgeResponse<SynthesisResult>> {
  const args = [text];
  if (voice) {
    args.push('--voice', voice);
  }
  if (language) {
    args.push('--language', language);
  }
  if (rate !== undefined) {
    args.push('--rate', rate.toString());
  }

  const response = await executePythonCommand<PythonSynthesisResponse>(
    'synthesize',
    args,
    120000
  );

  if (!response.success || !response.data) {
    return {
      success: false,
      error: response.error,
    };
  }

  const data = response.data;
  return {
    success: true,
    data: {
      audioBase64: data.audioBase64,
      format: 'wav',
      sampleRate: data.sampleRate,
      durationMs: data.durationMs,
      processingTimeMs: data.processingTimeMs,
    },
  };
}

// =============================================================================
// Main CLI Entry Point
// =============================================================================

async function main() {
  const command = process.argv[2];

  try {
    switch (command) {
      case 'health': {
        const result = await health();
        console.log(JSON.stringify(result));
        break;
      }

      case 'models': {
        const result = await models();
        console.log(JSON.stringify(result));
        break;
      }

      case 'transcribe': {
        const audioPath = process.argv[3];
        if (!audioPath) {
          console.error(JSON.stringify({
            success: false,
            error: { code: 'INVALID_AUDIO_FORMAT', message: 'Audio path required' },
          }));
          process.exit(1);
        }
        const language = process.argv[4] || undefined;
        const result = await transcribe(audioPath, language);
        console.log(JSON.stringify(result));
        break;
      }

      case 'transcribe-base64': {
        const audioBase64 = process.argv[3];
        if (!audioBase64) {
          console.error(JSON.stringify({
            success: false,
            error: { code: 'INVALID_AUDIO_FORMAT', message: 'Audio base64 required' },
          }));
          process.exit(1);
        }
        const language = process.argv[4] || undefined;
        const result = await transcribeBase64(audioBase64, language);
        console.log(JSON.stringify(result));
        break;
      }

      case 'synthesize': {
        const requestJson = process.argv[3];
        if (!requestJson) {
          console.error(JSON.stringify({
            success: false,
            error: { code: 'SYNTHESIS_FAILED', message: 'Request JSON required' },
          }));
          process.exit(1);
        }
        const request = JSON.parse(requestJson);
        const result = await synthesize(
          request.text,
          request.voice,
          request.language,
          request.speakingRate
        );
        console.log(JSON.stringify(result));
        break;
      }

      default:
        console.error(JSON.stringify({
          success: false,
          error: {
            code: 'UNKNOWN',
            message: `Unknown voice command: ${command}`,
          },
        }));
        console.error('Available commands: health, models, transcribe, transcribe-base64, synthesize');
        process.exit(1);
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(JSON.stringify({
      success: false,
      error: { code: 'UNKNOWN', message },
    }));
    process.exit(1);
  }
}

main();
