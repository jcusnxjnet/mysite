---
title: Eleventy i18n
templateEngineOverride: md
eleventyNavigation:
  key: Eleventy i18n
  parent: Eleventy
  order: 11
---
<h2>Sources</h2>
<ol class="pl-14 text-other" style="list-style-type: lower-roman;">
<li><a href="https://www.11ty.dev/docs/plugins/i18n/" class="text-link">Official Documentation</a></li>
<li><a href="https://www.webstoemp.com/blog/multilingual-sites-eleventy/" class="text-link">Multilingual sites with Eleventy</a></li>
<li><a href="https://www.lenesaile.com/en/blog/internationalization-with-eleventy-20-and-netlify/" class="text-link">Internationalization with Eleventy 2.0 and Netlify</a></li>
</ol>

<h2>Instalation</h2>

Plugin is bundled with Eleventy and does not require separate installation. 

 
<h2>Configuration (ESM)</h2>

`/eleventy.config.js`

```js
import { EleventyI18nPlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
      // any valid BCP 47-compatible language tag is supported
      defaultLanguage: "cs",
    });
}
```

<h2>Folder structure</h2>

```html
└── views                        
     ├── _data                
     ├── _includes             
     │    └── partials           
     ├── _layouts              
     ├── assets                
     │    ├── css             
     │    ├── img             
     │    └── js              
     ├── en                 // folder with EN content (mandatory + code according to IETF BCP 47)
     │    ├── notes          // custom folder for EN content
     │    ├── posts          // custom folder for EN content
     │    ├── index.md      // index file for EN content
     │    └── en.json       // default Front Matter Data for EN markdown files
     └── cs                 // folder with CS content (mandatory + code according to IETF BCP 47)
         ├── notes          // custom folder for CS content
         ├── posts          // custom folder for CS content 
         ├── index.md      // index file for CS content
         └── cs.json       // default Front Matter Data for CS markdown files
```

<h2>Front Matter Data</h2>

`/views/en/en.json`

```json
{
  "lang": "en"
  }
```

`/views/cs/cs.json`

```json
 {
  "lang": "cs"
  }
```

<h2>Base layout</h2>

`/views/_layouts/base.njk`

```html
<!DOCTYPE html>
<html lang="{{ lang }}">
  <head>
    ...
```

<h2>Netlify redirection</h2>

`/netlify.toml`

```html
# Redirect for end-user’s browser preference override
[[redirects]]
  from = "/*"
  to = "/en/:splat"
  status = 302
  conditions = {Language = ["en"]}

# Default
[[redirects]]
  from = "/*"
  to = "/cs/:splat"
  status = 302
```

<h2>Localized collections (example)</h2>

`/eleventy.config.js`

```js

export default function(eleventyConfig) {
	
  // collection of posts in english
  eleventyConfig.addCollection("posts_en", function (collection) {
    return collection.getFilteredByGlob("views/en/posts/*.md");
  });

  // collection of posts in czech
  eleventyConfig.addCollection("posts_cs", function (collection) {
    return collection.getFilteredByGlob("views/cs/posts/*.md");
  });

};
```

<h2>Usage of localized collections</h2>

<div class="pt-4">List of posts</div>

```html
{% for item in collections["posts_" + lang ] | reverse %}
<a href="{{ item.url }}">{{ item.data.title }}</a>
{% endfor %}
```

<div class="pt-4">List of posts - Eleventy Navigation</div>

```html
{% set navPages = collections["posts_" + lang] | eleventyNavigation("Notes") %}
<ul>
{%- for entry in navPages %}
  <li>
    <a href="{{ entry.url }}">{{ entry.title }}</a>
  </li>
{%- endfor %}
</ul>
```

<h2>Dictionary (ESM)</h2>

`/views/_data/languages.js`

```js
export default {
  en: {
    nextPostText: 'Next',
    previousPostText: 'Previous'
  },
  
  cs: {
    nextPostText: 'Následující',
    previousPostText: 'Předchozí'
  }
};
```

<h2>Accessing dictionary</h2>


<div class="pt-4">Using "lang" variable</div>

```html
{{ languages[lang].nextPostText }}
```
<div class="pt-4">Using language directly</div>

```html
{{ languages.en.nextPostText }}
```
