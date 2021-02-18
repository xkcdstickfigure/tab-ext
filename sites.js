browser.storage.local.get().then(storage => window.postMessage({
    type: "alles tab extension data",
    manifest: browser.runtime.getManifest(),
    storage
}));