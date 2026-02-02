/**
 * Enhanced Loading Screen
 * 
 * Beautiful loading screen with progress indication and animations.
 */

import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  progress?: number;
  message?: string;
  subMessage?: string;
}

export const EnhancedLoadingScreen: React.FC<LoadingScreenProps> = ({
  progress = 0,
  message = 'Loading...',
  subMessage,
}) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #0a0a14 0%, #1a1a2e 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      {/* Animated DNA Helix */}
      <div style={{ position: 'relative', width: '100px', height: '200px', marginBottom: '40px' }}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: `hsl(${200 + i * 10}, 70%, 50%)`,
              left: `${50 + Math.sin(i * 0.5) * 30}%`,
              top: `${i * 20}px`,
              animation: `pulse 1s ease-in-out ${i * 0.1}s infinite`,
              opacity: 0.8,
            }}
          />
        ))}
      </div>

      <style>{
        `
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.2); opacity: 1; }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `
      }</style>

      <h1
        style={{
          fontSize: '2rem',
          color: '#fff',
          marginBottom: '10px',
          fontWeight: '300',
          letterSpacing: '2px',
        }}
      >
        Biological Self
      </h1>

      <p
        style={{
          fontSize: '1.2rem',
          color: '#4a90e2',
          marginBottom: '30px',
        }}
      >
        {message}{dots}
      </p>

      {subMessage && (
        <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '20px' }}>
          {subMessage}
        </p>
      )}

      {/* Progress Bar */}
      <div
        style={{
          width: '300px',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '2px',
          overflow: 'hidden',
          marginBottom: '10px',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #4a90e2, #63b3ed)',
            borderRadius: '2px',
            transition: 'width 0.3s ease',
            boxShadow: '0 0 10px rgba(74, 144, 226, 0.5)',
          }}
        />
      </div>

      <p style={{ fontSize: '0.85rem', color: '#666' }}>
        {progress.toFixed(0)}%
      </p>

      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          textAlign: 'center',
          color: '#666',
          fontSize: '0.8rem',
        }}
      >
        <p>Loading medical knowledge base...</p>
        <p style={{ marginTop: '5px', fontSize: '0.75rem' }}>
          2,719+ educational files
        </p>
      </div>
    </div>
  );
};

export default EnhancedLoadingScreen;
