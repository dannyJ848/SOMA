/**
 * Asset Path Resolver
 *
 * Resolves asset paths for cross-platform compatibility with Tauri 2.0.
 * Handles the differences between:
 * - Desktop (macOS, Windows, Linux): Uses localhost or custom protocol
 * - iOS: Uses tauri://localhost custom scheme
 * - Android: Uses https://tauri.localhost
 * - Browser development: Uses relative paths
 *
 * Key insight: On iOS WebKit, the app uses a custom URL scheme (tauri://)
 * instead of localhost. For assets in the public directory, we need to
 * ensure paths work with the webview's base URL.
 *
 * IMPORTANT: On iOS, relative paths like './assets/...' may not work correctly
 * with the tauri:// custom scheme. We need to use absolute URLs or the
 * window.location.origin to construct proper paths.
 *
 * iOS-SPECIFIC NOTES:
 * - The WKWebView on iOS uses 'tauri://localhost' as the origin
 * - Asset protocol URLs should use the same origin format
 * - Draco decoders need to be accessible via CORS or bundled locally
 */

import { convertFileSrc } from '@tauri-apps/api/core';

// Detect platform - check both runtime and build-time indicators
const isTauri = typeof window !== 'undefined' && !!(window as unknown as { __TAURI__?: unknown }).__TAURI__;

// Detect iOS specifically (Tauri sets this during build)
declare const __TAURI_PLATFORM__: string | undefined;
const buildTimePlatform = typeof __TAURI_PLATFORM__ !== 'undefined' ? __TAURI_PLATFORM__ : '';

// Runtime platform detection for iOS/Android when build-time detection fails
// This is more reliable on iOS where the build variable may not be set
function detectPlatformRuntime(): string {
  if (typeof window === 'undefined') return '';

  // Check build-time variable first
  if (buildTimePlatform) {
    console.log('[AssetResolver] Using build-time platform:', buildTimePlatform);
    return buildTimePlatform;
  }

  // Runtime detection based on URL scheme and hostname
  const origin = window.location.origin;
  const hostname = window.location.hostname;
  const protocol = window.location.protocol;

  // iOS detection - tauri:// scheme or tauri.localhost hostname
  if (protocol === 'tauri:' || origin.startsWith('tauri://')) {
    console.log('[AssetResolver] iOS detected via tauri:// protocol');
    return 'ios';
  }

  // Android detection - https://tauri.localhost
  if (hostname === 'tauri.localhost' || origin.includes('tauri.localhost')) {
    // Could be either iOS or Android on newer Tauri versions
    // Check user agent to differentiate
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) {
      console.log('[AssetResolver] iOS detected via tauri.localhost + user agent');
      return 'ios';
    }
    console.log('[AssetResolver] Android detected via tauri.localhost');
    return 'android';
  }

  // Check user agent as fallback
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua) && isTauri) {
    console.log('[AssetResolver] iOS detected via user agent fallback');
    return 'ios';
  }
  if (/Android/.test(ua) && isTauri) {
    console.log('[AssetResolver] Android detected via user agent fallback');
    return 'android';
  }

  return buildTimePlatform;
}

const platform = detectPlatformRuntime();
const isIOS = platform === 'ios';
const isAndroid = platform === 'android';
const isMobile = isIOS || isAndroid;

// Log platform detection on startup for debugging
if (typeof window !== 'undefined') {
  console.log('[AssetResolver] Platform detection:', {
    platform,
    isIOS,
    isAndroid,
    isMobile,
    isTauri,
    buildTimePlatform,
    origin: window.location.origin,
    hostname: window.location.hostname,
    protocol: window.location.protocol,
    userAgent: navigator.userAgent.substring(0, 100),
  });
}

/**
 * Resolves a relative asset path to work across all platforms.
 *
 * For assets in the public directory (served via Vite/Tauri):
 * - Use this function for paths like 'assets/models/skeletal/model.glb'
 * - The path should be relative to the public directory
 *
 * @param relativePath - Path relative to the public directory (e.g., 'assets/models/...')
 * @returns Resolved URL that works in the current environment
 */
export function resolveAssetPath(relativePath: string): string {
  // Ensure path doesn't start with slash for consistency
  let normalizedPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;

  // Also remove leading './' if present
  if (normalizedPath.startsWith('./')) {
    normalizedPath = normalizedPath.slice(2);
  }

  if (!isTauri) {
    // Browser development mode - use relative path from base URL
    // Vite serves from localhost:1420, assets are in public/
    const result = `./${normalizedPath}`;
    console.log('[AssetResolver] Browser mode, resolved:', result);
    return result;
  }

  // For Tauri apps, we need to handle different platforms carefully
  // iOS: Uses tauri://localhost as origin
  // Android: Uses https://tauri.localhost as origin
  // Desktop: Uses file:// or localhost

  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  // Always log for debugging on mobile platforms
  console.log('[AssetResolver] Resolving path:', {
    relativePath,
    normalizedPath,
    origin,
    platform,
    isIOS,
    isAndroid,
    isMobile,
    href: typeof window !== 'undefined' ? window.location.href : '',
  });

  // For mobile platforms, we MUST use absolute URLs
  // Relative paths do NOT work reliably with custom URL schemes
  if (isMobile || isIOS || isAndroid) {
    if (origin) {
      const resolvedUrl = `${origin}/${normalizedPath}`;
      console.log('[AssetResolver] Mobile resolved URL:', resolvedUrl);
      return resolvedUrl;
    }

    // Fallback: Try to construct origin from location parts
    if (typeof window !== 'undefined') {
      const protocol = window.location.protocol;
      const host = window.location.host || 'localhost';
      const fallbackOrigin = `${protocol}//${host}`;
      const resolvedUrl = `${fallbackOrigin}/${normalizedPath}`;
      console.log('[AssetResolver] Mobile fallback URL:', resolvedUrl);
      return resolvedUrl;
    }

    // Last resort fallback - this likely won't work on iOS but log it
    console.warn('[AssetResolver] No origin available, using relative path (may fail on iOS)');
    return `./${normalizedPath}`;
  }

  // Desktop Tauri - relative paths should work but use absolute for consistency
  if (origin) {
    const resolvedUrl = `${origin}/${normalizedPath}`;
    console.log('[AssetResolver] Desktop resolved URL:', resolvedUrl);
    return resolvedUrl;
  }

  // Desktop fallback
  return `./${normalizedPath}`;
}

/**
 * Resolves a filesystem path to a URL usable by the webview.
 * Use this for files stored in app data directories, NOT for bundled assets.
 *
 * @param absolutePath - Absolute filesystem path
 * @returns URL that can be loaded by the webview
 */
export function resolveFilePath(absolutePath: string): string {
  if (!isTauri) {
    // In browser mode, this won't work properly
    console.warn('[AssetResolver] resolveFilePath called in browser mode');
    return absolutePath;
  }

  return convertFileSrc(absolutePath);
}

/**
 * Get the base URL for the current platform.
 * Useful for debugging and understanding the environment.
 */
export function getBaseUrl(): string {
  if (!isTauri) {
    return window.location.origin;
  }

  if (isIOS) {
    return 'tauri://localhost';
  }

  if (isAndroid) {
    return 'https://tauri.localhost';
  }

  // Desktop uses localhost or file://
  return window.location.origin;
}

/**
 * Get the Draco decoder path for the current platform.
 * On mobile, we should use bundled decoders instead of CDN
 * to avoid network issues and ensure offline functionality.
 */
export function getDracoDecoderPath(): string {
  // Use CDN for all platforms - it's reliable and cached
  // Note: For true offline support, we'd need to bundle the decoders
  return 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/';
}

/**
 * Check if we're running on a mobile platform
 */
export function isMobilePlatform(): boolean {
  return isMobile;
}

/**
 * Check if we're running in a Tauri environment
 */
export function isTauriEnvironment(): boolean {
  return isTauri;
}

/**
 * Get platform information for debugging
 */
export function getPlatformInfo(): {
  isTauri: boolean;
  platform: string;
  isIOS: boolean;
  isAndroid: boolean;
  isMobile: boolean;
  baseUrl: string;
} {
  return {
    isTauri,
    platform,
    isIOS,
    isAndroid,
    isMobile,
    baseUrl: getBaseUrl(),
  };
}

export default {
  resolveAssetPath,
  resolveFilePath,
  getBaseUrl,
  getDracoDecoderPath,
  isMobilePlatform,
  isTauriEnvironment,
  getPlatformInfo,
};
