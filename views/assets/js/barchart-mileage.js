document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('myChart');
    
    // Get and parse the JSON data from the canvas attribute
    const chartData = JSON.parse(canvas.getAttribute('data-chart'));
    
    // Extract labels (months) and values (distances)
    const labels = chartData.map(item => item.month);
    const values = chartData.map(item => parseFloat(item.distance)); // Convert 'distance' to numbers

    // Convert a rem unit to pixels (assuming 1rem = 16px)
    const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize); // 1rem in px
    const fontSizeInRem = 1; // Example: 1.5rem
    const fontSizeInPx = fontSizeInRem * remToPx; // Convert rem to pixels

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'km',
          data: values,
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false, // Disable legend
            labels: {
              font: {
                family: 'Bitter, sans-serif' // Font family for legend labels
              }
            }
          },
          title: {
            display: true,
            text: 'Monthly distance',
            font: {
              size: fontSizeInPx, // Dynamically set font size in pixels
              family: 'Bitter, sans-serif'
            }
          },
          tooltip: {
            enabled: false // Disable tooltip
          }

        },
        scales: {
          x: {
            grid: {
              display: false // Remove vertical gridlines
            },
            ticks: {
              font: {
                family: 'Bitter, sans-serif' // Font family for x-axis labels
              }
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true, // Display the Y-axis label
              text: 'km', // Label text
              font: {
                size: 13, // Optional: set font size for the Y-axis label
                style: 'italic',
                family: 'Bitter, sans-serif'
              }
            },
            ticks: {
              font: {
                family: 'Bitter, sans-serif' // Font family for x-axis labels
              }
            }
          }
        }
      }
    });
  });
  