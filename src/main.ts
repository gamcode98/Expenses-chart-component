import data from './utils/data.json'
import { Chart } from 'chart.js/auto'
;(async function () {
  const DISPLAY = false
  const BORDER = false
  const CHART_AREA = true
  const TICKS = true

  new Chart(document.querySelector<HTMLCanvasElement>('#expenses')!, {
    type: 'bar',
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true,
          xAlign: 'center',
          yAlign: 'bottom',
          displayColors: false,
          backgroundColor: '#382314',
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || ''

              if (label) {
                label += ': '
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(context.parsed.y)
              }
              return label
            },
            labelTextColor: function () {
              return '#fffaf5'
            },
            title: function () {
              return ''
            }
          }
        }
      },
      scales: {
        x: {
          border: {
            display: BORDER
          },
          grid: {
            display: DISPLAY,
            drawOnChartArea: CHART_AREA,
            drawTicks: TICKS
          }
        },
        y: {
          display: false,
          border: {
            display: BORDER
          },
          grid: {
            display: DISPLAY,
            drawOnChartArea: CHART_AREA,
            drawTicks: TICKS
          }
        }
      }
    },
    data: {
      labels: data.map(row => row.day),
      datasets: [
        {
          data: data.map(row => row.amount),
          backgroundColor: data.map(row =>
            row.amount === 52.36 ? '#76b5bc' : '#ec775f'
          ),
          hoverBackgroundColor: data.map(row =>
            row.amount === 52.36 ? '#99cbd1' : '#f59784'
          ),
          borderRadius: 5
        }
      ]
    }
  })
})()
