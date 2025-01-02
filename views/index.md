---
layout: base
---
{% for item in collections.post %}
<h1 class="text-blue-600"><a href="{{ item.url }}">{{ item.data.title }}</a></h1>
<p class="text-sm">{{ item.data.date | postDate }}</p>
<p class="my-4">{{ item.data.page.excerpt}}</p>
{% endfor %}

