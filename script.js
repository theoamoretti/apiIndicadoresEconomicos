google.charts.load('current', {'packages':['corechart']});

      class Valor{constructor(data){this.data=data}}
      class Datas{constructor(date){this.data=date}}

      fetch('https://www.econdb.com/api/series/URATEUS/?format=json')
      .then(res=>res.json())
      .then((res)=>{
        google.charts.setOnLoadCallback(drawChart);

        let dadosGraficos = new Array();
      
        for (let i = 0; i < res.data.dates.length; i++) {
        dadosGraficos.push([res.data.dates[i], res.data.values[i]]);
        }

        function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Valor', 'Dados em %'],
          ...dadosGraficos
        ]);

        var options = {
          title: 'Gráfico Desemprego EUA',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
    }) 