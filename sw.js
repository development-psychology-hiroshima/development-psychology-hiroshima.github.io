if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let o={};const r=e=>i(e,a),l={module:{uri:a},exports:o,require:r};s[a]=Promise.all(n.map((e=>l[e]||r(e)))).then((e=>(c(...e),o)))}}define(["./workbox-b371c18a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-legacy.a2aba459.js",revision:null},{url:"assets/index.dc9af077.js",revision:null},{url:"assets/polyfills-legacy.842dc993.js",revision:null},{url:"assets/style.da11fe51.css",revision:null},{url:"index.html",revision:"675f71c51b42cb05fae6060bfd500141"},{url:"favicons/apple-touch-icon.png",revision:"67929fa5a9b21009f12c513dbb17f908"},{url:"favicons/maskable-192x192.png",revision:"33d95df975aee67e2c0baf0502497757"},{url:"favicons/android-chrome-192x192.png",revision:"70bfc4cd79399a93eed6be568b3860d9"},{url:"favicons/android-chrome-512x512.png",revision:"bd952ce2d495400691592378d6b3c23e"},{url:"favicons/favicon-16x16.png",revision:"add44d35a939fd7e27cd5ffeee195579"},{url:"favicons/favicon-32x32.png",revision:"25e8a178bec710a1f2afd942e559b300"},{url:"manifest.webmanifest",revision:"2049f78a7a597237dd936f357cb85a04"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|webp)/,new e.StaleWhileRevalidate({cacheName:"image-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ya?ml)/,new e.NetworkFirst({cacheName:"js-css-cache",plugins:[]}),"GET")}));
