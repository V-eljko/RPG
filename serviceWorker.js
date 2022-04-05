const staticSkull = "skull-v1";
const assets = ["/", "/index.html", "/styles/index.css", "/img/gameAssets"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(staticSkull).then((cache) => {
      cache.addAll(assets);
    })
  );
});
self.addEventListener("fetch", (fetchE) => {
  fetchE.respondWith(
    cahces.match(fetchE.request).then((res) => {
      return res || fetch(fetchE.request);
    })
  );
});
