---
title: log
layout: base
---
<div>
  <canvas 
  id="myChart" 
  data-chart='{{ google.monthly | jsonify }}'
  data-locale='{{ site.locale }}'>
  </canvas>
</div>
{% if google.monthly.length %}
<div class="overflow-x-auto pt-8">
  <table class="min-w-[30rem] w-full border-collapse text-sm">
    <thead>
      <tr class="text-other">
        <th>Month</th>
        <th>Distance</th>
        <th>Duration</th>
        <th>Pace</th>
        <th>Avg HR</th>
      </tr>
    </thead>
    <tbody>
      <tr class="text-slate-400 text-center">
        <td>mm/yy</td>
        <td>km</td>
        <td>hh:mm:ss</td>
        <td>min/km</td>
        <td>bpm</td>
      </tr>
      {% for item in google.monthly | sort(attribute='date') | reverse %}
      <tr class="text-center border-t  border-line">
        <td><a href="/log/{{ item.id }}/" class="text-link">{{
            item.month | date({ year: "numeric", month: "short" }) }}</a></td>
        <td>{{ item.distance }}</td>
        <td>{{ item.duration }}</td>
        <td>{{ item.pace }}</td>
        <td>{{ item.avghr }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
{% else %}
<p>No workouts found.</p>
{% endif %}