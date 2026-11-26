const CACHE_NAME = 'are-meat-v1';
const URLS_TO_CACHE = [
  '/ARE-meat/',
  '/ARE-meat/index.html',
  '/ARE-meat/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
