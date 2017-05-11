self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('russbiggs-static-v1').then(function(cache) {
            console.log('site cached');
            return cache.addAll([
                '/',
                'css/style.css',
                'css/material.min.css',
                'css/fonts/icomoon.woff',
                'css/fonts/icomoon.eot',
                'css/fonts/icomoon.svg',
                'css/fonts/icomoon.ttf',
                'img/russ.jpg',
                'index.html',
                'js/material.min.js',
                'favicon.ico'
            ]);
        })
    );
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(response => {
            return response || fetch(event.request);
        })
    );
});