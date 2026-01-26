/**
 * Service Worker for Biological Self
 *
 * Provides:
 * - Static asset caching (Cache API)
 * - Background sync for offline changes
 * - Push notifications readiness
 * - Offline fallback pages
 */

const CACHE_VERSION = 'v1';
const STATIC_CACHE = `biological-self-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `biological-self-dynamic-${CACHE_VERSION}`;
const MODEL_CACHE = `biological-self-models-${CACHE_VERSION}`;

// Static assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/icon.svg',
  '/manifest.json',
];

// Model files to cache (3D assets)
const MODEL_ASSETS = [
  // Add 3D model URLs here when available
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache first, network fallback
  cacheFirst: async (request, cacheName) => {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    try {
      const networkResponse = await fetch(request);
      if (networkResponse.ok) {
        const cache = await caches.open(cacheName);
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    } catch (error) {
      console.error('[SW] Cache first strategy failed:', error);
      return new Response('Offline', { status: 503 });
    }
  },

  // Network first, cache fallback
  networkFirst: async (request, cacheName) => {
    try {
      const networkResponse = await fetch(request);
      if (networkResponse.ok) {
        const cache = await caches.open(cacheName);
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    } catch (error) {
      const cachedResponse = await caches.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }
      return new Response('Offline', { status: 503 });
    }
  },

  // Stale while revalidate
  staleWhileRevalidate: async (request, cacheName) => {
    const cachedResponse = await caches.match(request);

    const fetchPromise = fetch(request).then(networkResponse => {
      if (networkResponse.ok) {
        const cache = caches.open(cacheName);
        cache.then(c => c.put(request, networkResponse.clone()));
      }
      return networkResponse;
    }).catch(() => null);

    return cachedResponse || fetchPromise || new Response('Offline', { status: 503 });
  },
};

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('[SW] Installing service worker...');

  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE).then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      }),
      // Cache model assets
      caches.open(MODEL_CACHE).then(cache => {
        console.log('[SW] Caching model assets');
        return cache.addAll(MODEL_ASSETS);
      }),
    ]).then(() => {
      console.log('[SW] Installation complete');
      // Skip waiting to activate immediately
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating service worker...');

  const currentCaches = [STATIC_CACHE, DYNAMIC_CACHE, MODEL_CACHE];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => !currentCaches.includes(cacheName))
          .map(cacheName => {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
    }).then(() => {
      console.log('[SW] Activation complete');
      // Take control of all pages immediately
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip cross-origin requests (except for known CDNs)
  if (url.origin !== location.origin) {
    // Allow specific CDNs for fonts, 3D models, etc.
    const allowedOrigins = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdn.jsdelivr.net',
    ];

    if (!allowedOrigins.some(origin => url.origin.startsWith(origin))) {
      return;
    }
  }

  // Determine caching strategy based on request type
  let strategy;
  let cacheName;

  // HTML pages - network first
  if (request.destination === 'document' || url.pathname.endsWith('.html')) {
    strategy = CACHE_STRATEGIES.networkFirst;
    cacheName = STATIC_CACHE;
  }
  // 3D models - cache first (large files)
  else if (url.pathname.endsWith('.glb') || url.pathname.endsWith('.gltf')) {
    strategy = CACHE_STRATEGIES.cacheFirst;
    cacheName = MODEL_CACHE;
  }
  // Images - stale while revalidate
  else if (request.destination === 'image') {
    strategy = CACHE_STRATEGIES.staleWhileRevalidate;
    cacheName = DYNAMIC_CACHE;
  }
  // Scripts and styles - stale while revalidate (for faster updates)
  else if (request.destination === 'script' || request.destination === 'style') {
    strategy = CACHE_STRATEGIES.staleWhileRevalidate;
    cacheName = STATIC_CACHE;
  }
  // Fonts - cache first (rarely change)
  else if (request.destination === 'font') {
    strategy = CACHE_STRATEGIES.cacheFirst;
    cacheName = STATIC_CACHE;
  }
  // API calls - network first
  else if (url.pathname.startsWith('/api/')) {
    strategy = CACHE_STRATEGIES.networkFirst;
    cacheName = DYNAMIC_CACHE;
  }
  // Default - stale while revalidate
  else {
    strategy = CACHE_STRATEGIES.staleWhileRevalidate;
    cacheName = DYNAMIC_CACHE;
  }

  event.respondWith(strategy(request, cacheName));
});

// Background sync event
self.addEventListener('sync', event => {
  console.log('[SW] Background sync triggered:', event.tag);

  if (event.tag === 'sync-data') {
    event.waitUntil(syncOfflineData());
  }
});

// Sync offline data with server
async function syncOfflineData() {
  console.log('[SW] Syncing offline data...');

  // Notify clients to perform sync
  const clients = await self.clients.matchAll();
  clients.forEach(client => {
    client.postMessage({
      type: 'SYNC_REQUESTED',
      timestamp: Date.now(),
    });
  });
}

// Push notification event (ready for future implementation)
self.addEventListener('push', event => {
  console.log('[SW] Push notification received');

  if (!event.data) return;

  const data = event.data.json();

  const options = {
    body: data.body || 'New notification from Biological Self',
    icon: '/icon.svg',
    badge: '/icon.svg',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/',
      timestamp: Date.now(),
    },
    actions: data.actions || [],
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'Biological Self', options)
  );
});

// Notification click event
self.addEventListener('notificationclick', event => {
  console.log('[SW] Notification clicked');

  event.notification.close();

  const url = event.notification.data?.url || '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(windowClients => {
      // Check if a window is already open
      for (const client of windowClients) {
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      // Open new window if none exists
      if (self.clients.openWindow) {
        return self.clients.openWindow(url);
      }
    })
  );
});

// Message event - handle messages from main thread
self.addEventListener('message', event => {
  const { type, payload } = event.data || {};

  switch (type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;

    case 'CACHE_URLS':
      if (Array.isArray(payload)) {
        caches.open(DYNAMIC_CACHE).then(cache => {
          cache.addAll(payload);
        });
      }
      break;

    case 'CLEAR_CACHE':
      caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
          if (cacheName.startsWith('biological-self-')) {
            caches.delete(cacheName);
          }
        });
      });
      break;

    case 'GET_CACHE_STATUS':
      getCacheStatus().then(status => {
        event.source?.postMessage({
          type: 'CACHE_STATUS',
          payload: status,
        });
      });
      break;
  }
});

// Get cache status for reporting
async function getCacheStatus() {
  const cacheNames = await caches.keys();
  let totalSize = 0;
  let itemCount = 0;

  for (const cacheName of cacheNames) {
    if (!cacheName.startsWith('biological-self-')) continue;

    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    itemCount += keys.length;

    // Estimate size (not accurate, but gives an idea)
    for (const request of keys) {
      const response = await cache.match(request);
      if (response) {
        const blob = await response.blob();
        totalSize += blob.size;
      }
    }
  }

  return {
    cacheNames: cacheNames.filter(n => n.startsWith('biological-self-')),
    itemCount,
    totalSize,
    lastUpdated: Date.now(),
  };
}

console.log('[SW] Service worker script loaded');
