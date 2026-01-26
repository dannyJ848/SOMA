/**
 * Stack trace parsing and handling utilities
 */

export interface StackFrame {
  functionName: string | null;
  fileName: string | null;
  lineNumber: number | null;
  columnNumber: number | null;
  source: string;
  isNative: boolean;
  isEval: boolean;
  isInternal: boolean;
}

export interface ParsedStackTrace {
  message: string;
  frames: StackFrame[];
  raw: string;
}

// Regex patterns for parsing different stack trace formats
const CHROME_REGEX = /^\s*at (?:(.+?)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?$/;
const FIREFOX_REGEX = /^(?:(.*)@)?(.+?):(\d+)(?::(\d+))?$/;
const SAFARI_REGEX = /^(?:(.*)@)?(?:(.+?):(\d+)(?::(\d+))?)$/;

// Internal file patterns to filter out
const INTERNAL_PATTERNS = [
  /node_modules/,
  /webpack/,
  /vite/,
  /__vite/,
  /react-dom/,
  /react\.development/,
  /react\.production/,
  /scheduler/,
  /regenerator-runtime/,
  /<anonymous>/,
];

/**
 * Parse a stack trace string into structured frames
 */
export function parseStackTrace(error: Error | string): ParsedStackTrace {
  const stack = typeof error === 'string' ? error : error.stack || '';
  const message = error instanceof Error ? error.message : '';

  const lines = stack.split('\n');
  const frames: StackFrame[] = [];

  for (const line of lines) {
    const frame = parseStackFrame(line.trim());
    if (frame) {
      frames.push(frame);
    }
  }

  return {
    message,
    frames,
    raw: stack,
  };
}

/**
 * Parse a single stack frame line
 */
function parseStackFrame(line: string): StackFrame | null {
  // Skip empty lines and the error message line
  if (!line || line.startsWith('Error:') || line.startsWith('TypeError:')) {
    return null;
  }

  // Try Chrome/V8 format
  let match = line.match(CHROME_REGEX);
  if (match) {
    const [, functionName, file, lineNum, colNum, nativeLocation] = match;
    const isNative = !!nativeLocation || line.includes('[native code]');

    return {
      functionName: functionName || null,
      fileName: file || nativeLocation || null,
      lineNumber: lineNum ? parseInt(lineNum, 10) : null,
      columnNumber: colNum ? parseInt(colNum, 10) : null,
      source: line,
      isNative,
      isEval: line.includes('eval'),
      isInternal: isInternalFrame(file || nativeLocation || ''),
    };
  }

  // Try Firefox format
  match = line.match(FIREFOX_REGEX);
  if (match) {
    const [, functionName, file, lineNum, colNum] = match;

    return {
      functionName: functionName || null,
      fileName: file || null,
      lineNumber: lineNum ? parseInt(lineNum, 10) : null,
      columnNumber: colNum ? parseInt(colNum, 10) : null,
      source: line,
      isNative: line.includes('[native code]'),
      isEval: line.includes('eval') || line.includes('Function'),
      isInternal: isInternalFrame(file || ''),
    };
  }

  // Try Safari format
  match = line.match(SAFARI_REGEX);
  if (match) {
    const [, functionName, file, lineNum, colNum] = match;

    return {
      functionName: functionName || null,
      fileName: file || null,
      lineNumber: lineNum ? parseInt(lineNum, 10) : null,
      columnNumber: colNum ? parseInt(colNum, 10) : null,
      source: line,
      isNative: line.includes('[native code]'),
      isEval: line.includes('eval'),
      isInternal: isInternalFrame(file || ''),
    };
  }

  return null;
}

/**
 * Check if a frame is from internal/library code
 */
function isInternalFrame(fileName: string): boolean {
  if (!fileName) return true;
  return INTERNAL_PATTERNS.some((pattern) => pattern.test(fileName));
}

/**
 * Filter stack frames to show only application code
 */
export function filterApplicationFrames(frames: StackFrame[]): StackFrame[] {
  return frames.filter((frame) => !frame.isInternal && !frame.isNative);
}

/**
 * Get the first application frame (likely the error source)
 */
export function getErrorSource(frames: StackFrame[]): StackFrame | null {
  const appFrames = filterApplicationFrames(frames);
  return appFrames[0] || null;
}

/**
 * Format a stack frame as a string
 */
export function formatStackFrame(frame: StackFrame): string {
  const parts: string[] = [];

  if (frame.functionName) {
    parts.push(`at ${frame.functionName}`);
  } else {
    parts.push('at <anonymous>');
  }

  if (frame.fileName) {
    const location = [frame.fileName];
    if (frame.lineNumber !== null) {
      location.push(`:${frame.lineNumber}`);
      if (frame.columnNumber !== null) {
        location.push(`:${frame.columnNumber}`);
      }
    }
    parts.push(`(${location.join('')})`);
  }

  return parts.join(' ');
}

/**
 * Format a full stack trace
 */
export function formatStackTrace(
  parsed: ParsedStackTrace,
  options: {
    includeInternal?: boolean;
    maxFrames?: number;
  } = {}
): string {
  const { includeInternal = false, maxFrames = 10 } = options;

  let frames = parsed.frames;
  if (!includeInternal) {
    frames = filterApplicationFrames(frames);
  }

  frames = frames.slice(0, maxFrames);

  const lines = frames.map(formatStackFrame);

  if (parsed.message) {
    lines.unshift(`Error: ${parsed.message}`);
  }

  if (frames.length < parsed.frames.length && !includeInternal) {
    lines.push(`  ... ${parsed.frames.length - frames.length} more frames (filtered)`);
  }

  return lines.join('\n');
}

/**
 * Extract component stack from React error info
 */
export function parseComponentStack(componentStack: string): string[] {
  if (!componentStack) return [];

  return componentStack
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('at ') || line.startsWith('in '))
    .map((line) => {
      // Extract component name
      const match = line.match(/^(?:at |in )([A-Z][A-Za-z0-9]*)/);
      return match ? match[1] : line;
    })
    .filter(Boolean);
}

/**
 * Get a simplified error location string
 */
export function getErrorLocation(error: Error): string {
  const parsed = parseStackTrace(error);
  const source = getErrorSource(parsed.frames);

  if (!source) {
    return 'Unknown location';
  }

  const parts: string[] = [];

  if (source.functionName) {
    parts.push(source.functionName);
  }

  if (source.fileName) {
    // Simplify file path
    const simplifiedPath = source.fileName
      .replace(/^.*\/src\//, 'src/')
      .replace(/\?.*$/, '');

    parts.push(`(${simplifiedPath}`);

    if (source.lineNumber !== null) {
      parts.push(`:${source.lineNumber}`);
    }

    parts.push(')');
  }

  return parts.join('') || 'Unknown location';
}

/**
 * Create a minified stack trace for logging
 */
export function minifyStackTrace(error: Error, maxFrames: number = 5): string {
  const parsed = parseStackTrace(error);
  const appFrames = filterApplicationFrames(parsed.frames).slice(0, maxFrames);

  return appFrames
    .map((frame) => {
      const fn = frame.functionName || 'anonymous';
      const file = frame.fileName?.replace(/^.*\//, '') || 'unknown';
      const line = frame.lineNumber || '?';
      return `${fn}@${file}:${line}`;
    })
    .join(' -> ');
}
