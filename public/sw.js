if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>n(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Qd4-dHBZuTYyWYGXsls8W/_buildManifest.js",revision:"Qd4-dHBZuTYyWYGXsls8W"},{url:"/_next/static/Qd4-dHBZuTYyWYGXsls8W/_middlewareManifest.js",revision:"Qd4-dHBZuTYyWYGXsls8W"},{url:"/_next/static/Qd4-dHBZuTYyWYGXsls8W/_ssgManifest.js",revision:"Qd4-dHBZuTYyWYGXsls8W"},{url:"/_next/static/chunks/378-2011beba4bc6c774.js",revision:"Qd4-dHBZuTYyWYGXsls8W"},{url:"/_next/static/chunks/framework-fc97f3f1282ce3ed.js",revision:"Qd4-dHBZuTYyWYGXsls8W"},{url:"/_next/static/chunks/main-98ea1928aca9dc12.js",revision:"Qd4-dHBZuTYyWYGXsls8W"},{url:"/_next/static/chunks/pages/_app-5baf025997b46ad7.js",revision:"Qd4-dHBZuTYyWYGXsls8W"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"Qd4-dHBZuTYyWYGXsls8W"},{url:"/_next/static/chunks/pages/index-38765058742d91f1.js",revision:"Qd4-dHBZuTYyWYGXsls8W"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"Qd4-dHBZuTYyWYGXsls8W"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"Qd4-dHBZuTYyWYGXsls8W"},{url:"/_next/static/css/58d02cdc49fa7526.css",revision:"Qd4-dHBZuTYyWYGXsls8W"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"15ccbd783a1177e0c6a12e7eccfda10d"},{url:"/icon-256x256.png",revision:"6f384f33ff4ace981fd5f08673429f2d"},{url:"/icon-384x384.png",revision:"eb4bf9cc9df7f06120884e97108ef8be"},{url:"/icon-512x512.png",revision:"8402826e670189e0dc1e3b583e008556"},{url:"/images/firma-white.png",revision:"8a56b4dba1c2e04fcc717118dcf80459"},{url:"/images/firma.png",revision:"fbe613088e721a66b2e575627434212b"},{url:"/images/jhonatan-1.png",revision:"02b6c7a7be5f9afa224d1a919edab934"},{url:"/images/jhonatan-2.png",revision:"019906a2bcc4d71d27ceb044ffa04643"},{url:"/images/logos/alsak-logo.png",revision:"0ae209a86d6fed5a030de203a8a98035"},{url:"/images/logos/ca-shield.png",revision:"b31abf044e4fcf53c7f5d347befd1a3c"},{url:"/images/logos/kendy-logo.png",revision:"4862454226510d3dec1bb7747c79fa4f"},{url:"/images/logos/konecta-logo.png",revision:"065fc1224487e76d2643b368e2af8a93"},{url:"/images/logos/tienda-pintuco.png",revision:"554892bc135a625f4e7260100995a9cc"},{url:"/images/logos/wenco-logo.png",revision:"95d798f450cbf4e702528c6d3ee66868"},{url:"/images/logotipo.png",revision:"b6caaf83168c13820b3c4081d53aef1b"},{url:"/images/projects/alcostal.png",revision:"d0c908463087704f31b364c07a9cfd1a"},{url:"/images/projects/alsak.png",revision:"228544a5e46e4099002f40020ba62ae9"},{url:"/images/projects/anten.png",revision:"033a2297f8c2ee546b7fe55a86d4c619"},{url:"/images/projects/brokers.png",revision:"bbedd406f887130d9e425ce809ca18f3"},{url:"/images/projects/ca-shield.png",revision:"9bf0e8e0767777ce67bec66ded3f9184"},{url:"/images/projects/citas-mascotas.png",revision:"5ba5f2e37f119129a703456b7eecb6f8"},{url:"/images/projects/cripto.png",revision:"a082e0352fa6cd565c7e6bbf5e697317"},{url:"/images/projects/gasto-semanal.png",revision:"22485f24510611122bd0cfdfede77dff"},{url:"/images/projects/kendy.png",revision:"ceadeb6fd32358f91d47d116d440f416"},{url:"/images/projects/merking.png",revision:"e42438a59fc9857ffcac3b82edd19e0b"},{url:"/images/projects/pintuco-sl.png",revision:"3d5b016a2eb38289e8572721178284a7"},{url:"/images/projects/vibeard.png",revision:"83141284b0d94391b9b7ba3f847e28d1"},{url:"/images/projects/wenco.png",revision:"fdb9a09f23284661b8f2f4caed9382c2"},{url:"/images/whatsapp.png",revision:"f9b52dcf1b5db377e07bbeecd0e27feb"},{url:"/manifest.json",revision:"4f1ff08c6605a81c883014df5050fab4"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
