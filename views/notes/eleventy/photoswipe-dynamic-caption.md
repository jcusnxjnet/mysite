---
title: PhotoSwipe Dynamic Caption
templateEngineOverride: md
eleventyNavigation:
    key: PhotoSwipe Dynamic Caption
    parent: Eleventy
    order: 14
---
<h2 class="font-bold">Sources</h2>
<ol class="pl-14 text-other" style="list-style-type: lower-roman;">
<li><a href="https://photoswipe.com/getting-started/" class="text-link hover:font-bold">Official Documentation</a></li>
</ol>

<h2 class="font-bold pt-8">Prerequisite</h2>
<a href="/notes/eleventy/photoswipe/" class="text-link hover:font-bold">PhotoSwipe</a> is installed.

<h2 class="font-bold pt-8">Installation</h2>

```html
npm i photoswipe-dynamic-caption-plugin --save
```

<h2 class="font-bold pt-4">PhotoSwipe Dynamic Caption CSS and js files</h2>

Copy the following files (from `node_modules/photoswipe-dynamic-caption-plugin/`) 

<ul class="list-disc pt-4 pl-8">
<li>photoswipe-dynamic-caption-plugin.css - to <code>/views/assets/css/</code></li>
<li>photoswipe-dynamic-caption-plugin.esm.js - to <code>/views/assets/js/</code></li>
</ul>

<h2 class="font-bold pt-4">PhotoSwipe initialization</h2>

`/views/assets/js/photoswipe.js`

```js
import PhotoSwipeLightbox from '/assets/js/photoswipe-lightbox.esm.js'; // adjust path to your own
import PhotoSwipeDynamicCaption from '/assets/js/photoswipe-dynamic-caption-plugin.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  bgOpacity: 0.99,
  pswpModule: () => import('/assets/js/photoswipe.esm.js'), // adjust path to your own

});

const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
  // Plugins options, for example:
  type: 'auto', // the plugin will try to automatically determine the best position (depending on available space)
  captionContent: '.pswp-caption-content', // Will be used to retrieve caption content instead of alt.
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
    <link href="/assets/css/photoswipe-dynamic-caption-plugin.css" rel="stylesheet">
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
    <span class="pswp-caption-content">Caption content - Lorem Ipsum</span>
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
    <span class="pswp-caption-content">Caption content - Lorem Ipsum</span>
  </a>
</div>