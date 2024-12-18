---
title: Tailwind CSS - Dark Mode Switcher
templateEngineOverride: md
eleventyNavigation:
  key: Tailwind CSS - Dark Mode Switcher
  parent: Eleventy
  order: 4
---
<h2 class="font-bold">Sources</h2>
<ol class="pl-14 text-other" style="list-style-type: lower-roman;">
<li><a href="https://tailwindcss.com/docs/dark-mode" class="text-link">Official Documentation</a></li>
<li><a href="https://flowbite.com/docs/customize/dark-mode/" class="text-link">Tailwind CSS Dark Mode - Flowbite</a></li>
</ol>

<h2 class="font-bold pt-8">Modify Tailwind CSS configuration file</h2>

`/tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.{html,js,njk,md}"],
  darkMode: 'selector', /** dark mode toggled manually */
  theme: {
    extend: {},
  },
  plugins: [],
}
```

<h2 class="font-bold pt-4">Add dark class in html element</h2>

`/views/_layouts/base.njk`

```html
<!DOCTYPE html>
<html lang="en" class="dark"> <!-- sets dark mode as a default preference -->
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

<h2 class="font-bold pt-4">Check user preference on page load</h2>

`/views/_layouts/base.njk`

```html
<!DOCTYPE html>
<html lang="en" class="dark"> 
  <head>
    <script>
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
    </script>
  </head>
  <body>
    ...
  </body>
</html>
```

<h2 class="font-bold pt-4">Add button to change color preference manually</h2>

`/views/_layouts/base.njk`

```html
<!DOCTYPE html>
<html lang="en" class="dark"> 
  <head>
    ...
  </head>
  <body>
    <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
      <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
      <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    </button>
  </body>
</html>
```

<h2 class="font-bold pt-4">Handle click events on the button</h2>

`views/assets/js/darkmode.js`

```js
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});
```

<h2 class="font-bold pt-4">Add script reference in base layout</h2>

`/views/_layouts/base.njk`

```html
!DOCTYPE html>
<html lang="en" class="dark"> 
  <head>
    ...
  </head>
  <body>
    <script src="/assets/js/darkmode.js"></script>
  </body>
</html>
```
