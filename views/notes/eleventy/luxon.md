---
title: luxon
templateEngineOverride: md
eleventyNavigation:
  key: luxon
  parent: Eleventy
  order: 10
---
<h2>Sources</h2>
<ol class="pl-14 text-other" style="list-style-type: lower-roman;">
<li><a href="https://11ty.rocks/eleventyjs/dates/" class="text-link hover:font-bold">11ty Date Shortcodes and Filters</a></li>
<li><a href="https://moment.github.io/luxon/" class="text-link hover:font-bold">Official Documentation</a></li>
</ol>

<h2>Installation</h2>

```txt
npm install --save luxon
```

<h2>Configuration</h2>

`/eleventy.config.js`

```js
import { DateTime } from "luxon";

export default function(eleventyConfig) {
	// Configure Eleventy
};
```

<h2>Usage - shortcode to get the current year</h2>

`/eleventy.config.js`

```js
export default function(eleventyConfig) {
	
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
};
```
`/views/_layouts/base.njk`

```html
<footer>
    &copy; {% year %} jcusnxj.net
</footer>
```

<h2>Usage - filter to format dates</h2>

`/eleventy.config.js`

```js
export default function(eleventyConfig) {
	
  eleventyConfig.addFilter("postDate", (dateObj, format = "LLL d") => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });
};
```
`/views/example.md`

```html
{{ date | postDate("LLL d, yyyy") }} 
```

```html
{{ date | postDate }}  
```
The supported tokens (e.g. "LLL d, yyyy") can be found in <a href="https://moment.github.io/luxon/?id=/formatting?id=toformat#/formatting?id=table-of-tokens" class="text-link hover:font-bold">official documentation</a>.

