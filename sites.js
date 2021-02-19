(async () => {
    const trustedOrigin = window.location.origin === "https://tab.alles.cx";
    window.postMessage({
        type: "alles tab extension data",
        manifest: browser.runtime.getManifest(),
        storage: trustedOrigin ? (await browser.storage.local.get()) : null,
        trustedOrigin
    });
})();