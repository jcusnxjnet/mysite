---
title: Navigation Plugin
templateEngineOverride: md
eleventyNavigation:
    key: Navigation Plugin
    parent: Eleventy
    order: 2
---
<h2 class="font-bold">Sources</h2>
<ol class="pl-14 text-other" style="list-style-type: lower-roman;">
<li><a href="https://www.11ty.dev/docs/plugins/navigation/" class="text-link">Official Documentation</a></li>
</ol>

<h2 class="font-bold pt-8">Installation</h2>

```js
npm install @11ty/eleventy-navigation
```

<h2 class="font-bold pt-4">Configuration (ESM)</h2>

`/eleventy.config.js`

```js
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
};
```

<h2 class="font-bold pt-4">Front Matter Data</h2>

```yaml
---
eleventyNavigation:
  key: Mars                 # unique key of navigation object
  parent: Solar system      # parent navigation object
  order: 2                  # defines the order in which objects are returned
  excerpt: Solar system bodies.       # description of navigation object
  title: Solar System Bodies          # title displayed (otherwise key is used)
  url: https://www.google.com/        # used to link to external URL
permalink: false           # to prevent a file creation in Eleventy output site
---
```

<h2 class="font-bold pt-4">Usage - navigation (Nunjucks)</h2>

```js
// returns all pages across all collections
{% set navPages = collections.all | eleventyNavigation %}

// returns pages for single branch (Mars) in specific collection (Planets)
{% set navPages = collections.planets | eleventyNavigation("Mars") %}
```
 
<h2 class="font-bold pt-4">Usage - breadcrumb trail (Nunjucks)</h2>

```js
// returns breadcrumb trail for specific navigation key (Mars)
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Mars") %}

// returns breadcrumb trail for specific navigation key ("Mars") and include the key as well
{% set navPages = collections.all | eleventyNavigationBreadcrumb("Mars", { includeSelf: true }) %}

// returns breadcrumb trail for current page
{% set navPages = collections.all | eleventyNavigationBreadcrumb(eleventyNavigation.key) %}
```