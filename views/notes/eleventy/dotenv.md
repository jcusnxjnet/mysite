---
title: dotenv package
templateEngineOverride: md
eleventyNavigation:
  key: dotenv package
  parent: Eleventy
  order: 8
---
<h2>Sources</h2>
<ol class="pl-14 text-other" style="list-style-type: lower-roman;">
<li><a href="https://github.com/motdotla/dotenv" class="text-link">GitHub Repository</a></li>
</ol>

<h2>Installation</h2>

```html
npm install dotenv --save
```

<h2>Configuration</h2>

`/eleventy.config.js`

```js
import 'dotenv/config'

export default function(eleventyConfig) {

  // you can remove once you validate the variable is part of process.env
  console.log('Google Sheets API Key:', process.env.GOOGLE_SHEETS_API_KEY); 

  return {
    // your eleventy configuration
  };
};
```

<h2>Create .env file</h2>

`/.env`

```txt
GOOGLE_SHEETS_API_KEY=your-actual-google-sheets-API-key 
```

<h2>!!! ADD .env file to .gitignore !!!</h2>

`/.gitignore`

```txt
dist        
node_modules
.DS_Store
.vscode
.env
```

<h2pb-2"> Set up environment variables in Netlify</h2>

Go to Site settings > Environment variables > Add variable


