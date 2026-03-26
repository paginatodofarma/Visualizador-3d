// Service Worker para cachear modelos de MediaPipe
const CACHE_NAME = 'mediapipe-models-v1.0'; // Cambiar versión para forzar actualización de modelos

self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('fetch', event => {
    // Cachear cualquier petición que contenga 'mediapipe' en la URL
    if (event.request.url.includes('mediapipe') && event.request.url.includes('.tflite')) {
        event.respondWith(
            caches.match(event.request)
                .then(response => {
                    if (response) {
                        console.log('Modelo cacheado encontrado:', event.request.url);
                        // Verificar si hay una versión más nueva en background
                        fetch(event.request).then(networkResponse => {
                            if (networkResponse.status === 200) {
                                caches.open(CACHE_NAME).then(cache => {
                                    cache.put(event.request, networkResponse.clone());
                                });
                            }
                        }).catch(() => {
                            // Si falla, mantener el cacheado
                        });
                        return response;
                    }
                    console.log('Descargando modelo:', event.request.url);
                    return fetch(event.request).then(response => {
                        if (response.status === 200) {
                            const responseClone = response.clone();
                            caches.open(CACHE_NAME).then(cache => {
                                cache.put(event.request, responseClone);
                            });
                        }
                        return response;
                    });
                })
        );
    }
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Eliminando cache antiguo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Función para limpiar cache desde la app
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        caches.delete(CACHE_NAME).then(() => {
            event.ports[0].postMessage({type: 'CACHE_CLEARED'});
        });
    }
});