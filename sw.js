if(!self.define){let e,s={};const l=(l,a)=>(l=new URL(l+".js",a).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(a,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const u=e=>l(e,r),o={module:{uri:r},exports:n,require:u};s[r]=Promise.all(a.map((e=>o[e]||u(e)))).then((e=>(i(...e),n)))}}define(["./workbox-6cd28afd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"7240fa14ef96ca4d814ff0cf1f28b127"},{url:"about.html",revision:"d115c88ac9438020cd42a5bc3fba4076"},{url:"assets/_...all_.79943db5.js",revision:null},{url:"assets/_...all_.83f4da1f.css",revision:null},{url:"assets/_name_.0f1616d0.js",revision:null},{url:"assets/_name_.3c755a16.js",revision:null},{url:"assets/_name_.4c4fe1c0.css",revision:null},{url:"assets/_name_.d4bafe98.css",revision:null},{url:"assets/404.2b7a8886.css",revision:null},{url:"assets/404.dbe210bc.js",revision:null},{url:"assets/about.6ec71730.js",revision:null},{url:"assets/about.c63a76a9.css",revision:null},{url:"assets/app.e08a251b.js",revision:null},{url:"assets/app.fe60a681.css",revision:null},{url:"assets/documents.23cf6091.js",revision:null},{url:"assets/fullscreen.8fc82dbb.css",revision:null},{url:"assets/fullscreen.a2cd1281.js",revision:null},{url:"assets/index.5d33a497.js",revision:null},{url:"assets/index.95ccf5e6.js",revision:null},{url:"assets/index.bb6a74d7.css",revision:null},{url:"assets/models.4e6cc1b0.js",revision:null},{url:"assets/route-block.b5bad31b.js",revision:null},{url:"assets/vendor.5f4e933a.js",revision:null},{url:"assets/virtual_pwa-register.3deeaaee.js",revision:null},{url:"assets/vue-masonry-wall.7c66e0a1.css",revision:null},{url:"assets/vue-masonry-wall.ca24ae71.js",revision:null},{url:"blog.html",revision:"41d5021ab6552a9d7a702a4ea3eebe19"},{url:"blog/vue-masonry-wall.html",revision:"691c293ffa12e4535faa803c4591e8ce"},{url:"files.html",revision:"a0780cdaab391664e680e7e2f0f54be1"},{url:"files/documents/bachelor-thesis.html",revision:"ba336c32a325ba55923fa539b00af829"},{url:"files/documents/koffee.html",revision:"ff3da6657dfe472f72ee75fd01508276"},{url:"files/documents/threadsafe-data-structures.html",revision:"792634f38a5948088b93cfb34b3eb166"},{url:"files/models/an-26.html",revision:"929d7c60ea2622e3d1e889210aceb74b"},{url:"index.html",revision:"0d34b11a831d67b988fcde780d0f2ee1"},{url:"favicon.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"pwa-192x192.png",revision:"c93bea5e8af3aafcdf9f6c91d57b8c72"},{url:"pwa-512x512.png",revision:"9cf5c46aab8b8c44a9ffb2ca99612b98"},{url:"manifest.webmanifest",revision:"9b408f06a5c8fd5b4fa6c3888bae3eae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
