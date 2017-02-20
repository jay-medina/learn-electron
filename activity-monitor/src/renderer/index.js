var os = require('os')
var Chart = require('chart.js')
var ctx = document.querySelector('.chart');

const WHITE = '#FFF';
const cpus = os.cpus()

const datasets = cpus.map(function(cpu){
  return {
    data: [
      cpu.times.user,
      cpu.times.sys,
      cpu.times.idle
    ],
    backgroundColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
    ]
  };
});

var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets,
    labels: [
      'User Time (ms)',
      'System Time (ms)',
      'Idle Time (ms)'
    ],
  },
  options: {
    maintainAspectRatio: false,
    title: {
     text: 'CPU Activity',
     display: true,
     fontSize: 16,
     fontColor: WHITE
    },
    legend: {
      display: true,
      labels: {
        fontColor: 'rgb(250, 250, 250)',
        fontSize: 12
      }
    }
  }
});