---
layout: base
title: Blog
---
{% for item in collections.post %}
<h1><a href="{{ item.url }}">{{ item.data.title }}</a></h1>
<p class="text-sm">{{ item.data.date | postDate }}</p>
<div class="py-4">{{ item.data.page.excerpt }}</div>
{% endfor %}
