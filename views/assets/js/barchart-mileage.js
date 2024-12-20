document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('myChart');
    
    // Get and parse the JSON data from the canvas attribute
    const chartData = JSON.parse(canvas.getAttribute('data-chart'));
    const locale = canvas.getAttribute('data-locale');
    
    // Extract labels (months) and values (distances)
    const labels = chartData.map(item => {
      const date = new Date(item.month); // Parse the date
      return new Intl.DateTimeFormat(locale, { month: '2-digit', year: '2-digit' }).format(date);
    });
    const values = chartData.map(item => parseFloat(item.distance)); // Convert 'distance' to numbers

    // Convert a rem unit to pixels (assuming 1rem = 16px)
    const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize); // 1rem in px
    const fontSizeInRem = 1; // Example: 1.5rem
    const fontSizeInPx = fontSizeInRem * remToPx; // Convert rem to pixels
    
    // Function to get dynamic grid color based on the current theme
    function getGridColor() {
    const isDarkMode = document.documentElement.classList.contains('dark');
    return isDarkMode ? '#334155' : '#cbd5e1'; // dark : light mode
  }

    // Get initial grid color
    let gridColor = getGridColor();

    const ctx = canvas.getContext('2d');
    let chart = new Chart(ctx, {
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
            display: false // Disable legend
          },
          title: {
            display: true,
            text: 'Monthly distance',
            color: '#64748b',
            font: {
              size: fontSizeInPx, // Dynamically set font size in pixels
            }
          },
          tooltip: {
            enabled: false // Disable tooltip
          }

        },
        scales: {
          x: {
            grid: {
              color: gridColor, // Initial grid color
            }
          },
          y: {
            grid: {
              color: gridColor, // Initial grid color
            },
            beginAtZero: true,
            title: {
              display: true, // Display the Y-axis label
              text: 'km', // Label text
              font: {
                size: 13, // Optional: set font size for the Y-axis label
                style: 'italic'
              }
            }
          }
        }
      }
    });

    // Update chart on theme toggle
  const themeToggleBtn = document.getElementById('theme-toggle');

  themeToggleBtn.addEventListener('click', () => {
    // Recalculate grid color
    const newGridColor = getGridColor();
    console.log("New Grid Color:", newGridColor); // Debugging log

    // Explicitly update the chart options
    chart.options.scales.x.grid.color = newGridColor;
    chart.options.scales.y.grid.color = newGridColor;

    // Force Chart.js to re-render
    chart.update();
  });

  });




  