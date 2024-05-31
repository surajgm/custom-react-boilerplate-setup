import { CustomBarChart } from '#components/Charts/CustomBarChart';
import { CustomBarNoAxisChart } from '#components/Charts/CustomBarNoAxisChart';
import { CustomDualBarChart } from '#components/Charts/CustomDualBarChart';
import { CustomTreemapChart } from '#components/Charts/CustomTreemapChart';
import {
  disabilityBarColors,
  disabilityBarKeys,
  disabilityLegends,
  disabilityPopBarData,
  dualBarData,
  noAxisBarData,
  sexBarColors,
  sexBarKeys,
  sexLegends,
  sexPopBarData,
  treeMapData,
  wardBarColors,
  wardBarKeys,
  wardLegends,
  wardsPopBarData,
} from './mapper';

export type DemoGraphicChartKeys =
  | 'Population Distribution by Sex'
  | 'Population Distribution by Ward'
  | 'Population Distribution by literacy rate'
  | 'Population Distribution by Ethnicity'
  | 'Population Distribution by Disability'
  | 'Family Head Household Distribution by Age';

type SexBarType =
  | {
      name: string;
      maleCount: number;
      femaleCount?: undefined;
    }
  | {
      name: string;
      femaleCount: number;
      maleCount?: undefined;
    };

type WardsPopBarType = {
  name: string;
  male: number;
  female: number;
  total: number;
};

type DisabilityPopBarType =
  | {
      name: string;
      totalCount: number;
      menCount?: undefined;
      womenCount?: undefined;
    }
  | {
      name: string;
      menCount: number;
      totalCount?: undefined;
      womenCount?: undefined;
    }
  | {
      name: string;
      womenCount: number;
      totalCount?: undefined;
      menCount?: undefined;
    };

const sexBarHeight = 250;
const disabilityBarHeight = 300;

export const charts: Record<DemoGraphicChartKeys, JSX.Element> = {
  'Population Distribution by Sex': (
    <CustomBarChart<SexBarType>
      title="Population Distribution by Sex"
      data={sexPopBarData}
      dataKeys={sexBarKeys}
      dataColors={sexBarColors}
      legendLabels={sexLegends}
      height={sexBarHeight}
    />
  ),
  'Population Distribution by Ward': (
    <CustomBarChart<WardsPopBarType>
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
    <CustomBarChart<DisabilityPopBarType>
      title="Population Distribution by Disability"
      data={disabilityPopBarData}
      dataKeys={disabilityBarKeys}
      dataColors={disabilityBarColors}
      legendLabels={disabilityLegends}
      height={disabilityBarHeight}
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
