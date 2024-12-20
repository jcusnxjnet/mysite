---
title: Chart.js
templateEngineOverride: md
eleventyNavigation:
  key: Chart.js
  parent: Eleventy
  order: 7
---
<h2>Sources</h2>
<ol class="pl-14 text-other" style="list-style-type: lower-roman;">
<li><a href="https://www.chartjs.org/docs/latest/getting-started/" class="text-link">Official Documentation</a></li>
</ol>

<h2>Installation (CDN)</h2>

`/views/_layouts/base.njk`

```html
<head>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
```

<h2>js file with chart (example of bar chart)</h2>

`/views/assets/js/barchart.js`

```js
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
```

<h2>Add script to base layout</h2>

`/views/_layouts/base.njk`

```html
<body>
<script src="/assets/js/barchart.js"></script>
</body>
```

<h2>Usage</h2>

```html
<div>
  <canvas id="myChart"></canvas>
</div>
```