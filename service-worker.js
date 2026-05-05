const CACHE_NAME = "finance-tracker-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/main.js",
  "/service-worker.js",
  "/fitur/budgeting/budgeting.js",
  "/fitur/expense/expense.js",
  "/fitur/income/income.js",
  "/fitur/totalAndReset/total.js",
  "/fitur/totalAndReset/reset.js",
  "/fitur/shared/localStorgeData.js",
  "/fitur/shared/convertStringRpToNumber.js",
  "/fitur/shared/formatRupiah.js",
  "/fitur/shared/deleteFeatures.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache: ", cacheName);
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
