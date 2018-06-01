self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('russbiggs-static-v2').then(function(cache) {
            console.log('service worker cache!!');
            return cache.addAll([
                '/',
                'https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic',
                'css/style.css',
                'css/milligram.min.css',
                'css/normalize.min.css',
                'css/fonts/icomoon.woff',
                'css/fonts/icomoon.eot',
                'css/fonts/icomoon.svg',
                'css/fonts/icomoon.ttf',
                'img/russ.jpg',
                'index.html',
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