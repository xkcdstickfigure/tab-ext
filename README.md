# Alles Tab Extension
This is the extension for Alles Tab. It sets your homepage and adds Alles Search as a search engine.

## Repository Structure
Chromium and Firefox extensions are mostly compatible (especially thanks to Mozilla's WebExtensions API polyfill), but there are still some minor differences. To deal with this, there is a `src` repository that contains all the code, including separate manifests for Chrome and Firefox - `manifest-chrome.json` and `manifest-firefox.json` - then you can use the `split.sh` script to split them into independent directories: `src` will be copied to `chrome` and `firefox`, and the correct manifest will be renamed to `manifest.json` while removing the other one.

## Signing and Distributing for Firefox
Firefox extensions can be distributed directly through Alles, however they need to be signed. To generate the signed .xpi file, you'll need to use the [web-ext](https://www.npmjs.com/package/web-ext) utility: `web-ext sign --api-key= --api-secret=`. See [the Extension Workshop page](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/) to learn more. The .xpi file can then be hosted, and when the browser navigates to it, it will show an install prompt.