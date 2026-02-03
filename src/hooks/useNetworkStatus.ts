/**
 * Network Status Hook
 *
 * Provides real-time network status monitoring with detailed connection info.
 * Detects online/offline state, connection quality, and effective network type.
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import type { NetworkState, NetworkStatus } from '../offline/types';
import { syncManager } from '../offline/syncManager';

// Connection type from Navigator.connection
interface NetworkInformation extends EventTarget {
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
  addEventListener(type: 'change', listener: () => void): void;
  removeEventListener(type: 'change', listener: () => void): void;
}

// Extend Navigator type
declare global {
  interface Navigator {
    connection?: NetworkInformation;
    mozConnection?: NetworkInformation;
    webkitConnection?: NetworkInformation;
  }
}

// Threshold for considering connection "slow"
const SLOW_CONNECTION_RTT = 500; // ms
const SLOW_CONNECTION_DOWNLINK = 0.5; // Mbps

function getNetworkConnection(): NetworkInformation | undefined {
  return navigator.connection || navigator.mozConnection || navigator.webkitConnection;
}

function determineNetworkStatus(isOnline: boolean, connection?: NetworkInformation): NetworkStatus {
  if (!isOnline) return 'offline';

  if (connection) {
    // Check for slow connection indicators
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      return 'slow';
    }
    if (connection.rtt && connection.rtt > SLOW_CONNECTION_RTT) {
      return 'slow';
    }
    if (connection.downlink && connection.downlink < SLOW_CONNECTION_DOWNLINK) {
      return 'slow';
    }
  }

  return 'online';
}

export interface UseNetworkStatusReturn {
  // Current network state
  networkState: NetworkState;
  // Is the device online?
  isOnline: boolean;
  // Is the device offline?
  isOffline: boolean;
  // Is the connection slow?
  isSlowConnection: boolean;
  // Time since last online (null if currently online)
  offlineDuration: number | null;
  // Force a sync attempt
  attemptSync: () => Promise<void>;
  // Pending changes count
  pendingChanges: number;
}

export function useNetworkStatus(): UseNetworkStatusReturn {
  const [networkState, setNetworkState] = useState<NetworkState>(() => {
    const connection = getNetworkConnection();
    const isOnline = navigator.onLine;

    return {
      status: determineNetworkStatus(isOnline, connection),
      lastOnline: isOnline ? Date.now() : null,
      lastSync: null,
      pendingChanges: 0,
      effectiveType: connection?.effectiveType,
      downlink: connection?.downlink,
      rtt: connection?.rtt,
    };
  });

  const [pendingChanges, setPendingChanges] = useState(0);
  const wasOfflineRef = useRef(!navigator.onLine);
  const syncTimeoutRef = useRef<number | null>(null);

  // Update pending changes count
  const updatePendingChanges = useCallback(async () => {
    const count = await syncManager.getPendingCount();
    setPendingChanges(count);
    setNetworkState(prev => ({ ...prev, pendingChanges: count }));
  }, []);

  // Handle going online
  const handleOnline = useCallback(() => {
    console.log('[NetworkStatus] Device came online');

    const connection = getNetworkConnection();
    const now = Date.now();

    setNetworkState(prev => ({
      ...prev,
      status: determineNetworkStatus(true, connection),
      lastOnline: now,
      effectiveType: connection?.effectiveType,
      downlink: connection?.downlink,
      rtt: connection?.rtt,
    }));

    // If we were offline, trigger sync
    if (wasOfflineRef.current) {
      wasOfflineRef.current = false;
      // Delay sync slightly to allow connection to stabilize
      if (syncTimeoutRef.current) {
        clearTimeout(syncTimeoutRef.current);
      }
      syncTimeoutRef.current = window.setTimeout(() => {
        syncManager.attemptSync().then(result => {
          if (result.success) {
            setNetworkState(prev => ({ ...prev, lastSync: Date.now() }));
          }
          updatePendingChanges();
        });
      }, 1000);
    }
  }, [updatePendingChanges]);

  // Handle going offline
  const handleOffline = useCallback(() => {
    console.log('[NetworkStatus] Device went offline');

    wasOfflineRef.current = true;

    setNetworkState(prev => ({
      ...prev,
      status: 'offline',
    }));

    // Cancel any pending sync
    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
      syncTimeoutRef.current = null;
    }
    syncManager.cancelSync();
  }, []);

  // Handle connection change
  const handleConnectionChange = useCallback(() => {
    const connection = getNetworkConnection();
    const isOnline = navigator.onLine;

    setNetworkState(prev => ({
      ...prev,
      status: determineNetworkStatus(isOnline, connection),
      effectiveType: connection?.effectiveType,
      downlink: connection?.downlink,
      rtt: connection?.rtt,
    }));
  }, []);

  // Set up event listeners
  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const connection = getNetworkConnection();
    if (connection) {
      connection.addEventListener('change', handleConnectionChange);
    }

    // Initial pending changes count
    updatePendingChanges();

    // Subscribe to sync results
    const unsubscribe = syncManager.onSyncComplete(() => {
      updatePendingChanges();
    });

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);

      if (connection) {
        connection.removeEventListener('change', handleConnectionChange);
      }

      if (syncTimeoutRef.current) {
        clearTimeout(syncTimeoutRef.current);
      }

      unsubscribe();
    };
  }, [handleOnline, handleOffline, handleConnectionChange, updatePendingChanges]);

  // Attempt manual sync
  const attemptSync = useCallback(async () => {
    if (!navigator.onLine) {
      console.log('[NetworkStatus] Cannot sync while offline');
      return;
    }

    const result = await syncManager.attemptSync();
    if (result.success) {
      setNetworkState(prev => ({
        ...prev,
        lastSync: Date.now(),
      }));
    }
    await updatePendingChanges();
  }, [updatePendingChanges]);

  // Calculate offline duration
  const offlineDuration = networkState.status === 'offline' && networkState.lastOnline
    ? Date.now() - networkState.lastOnline
    : null;

  return {
    networkState,
    isOnline: networkState.status !== 'offline',
    isOffline: networkState.status === 'offline',
    isSlowConnection: networkState.status === 'slow',
    offlineDuration,
    attemptSync,
    pendingChanges,
  };
}

export default useNetworkStatus;
