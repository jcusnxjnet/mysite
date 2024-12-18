---
title: Syntax Highlighting

eleventyNavigation:
    key: Syntax Highlighting
    parent: Eleventy
    order: 6
---
<h2 class="font-bold">Sources</h2>
<ol class="pl-14 text-other" style="list-style-type: lower-roman;">
<li><a href="https://www.11ty.dev/docs/plugins/syntaxhighlight/" class="text-link">Official Documentation</a></li>
</ol>

<h2 class="font-bold pt-8">Installation</h2>

```html
npm install @11ty/eleventy-plugin-syntaxhighlight
```

<h2 class="font-bold pt-4">Configuration (ESM)</h2>

`/eleventy.config.js`

```js
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
};
```

<h2 class="font-bold pt-4">CSS stylesheet</h2>

`/views/assets/css/code.css`

```html
<!DOCTYPE html>
<html lang="{{ lang }}">
  <head>
    ...  
    <link href="/assets/css/code.css" rel="stylesheet">
    ...
  </head>
  <body>
   ...
  </body>
</html>
```
Repository with <a href="https://github.com/PrismJS/prism-themes" class="text-link">CSS files</a>.

<h2 class="font-bold pt-4">Template engine override</h2>

```yaml
---
templateEngineOverride: md
---
```

<h2 class="font-bold pt-4">Usage (Markdown)</h2>

Triple backtick ``` indicate the start/end of the code. Language must be specified after first triple backtick.

