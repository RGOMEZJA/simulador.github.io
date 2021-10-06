let myChart;
let data = [];
let lanza = 0;

function ejecutar(){
  let cantidad = $("#cantidad").val();
  lanza = cantidad;
  let frec1 = 0;
  let frec2 = 0;
  let frec3 = 0;
  let frec4 = 0;
  let frec5 = 0;
  let frec6 = 0;

  for (let i = 0; i < cantidad; i++) {

    let random = Math.floor(Math.random() * 6) + 1;

    switch (random) {
      case 1:
        frec1+= 1;
        break;
      case 2:
        frec2+= 1;
        break;
      case 3:
        frec3+= 1;
        break;
      case 4:
        frec4+= 1;
        break;
      case 5:
        frec5+= 1;
        break;
      case 6:
        frec6+= 1;
        break;
    }

  }

  //frecuencia
  $("#frec1").html(frec1);
  $("#frec2").html(frec2);
  $("#frec3").html(frec3);
  $("#frec4").html(frec4);
  $("#frec5").html(frec5);
  $("#frec6").html(frec6);

  //data
  data = [];
  data.push(frec1);
  data.push(frec2);
  data.push(frec3);
  data.push(frec4);
  data.push(frec5);
  data.push(frec6);

  renderChart();

}


function renderChart(){
  
  var ctx = document.getElementById('canvas');
  if (myChart) {
    myChart.destroy();
  }
  myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS'],
          datasets: [{
              data: data,
              backgroundColor: [
                  'rgba(160,120,30,40)',
                  'rgba(160,110,30,40)',
                  'rgba(160,90,30,40)',
                  'rgba(160,80,30,40)',
                  'rgba(160,70,30,40)',
                  'rgba(160,60,30,40)'              ],
              borderColor: [
                  'rgba(170)',
                  'rgba(180)',
                  'rgba(190)',
                  'rgba(150)',
                  'rgba(140)',
                  'rgba(120)'
              ],
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
}

window.onload = function(){
  var ctx = document.getElementById('canvas');
  myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS'],
      }
  });

};
