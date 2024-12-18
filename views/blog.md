---
title: Blog
layout: base
eleventyNavigation:
    key: Blog
    parent: jcusnxj
    order: 3
---
{% for year, yearPosts in collections.postsByYear %}

<div class="font-bold">{{ year }}</div>
  
{% for post in yearPosts %}

<div class="flex pt-1">
<div class="w-20 text-other">{{ post.data.date | postDate }}</div>
<div class="text-link hover:font-bold"><a href="{{ post.url }}">{{ post.data.title }}</a></div>
</div>

{% endfor %}
  
{% endfor %}