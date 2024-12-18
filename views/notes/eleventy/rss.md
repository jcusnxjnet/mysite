---
title: RSS Plugin
templateEngineOverride: md
eleventyNavigation:
    key: RSS Plugin
    parent: Eleventy
    order: 5
---
<h2 class="font-bold">Sources</h2>
<ol class="pl-14 text-other" style="list-style-type: lower-roman;">
<li><a href="https://www.11ty.dev/docs/plugins/rss/" class="text-link">Official Documentation</a></li>
</ol>

<h2 class="font-bold pt-8">Installation</h2>

```html
npm install @11ty/eleventy-plugin-rss
```
 
<h2 class="font-bold pt-4">Configuration (ESM)</h2>

`/eleventy.config.js`

```js
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "posts", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Blog Title",
			subtitle: "This is a longer description about your blog.",
			base: "https://example.com/",
			author: {
				name: "Your Name",
				email: "", // Optional
			}
		}
	});
};
```

<h2 class="font-bold pt-4">Adjust base layout</h2>

`/views/_layouts/base.njk`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
	<link rel="alternate" type="application/rss+xml" title="Your Site Title" href="https://yourwebsite.com/feed.xml" />
  </head>
  <body>
	<main>
     ... 
    </main>
  </body>
</html>
```
