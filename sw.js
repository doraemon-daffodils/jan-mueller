if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),o={module:{uri:n},exports:a,require:u};e[n]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-f8b5deff"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"7a70affac3ce05ed973e912c5b4f9fc4"},{url:"about.html",revision:"a4d20dac49461f64c8bffd1637683d34"},{url:"assets/_...all_.6fa88501.js",revision:null},{url:"assets/_...all_.83f4da1f.css",revision:null},{url:"assets/_name_.18a5e745.js",revision:null},{url:"assets/_name_.4c4fe1c0.css",revision:null},{url:"assets/_name_.b6f42b60.js",revision:null},{url:"assets/_name_.d4bafe98.css",revision:null},{url:"assets/404.2b7a8886.css",revision:null},{url:"assets/404.970bd449.js",revision:null},{url:"assets/about.050b59e2.js",revision:null},{url:"assets/about.411f1de4.css",revision:null},{url:"assets/app.e560349b.js",revision:null},{url:"assets/app.fe60a681.css",revision:null},{url:"assets/documents.23cf6091.js",revision:null},{url:"assets/fullscreen.237468e2.js",revision:null},{url:"assets/fullscreen.8fc82dbb.css",revision:null},{url:"assets/index.8b4134a2.js",revision:null},{url:"assets/index.bb6a74d7.css",revision:null},{url:"assets/index.f449d274.js",revision:null},{url:"assets/models.4e6cc1b0.js",revision:null},{url:"assets/route-block.b5bad31b.js",revision:null},{url:"assets/vendor.cf4c146d.js",revision:null},{url:"assets/virtual_pwa-register.0b4e155d.js",revision:null},{url:"assets/vue-masonry-wall.7c66e0a1.css",revision:null},{url:"assets/vue-masonry-wall.a1a212c2.js",revision:null},{url:"blog.html",revision:"73b44c1174ef08c6541a48de8630f8b3"},{url:"blog/vue-masonry-wall.html",revision:"a7c05c6e0f13b5741eaff9d82c5eed0d"},{url:"files.html",revision:"9a9be6f2a34a8c1dff3225a384bfed58"},{url:"files/documents/bachelor-thesis.html",revision:"535a5f24054c62de706f9ba3aa3588b0"},{url:"files/documents/koffee.html",revision:"521a1b1e245b418c25ee02af10e1dd74"},{url:"files/documents/threadsafe-data-structures.html",revision:"bcf131280028c00aa2400b5ff2cafa99"},{url:"files/models/an-26.html",revision:"bd5000ed1311cdc7b862c176ac99eda4"},{url:"index.html",revision:"1b2b1309f6feec563468210547a35639"},{url:"favicon.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"pwa-192x192.png",revision:"c93bea5e8af3aafcdf9f6c91d57b8c72"},{url:"pwa-512x512.png",revision:"9cf5c46aab8b8c44a9ffb2ca99612b98"},{url:"manifest.webmanifest",revision:"9b408f06a5c8fd5b4fa6c3888bae3eae"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
