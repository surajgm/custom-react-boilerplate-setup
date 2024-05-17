import Info from '#assets/svg/Info.svg';
import { Button } from '#components/Button';
import { Dropdown } from '#components/Dropdown';
import Refresh from '#assets/svg/Refresh.svg';
import Download from '#assets/svg/Download.svg';

import { CustomTreemapChart } from '#components/Charts/CustomTreemapChart';
import { CustomPieChart } from '#components/Charts/CustomPieChart';
import { CustomBubbleChart } from '#components/Charts/CustomBubbleChart';
import { CustomBarNoAxisChart } from '#components/Charts/CustomBarNoAxisChart';
import { CustomBarChart } from '#components/Charts/CustomBarChart';
import { CustomLineChart } from '#components/Charts/CustomLineChart';
import { CustomGauge } from '#components/Charts/CustomGauge';
import {
  disabilityBarColors,
  disabilityBarKeys,
  disabilityLegends,
  disabilityPopBarData,
  rainLineKeys,
  rainfallLineData,
  rainlineColors,
  rainlineLegends,
  siteBarColor,
  siteBarData,
  siteBarKey,
  wardBarColors,
  wardBarKeys,
  wardLegends,
  wardsPopBarData,
} from './dataMapper/dataMapper';
import { CustomStackChart } from '#components/Charts/CustomStackChart';
import { CustomDualBarChart } from '#components/Charts/CustomDualBarChart';
import { CustomBulbHighChart } from '#components/Charts/CustomBulbHighChart';

const gaugeBandsData = [
  { start: 0, end: 36, color: '#57BF20', label: 'Low' },
  { start: 36, end: 72, color: '#B2CB1B' },
  { start: 72, end: 108, color: '#DDD51B', label: 'Medium' },
  { start: 108, end: 144, color: '#D78A26' },
  { start: 144, end: 180, color: '#D23433', label: 'High' },
];

export const Demographics = () => {
  return (
    <div className="flex flex-col gap-3 overflow-auto">
      <h2 className="text-4xl font-semibold text-tprimary-600">Demographics</h2>
      <p className="text-base text-tgray-700">
        In terms of gender demographics, Chandragiri likely exhibits a
        relatively balanced population distribution between males and females,
        with slight variations depending on factors such as age groups and
        economic activities. However, despite this overall balance, gender
        disparities may exist in areas such as education, employment, and
        political representation.
      </p>
      <div>
        <img className="inline" src={Info} alt="Info" />
        <span className="pl-1 text-sm font-bold text-tgray-800">Source : </span>
        <span className="text-sm font-medium text-tgray-800">
          National Population and Housing Census 2021
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Dropdown />
        <Button icon={Refresh} className="!p-2 btn-primary" />
        <Button
          icon={Download}
          className="!py-2 px-[14px] ml-[12px] text-white gap-2 btn-primary"
        >
          Download
        </Button>
      </div>
      <div className="flex flex-col">
        <CustomTreemapChart />
        <CustomPieChart />
        <CustomBubbleChart />
        <CustomBarNoAxisChart />
        <CustomBarChart
          title="Population Distribution by Ward"
          data={wardsPopBarData}
          dataKeys={wardBarKeys}
          dataColors={wardBarColors}
          legendLabels={wardLegends}
        />
        <CustomBarChart
          title="Population Distribution by Disability"
          data={disabilityPopBarData}
          dataKeys={disabilityBarKeys}
          dataColors={disabilityBarColors}
          legendLabels={disabilityLegends}
        />
        <CustomBarChart
          title="Access to the site"
          data={siteBarData}
          dataKeys={siteBarKey}
          dataColors={siteBarColor}
          yAxisTick={true}
        />
        <CustomLineChart
          title="Rainfall"
          data={rainfallLineData}
          dataKeys={rainLineKeys}
          dataColors={rainlineColors}
          legendLabels={rainlineLegends}
        />
        <CustomGauge value={80} min={0} max={180} bands={gaugeBandsData} />
        <CustomStackChart />
        <CustomDualBarChart />
        <CustomBulbHighChart />
      </div>
    </div>
  );
};
