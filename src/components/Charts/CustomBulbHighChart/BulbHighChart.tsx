import Highcharts from 'highcharts';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsPictorial from 'highcharts/modules/pictorial';
import { useEffect } from 'react';
import { BulbHighChartProps } from './CustomBulbHighChart';

// Initialize Highcharts modules
if (typeof Highcharts === 'object') {
  HighchartsPictorial(Highcharts);
  HighchartsAccessibility(Highcharts);
}

export const BulbHighChart = ({ title, data }: BulbHighChartProps) => {
  useEffect(() => {
    const container = document.getElementById('bulbContainer');
    if (container) {
      // @ts-expect-error Type error for Highchart first argument issue couldnot be resolved
      new Highcharts.Chart(container as HTMLElement, {
        chart: {
          type: 'pictorial',
          margin: [50, 0, 10, 0],
          backgroundColor: 'transparent',
        },
        colors: data.map((bulb) => bulb.color),
        title: {
          text: title,
          align: 'left',
          style: {
            color: '#475467',
            fontSize: '14px',
            fontWeight: 'bold',
          },
        },
        xAxis: {
          visible: false,
        },
        yAxis: {
          visible: false,
        },
        legend: {
          align: 'right',
          floating: true,
          itemMarginTop: 5,
          itemMarginBottom: 5,
          layout: 'vertical',
          margin: 0,
          padding: 0,
          verticalAlign: 'middle',
          itemStyle: {
            fontWeight: '600',
            color: '#344054',
          },
        },
        tooltip: {
          headerFormat: '',
          valueSuffix: '%',
          backgroundColor: '#F9FAFB',
          style: {
            color: '#344054',
            fontSize: '10px',
          },
        },
        credits: {
          enabled: false,
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
        series: data,
      });
    }
  }, []);

  return <div id="bulbContainer" style={{ height: '320px', width: '100%' }} />;
};
