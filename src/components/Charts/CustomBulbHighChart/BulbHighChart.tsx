import { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsPictorial from 'highcharts/modules/pictorial';
import HighchartsAccessibility from 'highcharts/modules/accessibility';

const bulbHighData = [
  {
    name: 'Solar',
    data: [25],
    color: '#77EDD8',
  },
  {
    name: 'Battery',
    data: [20],
    color: '#4662EA',
  },
  {
    name: 'Electricity',
    data: [30],
    color: '#389E8B',
  },
  {
    name: 'Others',
    data: [25],
    color: '#D78A26',
  },
];

export const BulbHighChart = () => {
  useEffect(() => {
    HighchartsPictorial(Highcharts);
    HighchartsAccessibility(Highcharts);

    Highcharts.chart('bulbContainer', {
      chart: {
        type: 'pictorial',
        margin: [40, 0, 10, 0],
      },
      colors: bulbHighData.map((bulb) => bulb.color),
      title: {
        text: 'Street Light Powered',
        align: 'left',
        style: {
          color: '#475467',
          fontSize: '14px',
          fontWeight: 'bold',
        },
      },
      xAxis: {
        visible: false,
        // min: 0.2,
      },
      yAxis: {
        visible: false,
      },
      legend: {
        // enabled: false,
        align: 'right',
        floating: true,
        itemMarginTop: 5,
        itemMarginBottom: 5,
        layout: 'vertical',
        margin: 0,
        padding: 0,
        verticalAlign: 'middle',
      },
      tooltip: {
        // enabled: false,
        headerFormat: '',
        valueSuffix: '%',
      },
      credits: {
        enabled: false, // Disable Highcharts.com tag
      },
      plotOptions: {
        series: {
          pointPadding: 0,
          groupPadding: 0,
          borderWidth: 1,
          borderColor: '#1D2939',
          dataLabels: {
            enabled: true,
            align: 'center',
            format: `{y}%`,
          },
          stacking: 'percent',
          paths: [
            {
              definition:
                'M206.452 216.735C231.945 194.011 248 160.915 248 124.067 248 55.547 192.483 0 124 0S0 55.547 0 124.067c0 36.664 15.895 69.613 41.166 92.325 8.496 17.804 14.781 35.067 15.346 54.453.246 8.451 6.678 15.92 15.134 15.92h105.832c8.58 0 15.082-7.689 15.312-16.266.474-17.711 5.863-35.274 13.662-53.764z',
            },
          ],
        },
      },
      series: bulbHighData,
    });
  }, []);

  return <div id="bulbContainer" />;
};
