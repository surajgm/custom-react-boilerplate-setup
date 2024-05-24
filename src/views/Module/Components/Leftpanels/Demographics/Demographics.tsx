import Download from '#assets/svg/Download.svg';
import Info from '#assets/svg/Info.svg';
import Refresh from '#assets/svg/Refresh.svg';
import { Button } from '#components/Button';
import { Dropdown } from '#components/Dropdown';

import { CustomBulbHighChart } from '#components/Charts/CustomBulbHighChart';
import { DataContext } from '#contexts/context';
import { downloadImage } from '#utils/utils';
import { useContext, useRef, useState } from 'react';
import {
  DemoGraphicChartKeys,
  chartComponents,
  charts,
  dropDownKeys,
} from './DataMapper/ChartMapper';

export const Demographics = () => {
  const [chart, setChart] = useState<DemoGraphicChartKeys | 'All'>('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const { slice } = useContext(DataContext);
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-4xl font-semibold text-tprimary-600">Demographics</h2>
      <p className="text-base text-tgray-700">
        Chandragiri Municipality is a vibrant administrative region nested in
        the Kathmandu Valley of Nepal. Situated on the southwestern outskirts of
        Kathmandu, Chandragiri holds historical, cultural, and natural
        significance. According to the National Population and Housing Census
        2021, Chandragiri Municipality has a population of 136,860 with 35,994
        households and 3,116 population density. In terms of gender
        demographics, Chandragiri Municipality likely exhibits a relatively
        balanced population distribution between males and females, with slight
        variations depending on factors such as age groups, and literacy rate.
      </p>
      <div>
        <img className="inline" src={Info} alt="Info" />
        <span className="pl-1 text-sm font-bold text-tgray-800">Source : </span>
        <span className="text-sm font-medium text-tgray-800">
          National Population and Housing Census 2021
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Dropdown<DemoGraphicChartKeys>
          chart={chart}
          setChart={setChart}
          data={dropDownKeys}
        />
        <Button
          icon={Refresh}
          className="!p-2 btn-primary"
          onClick={() => setChart('All')}
        />
        <Button
          icon={Download}
          className="!py-2 px-[14px] ml-[12px] text-white gap-2 btn-primary"
          onClick={() => downloadImage(containerRef, slice)}
        >
          Download
        </Button>
      </div>
      <div ref={containerRef} className="flex flex-col">
        {chart === 'All' ? <>{chartComponents}</> : charts[chart]}
        {/* 
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
        <CustomScaleChart />
      <CustomBarWithIcon /> */}
        <CustomBulbHighChart />
      </div>
    </div>
  );
};
