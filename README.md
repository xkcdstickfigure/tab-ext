# Alles Tab Extension
This is the extension for Alles Tab. It sets your homepage and adds Alles Search as a search engine.

## Repository Structure
Chromium and Firefox extensions are mostly compatible (especially thanks to Mozilla's WebExtensions API polyfill), but there are still some minor differences. To deal with this, there is a `src` repository that contains all the code, including separate manifests for Chrome and Firefox - `manifest-chrome.json` and `manifest-firefox.json` - then you can use the `split.sh` script to split them into independent directories: `src` will be copied to `chrome` and `firefox`, and the correct manifest will be renamed to `manifest.json` while removing the other one.