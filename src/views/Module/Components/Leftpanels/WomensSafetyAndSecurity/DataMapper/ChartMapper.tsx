import { CustomScaleChart } from '#components/Charts/CustomScaleChart';
import { dataColors, scaleData } from './mapper';

export type WomensSafetyAndSecurityChartKeys =
  | 'Safety Perception'
  | 'Infrastructural Problems'
  | 'Questionaire with Gauge'
  | 'Street Light Location'
  | 'Street Light Powered'
  | 'Status of Street Light'
  | 'Availability of Pathway for Pedesterian';

export const charts: Record<WomensSafetyAndSecurityChartKeys, JSX.Element> = {
  'Safety Perception': (
    <CustomScaleChart
      title="Safety Perception"
      data={scaleData}
      dataColors={dataColors}
    />
  ),
  'Population Distribution by Ward': (
    <CustomBarChart
      title="Population Distribution by Ward"
      data={wardsPopBarData}
      dataKeys={wardBarKeys}
      dataColors={wardBarColors}
      legendLabels={wardLegends}
    />
  ),
  'Population Distribution by literacy rate': (
    <CustomTreemapChart
      title="Population Distribution by literacy rate"
      data={treeMapData}
    />
  ),
  'Population Distribution by Ethnicity': (
    <CustomBarNoAxisChart
      title="Population Distribution by Ethnicity"
      data={noAxisBarData}
    />
  ),
  'Population Distribution by Disability': (
    <CustomBarChart
      title="Population Distribution by Disability"
      data={disabilityPopBarData}
      dataKeys={disabilityBarKeys}
      dataColors={disabilityBarColors}
      legendLabels={disabilityLegends}
    />
  ),
  'Family Head Household Distribution by Age': (
    <CustomDualBarChart
      title="Family Head Household Distribution by Age"
      data={dualBarData}
    />
  ),
};

export const dropDownKeys = Object.keys(charts) as DemoGraphicChartKeys[];
export const chartComponents = Object.values(charts);
