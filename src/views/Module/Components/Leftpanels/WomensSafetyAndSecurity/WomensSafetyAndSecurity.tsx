import Download from '#assets/svg/Download.svg';
import Info from '#assets/svg/Info.svg';
import Refresh from '#assets/svg/Refresh.svg';
import { Button } from '#components/Button';
import { Dropdown } from '#components/Dropdown';

import { DataContext } from '#contexts/context';
import { downloadImage } from '#utils/utils';
import { useContext, useRef, useState } from 'react';
import {
  ClimateResilienceChartKeys,
  chartComponents,
  charts,
  dropDownKeys,
} from './DataMapper/ChartMapper';

export const WomensSafetyAndSecurity = () => {
  const [chart, setChart] = useState<ClimateResilienceChartKeys | 'All'>('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const { slice } = useContext(DataContext);
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-4xl font-semibold text-tprimary-600">
        Women's Safety and Security
      </h2>
      <p className="text-base text-tgray-700">
        Ensuring women's safety and security is paramount for creating a just
        and equitable society. It's about creating a culture where women are
        respected, protected, and able to fully participate in society without
        fear of violence or discrimination. The data presented here show the
        perception of people who are residing around public open spaces on
        safety and security collected during the field survey.
      </p>
      <div>
        <img className="inline" src={Info} alt="Info" />
        <span className="pl-1 text-sm font-bold text-tgray-800">Source : </span>
        <span className="text-sm font-medium text-tgray-800">
          Field Survey 2024
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Dropdown chart={chart} setChart={setChart} data={dropDownKeys} />
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
      </div>
    </div>
  );
};
