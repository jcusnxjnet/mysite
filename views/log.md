---
layout: base
title: Running Log
---
<div>
  <canvas id="myChart" data-chart='{{ google.monthly | jsonify }}'></canvas>
</div>

{% if google.monthly.length %}
<div class="overflow-x-auto mt-8">
  <table class="min-w-96 w-full text-center text-sm">
    <thead>
      <tr>
        <th>Month</th>
        <th>Distance</th>
        <th>Duration</th>
        <th>Pace</th>
        <th>Avg HR</th>
      </tr>
    </thead>
    <tbody>
      <tr class="text-slate-400 italic">
        <td>mm/yy</td>
        <td>km</td>
        <td>hh:mm:ss</td>
        <td>min/km</td>
        <td>bpm</td>
      </tr>
      {% for item in google.monthly | reverse %}
      <tr class="border-t border-slate-300">
        <td>{{ item.month }}</a></td>
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