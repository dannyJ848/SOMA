/**
 * Model Auto-Loader
 * 
 * Ensures 3D model loads properly on initial render.
 * Handles retry logic and fallback to simplified mode.
 */

import React, { useState, useEffect, useCallback } from 'react';

interface ModelAutoLoaderProps {
  onLoad: () => void;
  onError: () => void;
  maxRetries?: number;
  timeout?: number;
}

export const ModelAutoLoader: React.FC<ModelAutoLoaderProps> = ({
  onLoad,
  onError,
  maxRetries = 3,
  timeout = 10000,
}) => {
  const [retryCount, setRetryCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const attemptLoad = useCallback(() => {
    setIsLoading(true);
    setError(null);

    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
      setError('WebGL not supported');
      onError();
      return;
    }

    // Simulate load check
    const checkInterval = setInterval(() => {
      // Check if Three.js context is ready
      const win = window as any;
      if (win.THREE || win.__THREE__) {
        clearInterval(checkInterval);
        setIsLoading(false);
        onLoad();
      }
    }, 100);

    // Timeout fallback
    setTimeout(() => {
      clearInterval(checkInterval);
      if (retryCount < maxRetries) {
        setRetryCount(prev => prev + 1);
        attemptLoad();
      } else {
        setError('Failed to load after max retries');
        setIsLoading(false);
        onError();
      }
    }, timeout);
  }, [retryCount, maxRetries, timeout, onLoad, onError]);

  useEffect(() => {
    // Delay initial load to let React render
    const timer = setTimeout(() => {
      attemptLoad();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#fff',
        zIndex: 100,
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🧬</div>
        <div>Loading 3D Model...{retryCount > 0 && ` (retry ${retryCount})`}</div>
        <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '5px' }}>
          Initializing WebGL context
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#f44336',
        zIndex: 100,
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⚠️</div>
        <div>{error}</div>
        <button
          onClick={attemptLoad}
          style={{
            marginTop: '10px',
            padding: '8px 16px',
            background: '#f44336',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return null;
};

export default ModelAutoLoader;
