import { CustomBarChart } from '#components/Charts/CustomBarChart';
import { CustomBarWithIcon } from '#components/Charts/CustomBarWithIcon';
import { CustomBulbHighChart } from '#components/Charts/CustomBulbHighChart';
import { CustomPieChart } from '#components/Charts/CustomPieChart';
import { CustomScaleChart } from '#components/Charts/CustomScaleChart';
import { CustomGaugeContainer } from '../Components/CustomGaugeContainer';
import { StreetLightLocation } from '../Components/StreetLightLocation';
import {
  antiSocialBarData,
  barColors,
  barKeys,
  barLegends,
  bulbHighData,
  camerasBarData,
  dataColors,
  gaugeData,
  harrasmentBarData,
  iconBarData,
  legendLabels,
  pathwayBarData,
  pieData,
  scaleData,
  securityPersonnelBarData,
  streetLightData,
} from './mapper';

export type WomensSafetyAndSecurityChartKeys =
  | 'Safety Perception'
  | 'Infrastructural Problems'
  | 'Questionaire with Gauge'
  | 'Street Light Location'
  | 'Street Light Powered'
  | 'Status of Street Light'
  | 'Availability of Pathway for Pedesterian'
  | 'Presence of CCTV Cameras'
  | 'Presence of Security Personnel'
  | 'Anti-Social Behavior'
  | 'Incident of Harrasment';

type YesNoBarType =
  | {
      name: string;
      yesCount: number;
      noCount?: undefined;
    }
  | {
      name: string;
      noCount: number;
      yesCount?: undefined;
    };

const barHeight = 240;

export const charts: Record<WomensSafetyAndSecurityChartKeys, JSX.Element> = {
  'Safety Perception': (
    <CustomScaleChart
      title="Safety Perception"
      data={scaleData}
      dataColors={dataColors}
      legendLabels={legendLabels}
    />
  ),
  'Infrastructural Problems': <CustomBarWithIcon data={iconBarData} />,
  'Questionaire with Gauge': (
    <CustomGaugeContainer title="Questionaire with Gauge" data={gaugeData} />
  ),
  'Street Light Location': (
    <StreetLightLocation title="Street Light Location" data={streetLightData} />
  ),
  'Street Light Powered': (
    <CustomBulbHighChart title="Street Light Powered" data={bulbHighData} />
  ),
  'Status of Street Light': (
    <CustomPieChart title="Status of Street Light" data={pieData} />
  ),
  'Availability of Pathway for Pedesterian': (
    <CustomBarChart<YesNoBarType>
      title="Availability of Pathway for Pedesterian"
      data={pathwayBarData}
      dataKeys={barKeys}
      dataColors={barColors}
      legendLabels={barLegends}
      height={barHeight}
    />
  ),
  'Presence of CCTV Cameras': (
    <CustomBarChart<YesNoBarType>
      title="Presence of CCTV Cameras"
      data={camerasBarData}
      dataKeys={barKeys}
      dataColors={barColors}
      legendLabels={barLegends}
      height={barHeight}
    />
  ),
  'Presence of Security Personnel': (
    <CustomBarChart<YesNoBarType>
      title="Presence of Security Personnel"
      data={securityPersonnelBarData}
      dataKeys={barKeys}
      dataColors={barColors}
      legendLabels={barLegends}
      height={barHeight}
    />
  ),
  'Anti-Social Behavior': (
    <CustomBarChart<YesNoBarType>
      title="Anti-Social Behavior"
      data={antiSocialBarData}
      dataKeys={barKeys}
      dataColors={barColors}
      legendLabels={barLegends}
      height={barHeight}
    />
  ),
  'Incident of Harrasment': (
    <CustomBarChart<YesNoBarType>
      title="Incident of Harrasment"
      data={harrasmentBarData}
      dataKeys={barKeys}
      dataColors={barColors}
      legendLabels={barLegends}
      height={barHeight}
    />
  ),
};

export const dropDownKeys = Object.keys(
  charts
) as WomensSafetyAndSecurityChartKeys[];
export const chartComponents = Object.values(charts);
