if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),f={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0364cb6d-e7d431a719fc2463.js",revision:"e7d431a719fc2463"},{url:"/_next/static/chunks/213e3704.77938a459115ed33.js",revision:"77938a459115ed33"},{url:"/_next/static/chunks/38860be7-0806314cd8f56cc2.js",revision:"0806314cd8f56cc2"},{url:"/_next/static/chunks/426-3ff0bab7f28db9fb.js",revision:"3ff0bab7f28db9fb"},{url:"/_next/static/chunks/4797ff90-e24a4c50af9a7ce7.js",revision:"e24a4c50af9a7ce7"},{url:"/_next/static/chunks/4b279159.4b06ca3f561e64df.js",revision:"4b06ca3f561e64df"},{url:"/_next/static/chunks/569.b156b55694f7927e.js",revision:"b156b55694f7927e"},{url:"/_next/static/chunks/5ddc822e-c19ede95f2dfad76.js",revision:"c19ede95f2dfad76"},{url:"/_next/static/chunks/653-d04af7e3c945c966.js",revision:"d04af7e3c945c966"},{url:"/_next/static/chunks/81-ecebc7d690d90a8a.js",revision:"ecebc7d690d90a8a"},{url:"/_next/static/chunks/81736d4f.61eaa50d7de278cc.js",revision:"61eaa50d7de278cc"},{url:"/_next/static/chunks/841f362c-a5c05e42641bbb8e.js",revision:"a5c05e42641bbb8e"},{url:"/_next/static/chunks/946-af2104443fa75020.js",revision:"af2104443fa75020"},{url:"/_next/static/chunks/95be9fd2-8f08dc46bbb85415.js",revision:"8f08dc46bbb85415"},{url:"/_next/static/chunks/980.8adb84b85ea19fb0.js",revision:"8adb84b85ea19fb0"},{url:"/_next/static/chunks/ce614c2e-06739cdeb4793cb1.js",revision:"06739cdeb4793cb1"},{url:"/_next/static/chunks/d04836f9-11ce1754a67d9145.js",revision:"11ce1754a67d9145"},{url:"/_next/static/chunks/d8ec1434-76f07c788e103c1d.js",revision:"76f07c788e103c1d"},{url:"/_next/static/chunks/dde8faf8-49f2604efaabb23b.js",revision:"49f2604efaabb23b"},{url:"/_next/static/chunks/ed30081a-64bf52fd7f7eeb26.js",revision:"64bf52fd7f7eeb26"},{url:"/_next/static/chunks/edd17c20-f397f77d57dd106a.js",revision:"f397f77d57dd106a"},{url:"/_next/static/chunks/framework-ac88a2a245aea9ab.js",revision:"ac88a2a245aea9ab"},{url:"/_next/static/chunks/main-08f63fbe1d21ee16.js",revision:"08f63fbe1d21ee16"},{url:"/_next/static/chunks/pages/CreateRoomPage-801a28b789f3c325.js",revision:"801a28b789f3c325"},{url:"/_next/static/chunks/pages/JoinUsPage-c61bee751abd2b5b.js",revision:"c61bee751abd2b5b"},{url:"/_next/static/chunks/pages/RoomPage/%5BEachRoom%5D-d00e545e788fb375.js",revision:"d00e545e788fb375"},{url:"/_next/static/chunks/pages/VerifyOTP-758bb2a8ab391336.js",revision:"758bb2a8ab391336"},{url:"/_next/static/chunks/pages/_app-aca44593ce079b95.js",revision:"aca44593ce079b95"},{url:"/_next/static/chunks/pages/_error-f64149636f57d53d.js",revision:"f64149636f57d53d"},{url:"/_next/static/chunks/pages/activate-9598f84fc853f121.js",revision:"9598f84fc853f121"},{url:"/_next/static/chunks/pages/index-91c73d01b95919b9.js",revision:"91c73d01b95919b9"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-004dbeecb1125635.js",revision:"004dbeecb1125635"},{url:"/_next/static/css/fb0132de3e1a35de.css",revision:"fb0132de3e1a35de"},{url:"/_next/static/fZg7wEFdGYY7HOyUnoAej/_buildManifest.js",revision:"bf2ca1b2d3ceb787bf97d780e9fd01be"},{url:"/_next/static/fZg7wEFdGYY7HOyUnoAej/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/HomeCard1.fe5f247c.png",revision:"f4c9e68fc71294c291481f9c805ebeda"},{url:"/_next/static/media/HomeCard2.0ef8807d.png",revision:"9bd7e2389081b0ae8c2f9beaade0b9e3"},{url:"/_next/static/media/logo.1818a61d.png",revision:"68e02d594ec33132aa97bc13a2400cd3"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/favicon/android-chrome-192x192.png",revision:"9ea536fd3befe1d13e615c945452a773"},{url:"/favicon/android-chrome-512x512.png",revision:"f29ae0d58def6a73967f7e9b7b34d9d3"},{url:"/favicon/apple-touch-icon.png",revision:"5d307b56f1c0bfd5a8260e6957185564"},{url:"/favicon/favicon-16x16.png",revision:"b0eb040289778ba6deffe9012ab25944"},{url:"/favicon/favicon-32x32.png",revision:"0a7dcc081c846f11f4ed7187fc936505"},{url:"/favicon/favicon.ico",revision:"8d499aea265d8fc74d4e9074326b4a5b"},{url:"/favicon/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/icon-192x192.png",revision:"4522c892b98de735afc4bef85ff3957d"},{url:"/icon-256x256.png",revision:"39b517a8232aafe2020054fbe11f55cd"},{url:"/icon-384x384.png",revision:"ddda52cecc3c276f7d78ebf21c88b22e"},{url:"/icon-512x512.png",revision:"b46f53476736e1837255590e266042e1"},{url:"/icons/LineWidth.png",revision:"f05f29d481b0a5f20657de871908510a"},{url:"/images/AreYouReady1.png",revision:"21255074adaf1feb6d5a282f1214b2a5"},{url:"/images/AreYouReady2.png",revision:"8640ab1b9c1075b417dac97bd533ab3a"},{url:"/images/CreateRoomPage1.png",revision:"7f5ea3b4d6e0fa549458cf0e93423730"},{url:"/images/HomeCard1.png",revision:"f4c9e68fc71294c291481f9c805ebeda"},{url:"/images/HomeCard2.png",revision:"9bd7e2389081b0ae8c2f9beaade0b9e3"},{url:"/images/HomeCard3.png",revision:"6b57728f2f400b6309bb1c74f3b10e8a"},{url:"/images/HomeCard4.png",revision:"725738e41a1e8d82bfeb5b6e812e44de"},{url:"/images/e62afd154b9ec394b7d282c7ef8e688c.gif",revision:"e184fc320680cf995615dcc80f6f9360"},{url:"/images/fullscreen.png",revision:"76cedf4b22aef055eee19d8191d67eeb"},{url:"/images/logo.png",revision:"68e02d594ec33132aa97bc13a2400cd3"},{url:"/images/pin.png",revision:"890844e148cdb51d1846df869dde5ba5"},{url:"/images/wave.png",revision:"6069193f8919031e90888a368f46fa4e"},{url:"/manifest.webmanifest",revision:"500fa29ccee22621657a247f45a21c42"},{url:"/models/Model.gltf",revision:"f3a233b36c5d84f4eaff4fecd21cd204"},{url:"/models/face_detection_model-weights_manifest.json",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/models/face_landmark_68_model-weights_manifest.json",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/worker.js",revision:"de36073c98b82bfbfe877d45093246a7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
