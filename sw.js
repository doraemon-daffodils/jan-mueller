if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const u=e=>l(e,n),o={module:{uri:n},exports:a,require:u};s[n]=Promise.all(i.map((e=>o[e]||u(e)))).then((e=>(r(...e),a)))}}define(["./workbox-f8b5deff"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"57b54aa11a7cce5f80db108ae30cdc61"},{url:"about.html",revision:"178642d3cd251a2a7899cf8a9eec47c8"},{url:"assets/_...all_.4d9156d3.js",revision:null},{url:"assets/_...all_.83f4da1f.css",revision:null},{url:"assets/_name_.4042f033.js",revision:null},{url:"assets/_name_.4c4fe1c0.css",revision:null},{url:"assets/_name_.c4ab7038.js",revision:null},{url:"assets/_name_.d4bafe98.css",revision:null},{url:"assets/404.2b7a8886.css",revision:null},{url:"assets/404.4f9ef228.js",revision:null},{url:"assets/about.3a82f66e.js",revision:null},{url:"assets/about.411f1de4.css",revision:null},{url:"assets/app.4cebe0e5.js",revision:null},{url:"assets/app.fe60a681.css",revision:null},{url:"assets/documents.23cf6091.js",revision:null},{url:"assets/fullscreen.8fc82dbb.css",revision:null},{url:"assets/fullscreen.93d3a8ba.js",revision:null},{url:"assets/index.16c38dab.js",revision:null},{url:"assets/index.3f3f6815.js",revision:null},{url:"assets/index.bb6a74d7.css",revision:null},{url:"assets/models.4e6cc1b0.js",revision:null},{url:"assets/route-block.b5bad31b.js",revision:null},{url:"assets/virtual_pwa-register.0b4e155d.js",revision:null},{url:"assets/vue-masonry-wall.0f0548cd.js",revision:null},{url:"assets/vue-masonry-wall.714cb63e.css",revision:null},{url:"blog.html",revision:"7418394c4e068e9f0748d2feed8d1db4"},{url:"blog/vue-masonry-wall.html",revision:"188b6e71bdee0dc732adf3eed6851b23"},{url:"files.html",revision:"2bfdd740b6b387914f34d0540355eeb1"},{url:"files/documents/bachelor-thesis.html",revision:"0035c3cef93a5c1842e6b35808c20ccd"},{url:"files/documents/koffee.html",revision:"f9148153d7c362f6627931591bed94ed"},{url:"files/documents/threadsafe-data-structures.html",revision:"9d145b50472adaca0768f9362a0dbd11"},{url:"files/models/an-26.html",revision:"39a404f6e54ff30b2feba752a17fabd7"},{url:"index.html",revision:"3ab398e41294953ea2110b6efdd428b8"},{url:"favicon.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"9e2c532e29c032e303f1988b75f07ef4"},{url:"pwa-192x192.png",revision:"c93bea5e8af3aafcdf9f6c91d57b8c72"},{url:"pwa-512x512.png",revision:"9cf5c46aab8b8c44a9ffb2ca99612b98"},{url:"manifest.webmanifest",revision:"9b408f06a5c8fd5b4fa6c3888bae3eae"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
