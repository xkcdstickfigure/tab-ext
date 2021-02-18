browser.storage.local.get().then(storage => window.postMessage({
    source: "alles tab extension",
    manifest: browser.runtime.getManifest(),
    storage
}));