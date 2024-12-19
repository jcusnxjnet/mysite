---
title: PhotoSwipe
templateEngineOverride: md
eleventyNavigation:
    key: PhotoSwipe
    parent: Eleventy
    order: 13
---
<h2 class="font-bold">Sources</h2>
<ol class="pl-14 text-other" style="list-style-type: lower-roman;">
<li><a href="https://photoswipe.com/getting-started/" class="text-link hover:font-bold">Official Documentation</a></li>
</ol>

<h2 class="font-bold pt-8">Installation</h2>

```html
npm install photoswipe
```

<h2 class="font-bold pt-4">PhotoSwipe CSS and js files</h2>

Copy the following files (from `node_modules/photoswipe/dist`)
<ul class="list-disc py-3 pl-8">
<li>photoswipe.esm.js - to <code>/views/assests/js/</code></li>
<li>photoswipe-lightbox.esm.js - to <code>/views/assests/js/</code></li>
<li>photoswipe.css - to <code>/views/assests/css/</code></li>
</ul>

<h2 class="font-bold pt-4">PhotoSwipe initialization</h2>

`/views/assets/js/photoswipe.js`

```js
import PhotoSwipeLightbox from '/assets/js/photoswipe-lightbox.esm.js'; 
const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  bgOpacity: 0.99,
  pswpModule: () => import('/assets/js/photoswipe.esm.js') 
});
lightbox.init();
```

<h2 class="font-bold pt-4">Base layout</h2>

`/views/_layouts/base.njk`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
    <link rel="stylesheet" href="/assets/css/photoswipe.css">  
    ...
  </head>
  <body>
    <main>
       ...
    </main>
    <script type="module" src="/assets/js/photoswipe.js"></script> 
  </body>
</html>
```

<h2 class="font-bold pt-4">Usage</h2>

`/views/example.md`

```html
<div class="pswp-gallery" id="my-gallery">
  <a href="https://live.staticflickr.com/65535/51357005462_53d25f0884_k.jpg" 
    data-pswp-width="2048" 
    data-pswp-height="1532" 
    target="_blank">
    <img src="/assets/img/sample-picture.jpg" alt="" />
  </a>
</div>
```
<div class="pt-4">Result</div>
<div class="pswp-gallery" id="my-gallery">
  <a href="https://live.staticflickr.com/65535/51357005462_53d25f0884_k.jpg" 
    data-pswp-width="2048" 
    data-pswp-height="1532" 
    target="_blank">
    <img src="/assets/img/sample-picture.jpg" alt="" />
  </a>
</div>