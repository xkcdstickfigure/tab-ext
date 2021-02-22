// Send extension data to sites
(async () => {
    const trustedOrigin = [
        "https://tab.alles.cx",
        "https://search.alles.cx"
    ].includes(window.location.origin);

    window.postMessage({
        type: "alles tab extension data",
        manifest: browser.runtime.getManifest(),
        storage: trustedOrigin ? (await browser.storage.local.get()) : null,
        trustedOrigin
    });
})();

// Get token from tab.alles.cx
if (window.location.origin === "https://tab.alles.cx") {
    const token = document.querySelector("input[name=protium-token]")?.value;
    if (token) browser.storage.local.set({ token });
}

// Homepage Redirect
if (window.location.href === "https://tab.alles.cx/home")
    window.location.href = browser.runtime.getURL("homepage/index.html");