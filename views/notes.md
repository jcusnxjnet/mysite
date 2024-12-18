---
title: Notes
layout: base
eleventyNavigation:
    key: Notes
    parent: jcusnxj
    order: 3
---
<div class="font-bold pb-1">Eleventy</div>
<ol class="pl-14 text-other" style="list-style-type: lower-roman;">
{% set navPages = collections.all | eleventyNavigation("Eleventy") %}

{%- for entry in navPages %}
  <li><a href="{{ entry.url }}" class="text-link">{{ entry.title }}</a></li>
{%- endfor %}

</ol>