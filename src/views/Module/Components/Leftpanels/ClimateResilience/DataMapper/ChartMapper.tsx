import { CustomLineChart } from '#components/Charts/CustomLineChart';
import {
  rainLineColors,
  rainLineKeys,
  rainLineLegends,
  rainfallLineData,
  temperatureLineColors,
  temperatureLineData,
  temperatureLineKeys,
  temperatureLineLegends,
} from './mapper';

export type ClimateResilienceChartKeys = 'Rainfall' | 'Temperature';

export const charts: Record<ChartKeys, JSX.Element> = {
  Rainfall: (
    <CustomLineChart
      title="Rainfall"
      data={rainfallLineData}
      dataKeys={rainLineKeys}
      dataColors={rainLineColors}
      legendLabels={rainLineLegends}
    />
  ),
  Temperature: (
    <CustomLineChart
      title="Temperature"
      data={temperatureLineData}
      dataKeys={temperatureLineKeys}
      dataColors={temperatureLineColors}
      legendLabels={temperatureLineLegends}
    />
  ),
};

export const dropDownKeys = Object.keys(charts) as ClimateResilienceChartKeys[];
export const chartComponents = Object.values(charts);
