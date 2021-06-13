import Chart from 'chart.js/auto';
import dateFormat from 'dateformat';
import React, { useEffect } from 'react';
import "./ChartCustomized.css"


/**
     * @param data - array of objects {x, y, tooltip}
     * @param aspectRatio - for width/height chart
     * @param color - color for line
     */
const ChartCustomized = (params: any) => {
  const labels: any = [];
  let date = new Date(2021, 5, 1);
  console.log(date);
  useEffect(() => {

    dateFormat.i18n.monthNames =  [
        "Янв",
        "Фев",
        "Мар",
        "Апр",
        "Май",
        "Июн",
        "Июл",
        "Авг",
        "Сен",
        "Окт",
        "Ноя",
        "Дек"
      ]
    for (let i = 1; i < 50; i++) {
      labels.push({
        x: dateFormat( new Date().setDate(date.getDate() + i), 'dd-mm'),
        tooltip: dateFormat( new Date().setDate(date.getDate() + i), 'mmm dd'),
        y: Math.round(Math.random() * 1500)
      })
    }

    console.log(labels);
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            data: labels,
            borderColor: 'rgba(0, 191, 165, 1)',
            borderWidth: 2

          },
        ]
      },
      options: {

        scales: {
          y: {
            suggestedMax: 2000,
            beginAtZero: true,
            grid: {
              // borderWidth: 5,
              // color: 'red'
              color: 'rgba(238, 238, 238, 1)'

            },
            ticks: {
              autoSkip: true,
              autoSkipPadding: 14,
              font: {
                family: 'Gilroy',
                size: 14
              },
              callback: function (value: number) {
                return new Intl.NumberFormat('ru-RU').format(value);
              }
            }
          },
          x: {
            grid: {
              circular: true,
              offset: true,
              borderDash: [4, 4]
            },
            ticks: {
              major: { enabled: true },
              font: {
                family: 'Gilroy',
                size: 14
              },
              autoSkip: true,
              autoSkipPadding: 71,
              padding: 15,
              textStrokeWidth: 10,
              backdropPadding: 10,
              maxRotation: 0,
              minRotation: 0,
              // callback: function (value, index, values) {
              //   console.log(value);
              //   return dateFormat(value, "dd-mm");

              // }
              //color: 'red' 
            }
          }
        },
        layout: {
          padding: {
            top: 50,
            left: 20,
            right: 20,
            bottom: 20
          }
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            displayColors: false,
            enabled: true,
            mode: 'point',
            intersect: true,
            position: 'average',
            backgroundColor: '#33415C',
            titleColor: '#8181A5',
            titleAlign: 'center',
            titleFont: {
              family: 'Gilroy'
            },
            bodyColor: '#FFFFFF',
            bodyAlign: 'center',
            padding: 10,
            caretPadding: 34,
            caretSize: 9,
            cornerRadius: 4,
            // xAlign: 0,
            yAlign: 'bottom',
            callbacks: {
              label: function (context: any) {
                // console.log(context);
                // console.log(context.parsed.y);
                return new Intl.NumberFormat('ru-RU').format(context.parsed.y);
              },
              title:  function(context: any) {
                console.log(context);
                return context[0].raw.tooltip;
              
              }
            }
          },
          usePointStyle: false
        },
        elements: {
          point: {
            radius: 0,
            // pointStyle: 'rect',
            borderWidth: 0,
            backgroundColor: '#FFFFFF',
            borderColor: 'red',
            hoverRadius: 10,
            hoverBorderWidth: 8
          }
        },
        responsive: true,
        aspectRatio: 4

      }
    });
  }, []);

  return (
    <div className="wrapper-canvas">
    <canvas id="myChart" / >
    </div>);

}

export default ChartCustomized;