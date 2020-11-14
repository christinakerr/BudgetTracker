const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

const iconSizes = ["192", "512"];
const iconFiles = iconSizes.map(
    (size) => `/icons/icon-${size}x${size}.png`
);

const staticFilesToPreCache = [
    "/",
    "/index.js",
    "/db.js",
    "/favicon.ico",
    "/manifest.webmanifest"
].concat(iconFiles);

self.addEventListener("install", function (evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Your files were pre-cached successfully!");
            return cache.addAll(staticFilesToPreCache);
        })
    );
    self.skipWaiting();
})

self.addEventListener("activate", function (evt) {
    
})