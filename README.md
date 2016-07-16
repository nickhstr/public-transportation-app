# Public Transportation App

An offline-first transportation app for BART. [Check it out!](https://nickhstr-transport-app.firebaseapp.com/)

## Offline-First

You guessed it, this app works offline! Upon first loading the app, its assets are cached (save for the map) by a service worker. From there, each route request is fetched from BART's API, and saved to indexedDB with a key determined by the route's start and end addresses, and the time requested.

When online, all route information is realtime and the most up-to-date. While offline, the only route information available is that requested by the user earlier when online. Rather than saving every single route's schedule to indexedDB, this app - in an effort to save space - simply caches only routes the user has requested.

## Using the App

The app is simple by design, navigable across all devices. On mobile, the map is hidden for more straightforward use; however, larger screens will enjoy the full experience. Additionally, Android users can save the app to the homescreen and use it similarly to a native app. 

A map is included to give a geographical representation of the requested route. The map updates directions when a new route is requested.

After a route is searched for, four upcoming-route results (the max amount of results supplied by BART) are displayed below the inputs, and if there are any special schedule notices, they are displayed below the route results.

## Build Process

Because this app is built with Polymer, its build process is handled by the Polymer CLI. In order to build this app locally:

- Clone the repo and cd into the "transport-app" directory
- Install Polymer CLI `npm install -g polymer-cli`
- Assuming bower is installed, run `bower install`
- Run `polymer-build`

The repository already includes the build files, but this process will overwrite the old with the new. Within the build folder, you'll find two folders, "bundled" and "unbundled". The first consolidates all app assets into one file (in this case "transport-app.html") to reduce the number of requests made to the server; the latter is better suited for HTTP2 servers. For this app, either will work just fine; the performance difference is not significant.

### Important Notes

Please use Google Chrome for this app. It is the only browser guaranteed to fully work with this app. Firefox and Opera should work, but Internet Explorer and Safari just won't do.

Also, because BART's API uses HTTP rather than HTTPS, a [proxy server](https://crossorigin.me) was used to mitigate CORS errors. The proxy server basically serves as a bridge of communication between my app and BARTS's API.