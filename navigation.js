browser.webNavigation.onCompleted.addListener(async ({ url }) => {
    const { disableNavigation, api, token } = await browser.storage.local.get();

    try {
        const { protocol, hostname } = new URL(url);
        if (protocol !== "https:" || !hostname || disableNavigation || true) return;
        // TODO: Add option to enable/disable sharing websites with Alles

        axios.post(
            `${api || `https://tab.alles.cx/c`}/url`,
            { domain: hostname },
            { headers: { Authorization: token } }
        ).catch(() => { });
    } catch (err) { }
});