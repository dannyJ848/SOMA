/**
 * Biological Self - Tu Salud
 * Offline UI Indicators
 * 
 * Indicadores visuales para usuarios sin conexión
 * Optimizado para pacientes con datos limitados
 */

import { useState, useEffect, useCallback } from 'react';

// ==================== TIPOS ====================

export interface OfflineState {
  isOnline: boolean;
  connectionType: ConnectionType;
  effectiveType: 'slow-2g' | '2g' | '3g' | '4g' | 'unknown';
  saveData: boolean;
  lastSync: Date | null;
  pendingChanges: number;
  isSyncing: boolean;
}

type ConnectionType = 'wifi' | 'cellular' | 'ethernet' | 'bluetooth' | 'none' | 'unknown';

export interface PendingChange {
  id: string;
  type: 'health-data' | 'education-progress' | 'family-sharing' | 'settings';
  description: string;
  timestamp: Date;
  synced: boolean;
}

export interface OfflineAssetStatus {
  hasHealthData: boolean;
  hasEducationModules: boolean;
  hasUserProfile: boolean;
  totalCachedItems: number;
  cacheSizeMB: number;
}

// ==================== HOOK PRINCIPAL ====================

export function useOfflineState(): OfflineState {
  const [state, setState] = useState<OfflineState>({
    isOnline: navigator.onLine,
    connectionType: 'unknown',
    effectiveType: 'unknown',
    saveData: false,
    lastSync: null,
    pendingChanges: 0,
    isSyncing: false,
  });

  useEffect(() => {
    // Detectar información de conexión (Network Information API)
    const connection = (navigator as any).connection ||
                      (navigator as any).mozConnection ||
                      (navigator as any).webkitConnection;

    const updateConnectionInfo = () => {
      setState(prev => ({
        ...prev,
        isOnline: navigator.onLine,
        connectionType: connection?.type || 'unknown',
        effectiveType: connection?.effectiveType || 'unknown',
        saveData: connection?.saveData || false,
      }));
    };

    // Event listeners
    const handleOnline = () => {
      setState(prev => ({ ...prev, isOnline: true }));
      // Intentar sincronizar automáticamente
      triggerBackgroundSync();
    };

    const handleOffline = () => {
      setState(prev => ({ ...prev, isOnline: false }));
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    if (connection) {
      connection.addEventListener('change', updateConnectionInfo);
    }

    // Cargar estado inicial
    updateConnectionInfo();
    loadLastSyncInfo();
    countPendingChanges();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (connection) {
        connection.removeEventListener('change', updateConnectionInfo);
      }
    };
  }, []);

  return state;
}

// ==================== COMPONENTES DE UI ====================

import React from 'react';

export const OfflineBanner: React.FC = () => {
  const { isOnline, effectiveType, saveData } = useOfflineState();
  const [visible, setVisible] = useState(!isOnline);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setDismissed(false);
      setVisible(true);
    } else if (effectiveType === 'slow-2g' || effectiveType === '2g') {
      // Mostrar advertencia de conexión lenta
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [isOnline, effectiveType]);

  if (!visible || dismissed) return null;

  const getBannerContent = () => {
    if (!isOnline) {
      return {
        icon: '📴',
        message: 'Sin conexión',
        subtext: 'Puedes usar la app. Los cambios se guardarán localmente.',
        color: 'bg-red-600',
      };
    }
    if (effectiveType === 'slow-2g' || effectiveType === '2g') {
      return {
        icon: '🐌',
        message: 'Conexión lenta',
        subtext: saveData 
          ? 'Modo ahorro de datos activado. Algunas imágenes pueden no cargar.'
          : 'Tu conexión es lenta. La app optimizará el contenido.',
        color: 'bg-yellow-600',
      };
    }
    return null;
  };

  const content = getBannerContent();
  if (!content) return null;

  return (
    <div className={`${content.color} text-white px-4 py-2 flex items-center justify-between animate-fade-in`}>
      <div className="flex items-center gap-3">
        <span className="text-xl">{content.icon}</span>
        <div>
          <p className="font-semibold">{content.message}</p>
          <p className="text-sm opacity-90">{content.subtext}</p>
        </div>
      </div>
      <button 
        onClick={() => setDismissed(true)}
        className="text-white/80 hover:text-white p-1"
        aria-label="Cerrar"
      >
        ✕
      </button>
    </div>
  );
};

export const OfflineStatusIndicator: React.FC = () => {
  const { isOnline, pendingChanges, isSyncing } = useOfflineState();

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
      <span className={isOnline ? 'text-green-700' : 'text-red-700'}>
        {isOnline ? 'En línea' : 'Sin conexión'}
      </span>
      {pendingChanges > 0 && (
        <span className="text-orange-600">
          • {pendingChanges} cambio{pendingChanges !== 1 ? 's' : ''} pendiente{pendingChanges !== 1 ? 's' : ''}
        </span>
      )}
      {isSyncing && (
        <span className="text-blue-600 animate-pulse">
          • Sincronizando...
        </span>
      )}
    </div>  
  );
};

export const OfflineAvailabilityPanel: React.FC = () => {
  const [assets, setAssets] = useState<OfflineAssetStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkOfflineAssets().then(status => {
      setAssets(status);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="p-4 bg-slate-50 rounded-lg animate-pulse">
        <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-slate-200 rounded w-1/2"></div>
      </div>
    );
  }

  const features = [
    {
      icon: '📋',
      name: 'Tus datos de salud',
      available: assets?.hasHealthData || false,
      description: 'Información médica, medicamentos, alergias',
    },
    {
      icon: '📚',
      name: 'Módulos educativos',
      available: assets?.hasEducationModules || false,
      description: 'Contenido descargado para leer sin conexión',
    },
    {
      icon: '👤',
      name: 'Perfil de usuario',
      available: assets?.hasUserProfile || false,
      description: 'Tu información personal y preferencias',
    },
    {
      icon: '💾',
      name: 'Caché local',
      available: (assets?.totalCachedItems || 0) > 0,
      description: `${assets?.totalCachedItems || 0} elementos guardados (~${assets?.cacheSizeMB || 0} MB)`,
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4">
      <h3 className="font-semibold text-slate-800 mb-3">
        ✅ Disponible sin conexión
      </h3>
      <div className="space-y-2">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3 p-2 rounded hover:bg-slate-50">
            <span className="text-lg">{feature.icon}</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-700">{feature.name}</span>
                {feature.available ? (
                  <span className="text-green-500 text-xs">✓</span>
                ) : (
                  <span className="text-slate-400 text-xs">○</span>
                )}
              </div>
              <p className="text-sm text-slate-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-slate-100">
        <p className="text-xs text-slate-500">
          💡 <strong>Consejo:</strong> Descarga los módulos educativos 
          cuando tengas WiFi para usarlos después sin gastar datos.
        </p>
      </div>
    </div>
  );
};

export const PendingChangesPanel: React.FC = () => {
  const [changes, setChanges] = useState<PendingChange[]>([]);
  const [expanded, setExpanded] = useState(false);
  const { isOnline } = useOfflineState();

  useEffect(() => {
    loadPendingChanges().then(setChanges);
  }, []);

  const handleSyncNow = async () => {
    if (!isOnline) {
      alert('Necesitas conexión a internet para sincronizar');
      return;
    }
    
    await triggerManualSync();
    const updated = await loadPendingChanges();
    setChanges(updated);
  };

  if (changes.length === 0) return null;

  const groupedChanges = changes.reduce((acc, change) => {
    const date = change.timestamp.toLocaleDateString('es-ES');
    if (!acc[date]) acc[date] = [];
    acc[date].push(change);
    return acc;
  }, {} as Record<string, PendingChange[]>);

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🔄</span>
          <span className="font-medium text-amber-900">
            {changes.length} cambio{changes.length !== 1 ? 's' : ''} pendiente{changes.length !== 1 ? 's' : ''}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {isOnline && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSyncNow();
              }}
              className="px-3 py-1 bg-amber-600 text-white text-sm rounded hover:bg-amber-700"
            >
              Sincronizar ahora
            </button>
          )}
          <span className="text-amber-600">{expanded ? '▲' : '▼'}</span>
        </div>
      </div>

      {expanded && (
        <div className="mt-3 space-y-3">
          {Object.entries(groupedChanges).map(([date, items]) => (
            <div key={date}>
              <p className="text-xs font-medium text-amber-700 mb-1">{date}</p>
              <ul className="space-y-1">
                {items.map(change => (
                  <li 
                    key={change.id}
                    className="text-sm text-amber-800 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    {change.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ==================== FUNCIONES AUXILIARES ====================

export async function checkOfflineAssets(): Promise<OfflineAssetStatus> {
  // Verificar cachés del Service Worker
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    return new Promise((resolve) => {
      const channel = new MessageChannel();
      
      channel.port1.onmessage = (event) => {
        resolve({
          ...event.data,
          cacheSizeMB: 0, // Se calcula por separado
        });
      };
      
      navigator.serviceWorker.controller.postMessage(
        { type: 'CHECK_OFFLINE_ASSETS' },
        [channel.port2]
      );
      
      // Timeout fallback
      setTimeout(() => resolve({
        hasHealthData: false,
        hasEducationModules: false,
        hasUserProfile: false,
        totalCachedItems: 0,
        cacheSizeMB: 0,
      }), 3000);
    });
  }
  
  // Verificar localStorage como fallback
  return {
    hasHealthData: !!localStorage.getItem('health-data'),
    hasEducationModules: !!localStorage.getItem('education-modules'),
    hasUserProfile: !!localStorage.getItem('user-profile'),
    totalCachedItems: Object.keys(localStorage).length,
    cacheSizeMB: 0,
  };
}

export async function loadPendingChanges(): Promise<PendingChange[]> {
  const stored = localStorage.getItem('pending-changes');
  if (!stored) return [];
  
  try {
    const parsed = JSON.parse(stored);
    return parsed.map((c: any) => ({
      ...c,
      timestamp: new Date(c.timestamp),
    }));
  } catch {
    return [];
  }
}

export async function savePendingChange(change: Omit<PendingChange, 'id' | 'timestamp' | 'synced'>): Promise<void> {
  const changes = await loadPendingChanges();
  const newChange: PendingChange = {
    ...change,
    id: generateId(),
    timestamp: new Date(),
    synced: false,
  };
  
  changes.push(newChange);
  localStorage.setItem('pending-changes', JSON.stringify(changes));
  
  // Registrar para sync en background
  if ('sync' in (navigator as any).serviceWorker?.registration) {
    await (navigator as any).serviceWorker.registration.sync.register('sync-health-data');
  }
}

export async function markChangeSynced(id: string): Promise<void> {
  const changes = await loadPendingChanges();
  const updated = changes.filter(c => c.id !== id);
  localStorage.setItem('pending-changes', JSON.stringify(updated));
}

export async function triggerBackgroundSync(): Promise<void> {
  if ('serviceWorker' in navigator && 'sync' in (navigator as any).serviceWorker?.registration) {
    try {
      await (navigator as any).serviceWorker.registration.sync.register('sync-health-data');
    } catch (e) {
      console.error('Error registrando sync:', e);
    }
  }
}

export async function triggerManualSync(): Promise<void> {
  const changes = await loadPendingChanges();
  
  for (const change of changes.filter(c => !c.synced)) {
    try {
      // Intentar enviar cada cambio
      const response = await fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(change),
      });
      
      if (response.ok) {
        await markChangeSynced(change.id);
      }
    } catch (e) {
      console.error(`Error sincronizando cambio ${change.id}:`, e);
    }
  }
}

export function useConnectionQuality(): 'good' | 'fair' | 'poor' | 'offline' {
  const { isOnline, effectiveType } = useOfflineState();
  
  if (!isOnline) return 'offline';
  if (effectiveType === '4g') return 'good';
  if (effectiveType === '3g') return 'fair';
  return 'poor';
}

export function useShouldCompressImages(): boolean {
  const { saveData, effectiveType } = useOfflineState();
  return saveData || effectiveType === 'slow-2g' || effectiveType === '2g';
}

export function usePrefetchOnWifi(): boolean {
  const { connectionType, isOnline } = useOfflineState();
  return isOnline && (connectionType === 'wifi' || connectionType === 'ethernet');
}

// ==================== UTILIDADES INTERNAS ====================

async function loadLastSyncInfo(): Promise<Date | null> {
  const stored = localStorage.getItem('last-sync');
  return stored ? new Date(stored) : null;
}

async function countPendingChanges(): Promise<number> {
  const changes = await loadPendingChanges();
  return changes.filter(c => !c.synced).length;
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// ==================== ESTILOS CSS ====================

export const offlineStyles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }
  
  .offline-indicator {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
  }
`;
