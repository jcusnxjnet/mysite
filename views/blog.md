---
title: Blog
layout: base
---
{% for year, yearPosts in collections.postsByYear %}

<div class="font-semibold">{{ year }}</div>
  
{% for post in yearPosts %}

<div class="flex pt-1">
<div class="w-20 text-slate-500">{{ post.data.date | postDate }}</div>
<div class="text-sky-600 hover:font-semibold"><a href="{{ post.url }}">{{ post.data.title }}</a></div>
</div>

{% endfor %}
  
{% endfor %}