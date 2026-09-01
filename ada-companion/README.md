# ADA Companion — walkthrough site

Upload EVERY file in this folder into one directory on your host
(e.g. /ada-companion/), keeping the filenames exactly as they are:

- index.html        (the presentation)
- ada-app.dc.html   (the phone prototype)
- support.js        (the runtime — without it the page shows raw {{ }} text)
- ada-map.html      (the island map)
- ada-program.js    (programme data)
- ada-assess.js     (assessment data)
- sea-plate.png     (splash image)

After uploading, open these two URLs directly in a browser — both must load:

1. https://your-site/ada-companion/support.js
2. https://your-site/ada-companion/ada-app.dc.html

No build step. Fonts, Leaflet and map tiles load from the internet;
everything else is served from this folder.
