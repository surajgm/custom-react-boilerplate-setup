import { CustomBarChart } from '#components/Charts/CustomBarChart';
import { CustomPieChart } from '#components/Charts/CustomPieChart';
import {
  availabilityFacilityPieData,
  disabilityFriendlyPieData,
  operatorBarData,
  singleBarColor,
  singleBarKey,
} from './mapper';

export type PublicFacilitiesChartKeys =
  | 'Availability of Public Facilities'
  | 'Operator Type'
  | 'Disability Friendly';

type OperatorType = {
  name: string;
  count: number;
};

export const charts: Record<PublicFacilitiesChartKeys, JSX.Element> = {
  'Availability of Public Facilities': (
    <CustomPieChart
      title="Availability of Public Facilities"
      data={availabilityFacilityPieData}
    />
  ),
  'Operator Type': (
    <CustomBarChart<OperatorType>
      title="Operator Type"
      data={operatorBarData}
      dataColors={singleBarColor}
      dataKeys={singleBarKey}
    />
  ),
  'Disability Friendly': (
    <CustomPieChart
      title="Disability Friendly"
      data={disabilityFriendlyPieData}
    />
  ),
};

export const dropDownKeys = Object.keys(charts) as PublicFacilitiesChartKeys[];
export const chartComponents = Object.values(charts);
