const cacheName = 'Lista Videos';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '../img/appInicio.jpg', // Asegúrate de cambiar esto a la ruta correcta
  '/css/styleIndex.css',
  '/css/styleMenu.css',
  '/js/Ejemplo1.js',
  '/js/listaVideos.js' // Agrega tus otros archivos JS si los tienes
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
