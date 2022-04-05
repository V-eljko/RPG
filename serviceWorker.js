const staticSkull = "skull-v1";
const assets = [
  "/",
  "/index.html",
  "/styles/index.css",
  "/music/And The Journey Begins.wav",
  "/music/Decisive Battle.wav",
  "/music/Exploring The Unknown.wav",
  "/music/Minigame.wav",
  "/music/Mysterious Dungeon.wav",
  "/music/Prepare for Battle!.wav",
  "/music/Take some rest and eat some food!.wav",
  "/music/The Final of The Fantasy.wav",
  "/music/The Icy Cave.wav",
  "/music/Title Theme.wav",
];

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
