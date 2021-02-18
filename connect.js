const token = document.querySelector("input[name=protium-token]")?.value;

if (token) browser.storage.local.set({ token });