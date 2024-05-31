import { CustomBarChart } from '#components/Charts/CustomBarChart';
import { CustomDualBarChart } from '#components/Charts/CustomDualBarChart';
import { CustomPieChart } from '#components/Charts/CustomPieChart';
import { CustomScaleChart } from '#components/Charts/CustomScaleChart';
import { CustomStackChart } from '#components/Charts/CustomStackChart';
import { CustomTreemapChart } from '#components/Charts/CustomTreemapChart';
import {
  areaOpenSpaceBarData,
  babyCareStackData,
  breastFeedingStackData,
  busiestTimeBarData,
  dataColors,
  dualBarData,
  formalInformalPieData,
  garbageBinStackData,
  legendLabels,
  ownerShipStackData,
  scaleData,
  singleBarColor,
  singleBarKey,
  siteBarData,
  sittingFacilitiesStackData,
  streetLightingStackData,
  surfacePieData,
  treeMapData,
  vehicleMovementStackData,
} from './mapper';

export type PublicOpenSpaceChartKeys =
  | 'Ownership of Public Space'
  | 'Formal or Informal Public Space'
  | 'Use of Public Open Space'
  | 'Area of Public Open Space'
  | 'Surface of Public Open Space'
  | 'Availability of Sitting Facilities'
  | 'Restriction to Vehicle Movements'
  | 'Availability Street Lighting'
  | 'Availability Garbage Bin'
  | 'Availability of Breast Feeding Facility'
  | 'Availability of Baby Care Facility'
  | 'Access to the site'
  | 'Busiest Time of the Week'
  | 'Users of Public Space'
  | 'Public Space Scale';

type CommonBarType = {
  name: string;
  count: number;
};

export const charts: Record<PublicOpenSpaceChartKeys, JSX.Element> = {
  'Ownership of Public Space': (
    <CustomStackChart
      title="Ownership of Public Space"
      data={ownerShipStackData}
    />
  ),
  'Formal or Informal Public Space': (
    <CustomPieChart
      title="Formal or Informal Public Space"
      data={formalInformalPieData}
    />
  ),
  'Use of Public Open Space': (
    <CustomTreemapChart title="Use of Public Open Space" data={treeMapData} />
  ),
  'Area of Public Open Space': (
    <CustomBarChart<CommonBarType>
      title="Area of Public Open Space"
      data={areaOpenSpaceBarData}
      dataColors={singleBarColor}
      dataKeys={singleBarKey}
      layout="horizontal"
      xAxisType="category"
      yAxisType="number"
    />
  ),
  'Surface of Public Open Space': (
    <CustomPieChart
      title="Surface of Public Open Space"
      data={surfacePieData}
    />
  ),
  'Availability of Sitting Facilities': (
    <CustomStackChart
      title="Availability of Sitting Facilities"
      data={sittingFacilitiesStackData}
    />
  ),
  'Restriction to Vehicle Movements': (
    <CustomStackChart
      title="Restriction to Vehicle Movements"
      data={vehicleMovementStackData}
    />
  ),
  'Availability Street Lighting': (
    <CustomStackChart
      title="Availability Street Lighting"
      data={streetLightingStackData}
    />
  ),
  'Availability Garbage Bin': (
    <CustomStackChart
      title="Availability Garbage Bin"
      data={garbageBinStackData}
    />
  ),
  'Availability of Breast Feeding Facility': (
    <CustomStackChart
      title="Availability of Breast Feeding Facility"
      data={breastFeedingStackData}
    />
  ),
  'Availability of Baby Care Facility': (
    <CustomStackChart
      title="Availability of Baby Care Facility"
      data={babyCareStackData}
    />
  ),
  'Access to the site': (
    <CustomBarChart<CommonBarType>
      title="Access to the site"
      data={siteBarData}
      dataColors={singleBarColor}
      dataKeys={singleBarKey}
    />
  ),
  'Busiest Time of the Week': (
    <CustomBarChart<CommonBarType>
      title="Busiest Time of the Week"
      data={busiestTimeBarData}
      dataColors={singleBarColor}
      dataKeys={singleBarKey}
    />
  ),
  'Public Space Scale': (
    <CustomScaleChart
      title="Public Space Scale"
      data={scaleData}
      legendLabels={legendLabels}
      dataColors={dataColors}
    />
  ),
  'Users of Public Space': (
    <CustomDualBarChart title="Users of Public Space" data={dualBarData} />
  ),
};

export const dropDownKeys = Object.keys(charts) as PublicOpenSpaceChartKeys[];
export const chartComponents = Object.values(charts);
