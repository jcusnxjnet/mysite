---
title: Initial setup
templateEngineOverride: md
---
<h2 class="font-semibold text-lg">Create package.json</h2>

```html
npm init -y
```

<h2 class="font-semibold text-lg pt-4">Use ESM and not commonJS</h2>

```js
npm pkg set type="module" // Modifies package.json
```

<h2 class="font-semibold text-lg pt-4">Eleventy installation</h2>

```js
npm install @11ty/eleventy
```

<h2 class="font-semibold text-lg pt-4">Create index file</h2>

```js
echo '# My Eleventy Project' > index.md
```

<h2 class="font-semibold text-lg pt-4">Create .gitignore</h2>

```js
dist          // output directory defined in eleventy.config.js
node_modules
.DS_Store
```

<h2 class="font-semibold text-lg pt-4">Create eleventy.config.js</h2>

```js
export default function(eleventyConfig) {
	// Configure Eleventy
};
```

<h2 class="font-semibold text-lg pt-4">Modify scripts in package.json</h2>

```json
"scripts": {
     "start": "eleventy --serve",
     "build": "eleventy"
}
```

<h2 class="font-semibold text-lg pt-4">Define default directories in eleventy.config.js</h2>

```js
export default function(eleventyConfig) {
	// Configure Eleventy
};

export const config = {
    dir: {
      input: "views",  
      layouts: "_layouts",
      output: "dist"
    }
  };
```

<h2 class="font-semibold text-lg pt-4">Define default template engine in eleventy.config.js</h2>

```js
export default function(eleventyConfig) {
	// Configure Eleventy
};

export const config = {
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
};
```

<h2 class="font-semibold text-lg pt-4">Create directories</h2>

```js
└── views                   // default override (defined in configuration)
│    ├── _data              // default
│    ├── _includes          // default
│    │      └── partials    // custom folder       
│    ├── _layouts           // default override (defined in configuration)
│    ├── assets             // custom folder 
│    │     ├── css          // custom folder 
│    │     ├── img          // custom folder 
│    │     └── js           // custom folder 
│    ├── page               // custom folder 
│    │     └── page.json    // default Front Matter Data 
│    ├── note               // custom folder 
│    │     └── note.json    // default Front Matter Data 
│    ├── post               // custom folder 
│    │     └── post.json    // default Front Matter Data 
│    └── index.md           // landing page
├── .eleventy.js            // stays in root
├── .gitignore              // stays in root
├── package.json            // stays in root
└── package-lock.json       // stays in root
```

<h2 class="font-semibold text-lg pt-4">addPassthroughCopy in eleventy.config.js</h2>

```js
export default function(eleventyConfig) {

    // method creates a file/folder copy in the output directory
	eleventyConfig.addPassthroughCopy("views/assets/css");
    eleventyConfig.addPassthroughCopy("views/assets/img");
    eleventyConfig.addPassthroughCopy("views/assets/js");
};
```
<h2 class="font-semibold text-lg pt-4">Create basic layout base.njk</h2>

```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ title }}</title> 
  </head>
  <body>
    <main>
      {{ content | safe }}    
    </main>
  </body>
</html>
```
<h2 class="font-semibold text-lg pt-4">Define default Front Matter Data, i.e. create folder specific json files</h2>

```json
{
    "layout": "base" 
  }
```
<h2 class="font-semibold text-lg pt-4">Create and reference CSS stylesheet</h2>

```html
<head>
   <link href="/assets/css/style.css" rel="stylesheet"> 
</head>
```
<h2 class="font-semibold text-lg pt-4">Define permalink for index file (only if moved to a subfolder)</h2>

```yaml
---
permalink: "/index.html"
---
```