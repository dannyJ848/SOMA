/**
 * Biological Self - Tu Salud
 * Service Worker for Offline-First PWA
 * 
 * Estrategias de caché para pacientes con datos limitados
 */

/// <reference lib="webworker" />

const CACHE_VERSION = 'v1.0.0';
const STATIC_CACHE = `biological-self-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `biological-self-dynamic-${CACHE_VERSION}`;
const DATA_CACHE = `biological-self-data-${CACHE_VERSION}`;
const IMAGE_CACHE = `biological-self-images-${CACHE_VERSION}`;

// Recursos críticos para la app shell
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/styles.css',
];

// Rutas de datos de salud del usuario (siempre disponibles offline)
const HEALTH_DATA_ROUTES = [
  '/api/health-data',
  '/api/user-profile',
  '/api/medications',
  '/api/allergies',
  '/api/conditions',
  '/api/appointments',
  '/api/lab-results',
];

// Módulos educativos para cachear
const EDUCATION_ROUTES = [
  '/api/education/modules',
  '/api/education/categories',
  '/api/education/progress',
];

// Lista de URLs que nunca deben cachearse
const NEVER_CACHE = [
  /\/api\/auth/,
  /\/api\/sync/,
  /\/api\/analytics/,
];

// ==================== INSTALACIÓN ====================

self.addEventListener('install', (event) => {
  console.log('[SW] Instalando Service Worker...');
  
  event.waitUntil(
    (async () => {
      // Cachear assets estáticos críticos
      const staticCache = await caches.open(STATIC_CACHE);
      await staticCache.addAll(STATIC_ASSETS);
      
      // Precargar datos esenciales del usuario si está autenticado
      try {
        const healthData = await fetch('/api/health-data?essential=true');
        if (healthData.ok) {
          const dataCache = await caches.open(DATA_CACHE);
          await dataCache.put('/api/health-data', healthData.clone());
        }
      } catch (e) {
        console.log('[SW] No se pudo precargar datos de salud');
      }
      
      console.log('[SW] Instalación completada');
    })()
  );
  
  // Activar inmediatamente
  self.skipWaiting();
});

// ==================== ACTIVACIÓN ====================

self.addEventListener('activate', (event) => {
  console.log('[SW] Activando Service Worker...');
  
  event.waitUntil(
    (async () => {
      // Limpiar cachés antiguos
      const cacheNames = await caches.keys();
      const deletionPromises = cacheNames
        .filter(name => {
          return name.startsWith('biological-self-') && 
                 !name.includes(CACHE_VERSION);
        })
        .map(name => {
          console.log(`[SW] Eliminando caché antigua: ${name}`);
          return caches.delete(name);
        });
      
      await Promise.all(deletionPromises);
      
      // Tomar control inmediato
      await self.clients.claim();
      
      console.log('[SW] Activación completada');
    })()
  );
});

// ==================== FETCH HANDLING ====================

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Ignorar requests no-GET y requests de analytics
  if (request.method !== 'GET' || shouldNeverCache(url.pathname)) {
    return;
  }
  
  // Estrategias según tipo de recurso
  if (isStaticAsset(url)) {
    event.respondWith(handleStaticAsset(request));
  } else if (isHealthData(url.pathname)) {
    event.respondWith(handleHealthData(request));
  } else if (isEducationContent(url.pathname)) {
    event.respondWith(handleEducationContent(request));
  } else if (isImage(request)) {
    event.respondWith(handleImage(request));
  } else {
    // Estrategia de red con fallback a caché
    event.respondWith(networkWithCacheFallback(request));
  }
});

// ==================== ESTRATEGIAS DE CACHÉ ====================

/**
 * Estrategia: Cache First con fallback a red
 * Para assets estáticos que raramente cambian
 */
async function handleStaticAsset(request: Request): Promise<Response> {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);
  
  if (cached) {
    // Refrescar en background
    fetch(request).then(response => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
    }).catch(() => {});
    
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return createOfflineResponse();
  }
}

/**
 * Estrategia: Stale While Revalidate
 * Para datos de salud - muestra inmediatamente, actualiza después
 */
async function handleHealthData(request: Request): Promise<Response> {
  const cache = await caches.open(DATA_CACHE);
  const cached = await cache.match(request);
  
  const networkPromise = fetch(request).then(async (response) => {
    if (response.ok) {
      await cache.put(request, response.clone());
      
      // Notificar a los clientes que hay nuevos datos
      const clients = await self.clients.matchAll();
      clients.forEach(client => {
        client.postMessage({
          type: 'HEALTH_DATA_UPDATED',
          url: request.url,
          timestamp: Date.now(),
        });
      });
    }
    return response;
  }).catch(() => cached); // Si falla, usar caché
  
  // Retornar caché inmediatamente si existe, o esperar red
  return cached || networkPromise;
}

/**
 * Estrategia: Cache First para contenido educativo
 * Prioriza disponibilidad offline sobre frescura
 */
async function handleEducationContent(request: Request): Promise<Response> {
  const cache = await caches.open(DATA_CACHE);
  const cached = await cache.match(request);
  
  if (cached) {
    // Intentar actualizar en background
    fetch(request).then(response => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
    }).catch(() => {});
    
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      await cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return createOfflineResponse('Contenido educativo no disponible offline');
  }
}

/**
 * Estrategia: Cache First con expiración para imágenes
 */
async function handleImage(request: Request): Promise<Response> {
  const cache = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);
  
  if (cached) {
    // Verificar si no ha expirado (7 días)
    const cachedDate = cached.headers.get('sw-cached-date');
    if (cachedDate) {
      const age = Date.now() - parseInt(cachedDate);
      const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 días
      
      if (age < maxAge) {
        return cached;
      }
    }
  }
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      // Agregar fecha de caché
      const headers = new Headers(response.headers);
      headers.set('sw-cached-date', Date.now().toString());
      
      const modifiedResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
      
      await cache.put(request, modifiedResponse.clone());
    }
    return response;
  } catch (error) {
    return cached || createOfflineResponse();
  }
}

/**
 * Estrategia general: Red primero, fallback a caché
 */
async function networkWithCacheFallback(request: Request): Promise<Response> {
  try {
    const networkResponse = await fetch(request);
    
    // Cachear respuestas GET exitosas
    if (networkResponse.ok && request.method === 'GET') {
      const cache = await caches.open(DYNAMIC_CACHE);
      await cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }
    
    return createOfflineResponse();
  }
}

// ==================== BACKGROUND SYNC ====================

interface SyncQueueItem {
  id: string;
  url: string;
  method: string;
  headers: Record<string, string>;
  body: any;
  timestamp: number;
  retries: number;
}

// Almacén de cambios pendientes
let syncQueue: SyncQueueItem[] = [];

self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-health-data') {
    event.waitUntil(processSyncQueue());
  }
});

async function processSyncQueue(): Promise<void> {
  const pending = [...syncQueue];
  syncQueue = [];
  
  for (const item of pending) {
    try {
      const response = await fetch(item.url, {
        method: item.method,
        headers: item.headers,
        body: JSON.stringify(item.body),
      });
      
      if (!response.ok && item.retries < 3) {
        // Reintentar más tarde
        item.retries++;
        syncQueue.push(item);
      } else if (response.ok) {
        // Notificar éxito
        await notifyClients({
          type: 'SYNC_SUCCESS',
          itemId: item.id,
          url: item.url,
        });
      }
    } catch (error) {
      if (item.retries < 3) {
        item.retries++;
        syncQueue.push(item);
      }
    }
  }
  
  // Guardar cola restante
  await saveSyncQueue();
}

async function saveSyncQueue(): Promise<void> {
  // Usar IndexedDB en lugar de variable en memoria
  const db = await openDB('biological-self-sync', 1);
  const tx = db.transaction('queue', 'readwrite');
  const store = tx.objectStore('queue');
  await store.clear();
  
  for (const item of syncQueue) {
    await store.add(item);
  }
}

// ==================== UTILIDADES ====================

function isStaticAsset(url: URL): boolean {
  const staticExtensions = ['.js', '.css', '.woff2', '.woff', '.ttf'];
  return staticExtensions.some(ext => url.pathname.endsWith(ext));
}

function isHealthData(pathname: string): boolean {
  return HEALTH_DATA_ROUTES.some(route => pathname.startsWith(route));
}

function isEducationContent(pathname: string): boolean {
  return EDUCATION_ROUTES.some(route => pathname.startsWith(route)) ||
         pathname.startsWith('/api/education/module/');
}

function isImage(request: Request): boolean {
  const accept = request.headers.get('accept') || '';
  return accept.includes('image/') || 
         request.url.match(/\.(png|jpg|jpeg|gif|webp|svg|ico)$/i) !== null;
}

function shouldNeverCache(pathname: string): boolean {
  return NEVER_CACHE.some(pattern => pattern.test(pathname));
}

function createOfflineResponse(message?: string): Response {
  return new Response(
    JSON.stringify({
      error: 'offline',
      message: message || 'Sin conexión a internet',
      offline: true,
      timestamp: new Date().toISOString(),
    }),
    {
      status: 503,
      statusText: 'Service Unavailable',
      headers: {
        'Content-Type': 'application/json',
        'X-Offline': 'true',
      },
    }
  );
}

async function notifyClients(message: any): Promise<void> {
  const clients = await self.clients.matchAll({ type: 'window' });
  clients.forEach(client => {
    client.postMessage(message);
  });
}

// Helper para IndexedDB (simplificado)
function openDB(name: string, version: number): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name, version);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('queue')) {
        db.createObjectStore('queue', { keyPath: 'id' });
      }
    };
  });
}

// ==================== PUSH NOTIFICATIONS ====================

self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  
  const options: NotificationOptions = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    tag: data.tag || 'biological-self',
    requireInteraction: data.requireInteraction || false,
    actions: data.actions || [],
    data: data.data || {},
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'Biological Self', options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  const action = event.action;
  const data = event.notification.data;
  
  event.waitUntil(
    self.clients.openWindow(data.url || '/')
  );
});

// ==================== MENSAJES DEL CLIENTE ====================

self.addEventListener('message', (event) => {
  const { type, payload } = event.data;
  
  switch (type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;
      
    case 'GET_VERSION':
      event.ports[0]?.postMessage({ version: CACHE_VERSION });
      break;
      
    case 'CACHE_EDUCATION_MODULE':
      event.waitUntil(cacheEducationModule(payload.moduleId));
      break;
      
    case 'CLEAR_ALL_CACHES':
      event.waitUntil(clearAllCaches());
      break;
      
    case 'CHECK_OFFLINE_ASSETS':
      event.waitUntil(checkOfflineAssets());
      break;
  }
});

async function cacheEducationModule(moduleId: string): Promise<void> {
  const cache = await caches.open(DATA_CACHE);
  
  const urls = [
    `/api/education/module/${moduleId}`,
    `/api/education/module/${moduleId}/content`,
    `/api/education/module/${moduleId}/media`,
  ];
  
  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        await cache.put(url, response.clone());
      }
    } catch (e) {
      console.log(`[SW] No se pudo cachear: ${url}`);
    }
  }
}

async function clearAllCaches(): Promise<void> {
  const cacheNames = await caches.keys();
  await Promise.all(cacheNames.map(name => caches.delete(name)));
}

async function checkOfflineAssets(): Promise<{[key: string]: boolean}> {
  const cache = await caches.open(DATA_CACHE);
  const keys = await cache.keys();
  
  return {
    hasHealthData: keys.some(req => req.url.includes('/api/health-data')),
    hasEducationModules: keys.some(req => req.url.includes('/api/education/module')),
    hasUserProfile: keys.some(req => req.url.includes('/api/user-profile')),
    totalCachedItems: keys.length,
  };
}

// Exportar tipo para TypeScript
declare const self: ServiceWorkerGlobalScope;
