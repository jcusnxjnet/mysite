---
title: Initial Setup
templateEngineOverride: md
eleventyNavigation:
  key: Initial Setup
  parent: Eleventy
  order: 1
---
<h2 class="font-bold">Sources</h2>
<ol class="pl-14 text-other" style="list-style-type: lower-roman;">
<li><a href="https://flowbite.com/docs/customize/dark-mode/" class="text-link">11ty Recipes</a></li>
<li><a href="https://www.11ty.dev/docs/" class="text-link">Get Started (11ty Documentation)</a></li>
<li><a href="https://davidea.st/articles/11ty-tips-i-wish-i-knew-from-the-start/" class="text-link">11ty tips
I wish I knew from the start</a></li>
</ol>

<h2 class="font-bold pt-8">Create package.json</h2>

```html
npm init -y
```

<h2 class="font-bold pt-4">Use ESM and not commonJS</h2>

```js
npm pkg set type="module" // Modifies package.json
```

<h2 class="font-bold pt-4">Eleventy installation</h2>

```js
npm install @11ty/eleventy
```

<h2 class="font-bold pt-4">Create index file</h2>

```js
echo '# My Eleventy Project' > index.md
```

<h2 class="font-bold pt-4">Create .gitignore</h2>

`/.gitignore`

```js
dist          // output directory defined in eleventy.config.js
node_modules
.DS_Store
.vscode
.env
```

<h2 class="font-bold pt-4">Create eleventy.config.js</h2>

`/eleventy.config.js`

```js
export default function(eleventyConfig) {
	// Configure Eleventy
};
```

<h2 class="font-bold pt-4">Modify scripts in package.json</h2>

`/package.json`

```json
"scripts": {
     "start": "eleventy --serve",
     "build": "eleventy"
}
```

<h2 class="font-bold pt-4">Change default directories in eleventy.config.js</h2>

`/eleventy.config.js`

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

<h2 class="font-bold pt-4">Define default template engine in eleventy.config.js</h2>

`/eleventy.config.js`

```js
export default function(eleventyConfig) {
	// Configure Eleventy
};

export const config = {
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
};
```

<h2 class="font-bold pt-4">Create directories</h2>

```js
└── views                   // custom override of default folder 
│    ├── _data              // global data folder
│    │     └── site.js      
│    ├── _includes
│    │     └── partials   
│    ├── _layouts           // custom override of default folder 
│    │     └── base.njk     // base layout
│    ├── assets             // custom folder
│    │     ├── css          
│    │     ├── img          
│    │     └── js           
│    ├── note               // custom folder
│    │     └── note.json    // default Front Matter Data 
│    ├── post               // custom folder
│    │     └── post.json    // default Front Matter Data 
│    └── index.md           
├── .eleventy.config.js            
├── .gitignore              
├── package.json            
└── package-lock.json       
```

<h2 class="font-bold pt-4">Define addPassthroughCopy in eleventy.config.js</h2>

`/eleventy.config.js`

```js
export default function(eleventyConfig) {

    // method creates a file/folder copy in the output directory
	eleventyConfig.addPassthroughCopy("views/assets/css");
    eleventyConfig.addPassthroughCopy("views/assets/img");
    eleventyConfig.addPassthroughCopy("views/assets/js");
};
```
<h2 class="font-bold pt-4">Create basic layout base.njk</h2>

`/views/_layouts/base.njk`

```html
<!DOCTYPE html>
<html lang="en">
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
<h2 class="font-bold pt-4">Define default Front Matter Data, i.e. create folder specific json files</h2>

`/views/notes/notes.json`

```json
{
    "layout": "base" 
  }
```
<h2 class="font-bold pt-4">Create and reference CSS stylesheet</h2>

```html
<head>
   <link href="/assets/css/style.css" rel="stylesheet"> 
</head>
```
<h2 class="font-bold pt-4">Define permalink for index file (if moved to a subfolder)</h2>

```yaml
---
permalink: "/index.html"
---
```

