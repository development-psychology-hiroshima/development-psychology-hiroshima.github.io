if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const c=e=>i(e,r),u={module:{uri:r},exports:a,require:c};s[r]=Promise.all(n.map((e=>u[e]||c(e)))).then((e=>(l(...e),a)))}}define(["./workbox-a868e071"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"annual_schedule.html",revision:"e91dc68acf864a13a181a040f2305077"},{url:"assets/annual_schedule-legacy.9e845196.js",revision:null},{url:"assets/annual_schedule.af41e1cc.js",revision:null},{url:"assets/index-legacy.49dddcef.js",revision:null},{url:"assets/index.441d982a.js",revision:null},{url:"assets/main-legacy.5efe9715.js",revision:null},{url:"assets/main.27730fc2.js",revision:null},{url:"assets/members-legacy.07cac3d6.js",revision:null},{url:"assets/members.408e61c0.js",revision:null},{url:"assets/polyfills-legacy.ca3d0c14.js",revision:null},{url:"assets/research_students-legacy.fabf74d2.js",revision:null},{url:"assets/research_students.066e800e.js",revision:null},{url:"assets/style.9079176d.css",revision:null},{url:"assets/sugimura-legacy.83d8fa24.js",revision:null},{url:"assets/sugimura.7c9adcbc.js",revision:null},{url:"assets/umemura-legacy.df6f3619.js",revision:null},{url:"assets/umemura.5fa0fc0a.js",revision:null},{url:"assets/workbox-window.prod.es5-legacy.924c7b22.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"index.html",revision:"fab42c6503616807293da43eedaba238"},{url:"members.html",revision:"6b81321802476adee603a1112933f9f4"},{url:"research_students.html",revision:"35ced373fb2c2bd8a62ca6f8513b469f"},{url:"sugimura.html",revision:"c53fb064b706f3b6d3c68f79be0991c4"},{url:"umemura.html",revision:"fa52c36eeee1f72d49fc80923c9d97e4"},{url:"favicons/apple-touch-icon.png",revision:"67929fa5a9b21009f12c513dbb17f908"},{url:"favicons/android-chrome-192x192.png",revision:"70bfc4cd79399a93eed6be568b3860d9"},{url:"favicons/android-chrome-512x512.png",revision:"bd952ce2d495400691592378d6b3c23e"},{url:"favicons/favicon-16x16.png",revision:"add44d35a939fd7e27cd5ffeee195579"},{url:"favicons/favicon-32x32.png",revision:"25e8a178bec710a1f2afd942e559b300"},{url:"favicons/maskable-192x192.png",revision:"33d95df975aee67e2c0baf0502497757"},{url:"manifest.webmanifest",revision:"2049f78a7a597237dd936f357cb85a04"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|webp|ico)$/i,new e.StaleWhileRevalidate({cacheName:"image-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ya?ml|json)$/i,new e.NetworkFirst({cacheName:"static-cache",networkTimeoutSeconds:5,plugins:[]}),"GET")}));
