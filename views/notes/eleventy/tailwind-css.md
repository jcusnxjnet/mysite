---
title: Tailwind CSS
templateEngineOverride: md
eleventyNavigation:
  key: Tailwind CSS
  parent: Eleventy
  order: 3
---
<h2 class="font-semibold">Sources</h2>
<ol class="pl-14 text-other" style="list-style-type: lower-roman;">
<li><a href="https://tailwindcss.com/docs/installation" class="text-link">Official Documentation</a></li>
</ol>

<h2 class="font-semibold pt-8">Installation (Tailwind CLI tool)</h2>

```html
npm install -D tailwindcss 
```

<h2 class="font-semibold pt-4">Create configuration file - tailwind.config.js</h2>

```html
npx tailwindcss init
```

<h2 class="font-semibold pt-4">Template paths configuration</h2>

`/tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.{html,js,njk,md}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

<h2 class="font-semibold pt-4">Adding the Tailwind directives</h2>

`/assets/css/tailwind.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


<h2 class="font-semibold pt-4">Execute Tailwind CLI build process</h2>

```html
npx tailwindcss -i ./views/assets/css/tailwind.css -o ./dist/assets/css/style.css
```

<h2 class="font-semibold pt-4">Add Tailwind output file in base layout</h2>

`/views/_layouts/base.njk`

```html
<head>
   <link href="/assets/css/style.css" rel="stylesheet"> <!-- replacing the original css file reference-->
</head>
```

<h2 class="font-semibold pt-4">Adjust scripts in package.json</h2>

`/package.json`

```js
"scripts": {
    "start": "eleventy --serve & npx tailwindcss -i ./views/assets/css/tailwind.css -o ./dist/assets/css/style.css --watch",
    "build": "eleventy && npx tailwindcss -i ./views/assets/css/tailwind.css -o ./dist/assets/css/style.css --minify"
  }
```
