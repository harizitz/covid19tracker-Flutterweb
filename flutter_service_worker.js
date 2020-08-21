'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "15bc902de7662c59731663be11be804a",
"assets/FontManifest.json": "a8f1c574e1321185606a3a568e815ef9",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Oxanium-Medium.ttf": "400ab61503d6af26e2d5eb203a065a78",
"assets/images/cold.gif": "1a66f596d4ebceecbfd9bbde0b710298",
"assets/images/cough.gif": "6e2d1ee36f2fafdd3d2bab45e02170fc",
"assets/images/distance.gif": "0dcb85634f1212736502c0eac2367124",
"assets/images/fever.gif": "3fd81a8bc31ef7e4562d081c11721461",
"assets/images/flag.png": "003bf0138c2ccec5e84104f75ad67d88",
"assets/images/fruits.gif": "5319a51bcea6ccdbf7ad6b7fca62409d",
"assets/images/location.gif": "eef3902f06e51be47c7023ccdbd27602",
"assets/images/mask.gif": "bdc9bd367b36e79876a03e0db83586da",
"assets/images/safetyshield.gif": "9d8c718e77fc40e4269b26bab3eb9129",
"assets/images/sanitizer.gif": "5d5c2b796bbc79bf90132f9cf9cfbc86",
"assets/images/stayhome.gif": "83697b60d73128e194d9607d536b75ff",
"assets/images/washhands.gif": "14964606033fe5cb87a49bb53bbb481a",
"assets/LICENSE": "89ccce1dfd2ea201733616a7ccfdd5da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "a80eff61840bec5b49d0b22c7270a1eb",
"icons/Icon-192.png": "a80eff61840bec5b49d0b22c7270a1eb",
"icons/Icon-512.png": "a80eff61840bec5b49d0b22c7270a1eb",
"index.html": "79e6f39b4519932ecec2e68fcb9f3717",
"/": "79e6f39b4519932ecec2e68fcb9f3717",
"main.dart.js": "cb5a50585a32d77fc7bab3f8c62974e9",
"manifest.json": "962aabe762f9330e5add5468e280c824"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
