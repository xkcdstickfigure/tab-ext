rm -rf firefox
rm -rf chrome
cp -r src firefox
cp -r src chrome

rm firefox/manifest-chrome.json
mv firefox/manifest-firefox.json firefox/manifest.json

rm chrome/manifest-firefox.json
mv chrome/manifest-chrome.json chrome/manifest.json