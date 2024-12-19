---
title: Language Switcher
templateEngineOverride: md
eleventyNavigation:
  key: Language Switcher
  parent: Eleventy
  order: 12
---
<h2 class="font-bold">Sources</h2>
<ol class="pl-14 text-other" style="list-style-type: lower-roman;">
<li><a href="https://www.webstoemp.com/blog/language-switcher-multilingual-jamstack-sites/" class="text-link">Language switcher for multilingual JAMstack sites</a></li>
</ol>

<h2 class="font-bold pt-8">Global data</h2>

`/views/_data/site.js`

```js
export default {
    languages: [
      {
        label: "EN",
        code: "en",
      },
      {
        label: "CZ",
        code: "cs",
      },
    ]
  };
```

<h2 class="font-bold pt-4">Add translationKey to Front Matter Data</h2>

`/views/en/notes/introduction.md`

```yaml
---
translationKey: "introPage"
---
```

`/views/cs/notes/introduction.md`

```yaml
---
translationKey: "introPage"
---
```

<h2 class="font-bold pt-4">Language switcher</h2>

`/views/_includes/partials/switcher.njk`

```html
{# loop though site.languages #}
{% for lgg in site.languages %}

    {# set translatedUrl to the homepage of that language by default #}
    {% set translatedUrl = "/" + lgg.code + "/" %}

    {# loop through all the content of the site #}
    {% for item in collections.all %}

        {# for each item in the loop, check if
        - its translationKey matches the current item translationKey
        - its lang matches the code of the language we are looping through #}
        {% if item.data.translationKey == translationKey and item.data.lang == lgg.code %}
        {% set translatedUrl = item.url %}
        {% endif %}
        
    {% endfor %}

<a href="{{ translatedUrl }}">{{ lgg.label }}</a>

{% endfor %}
```
<h2 class="font-bold pt-4">Usage</h2>

`/views/_layouts/base.njk`

```html
{% include "partials/switcher.njk" %}
```