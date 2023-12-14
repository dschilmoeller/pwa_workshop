// This is going to run in the main thread of the browser
// it needs to register a service worker on it's own thread

// This can fail, if service workers aren't supported,
// so we should test first

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceworker.js");
}
