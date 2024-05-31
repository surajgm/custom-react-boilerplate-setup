import Download from '#assets/svg/Download.svg';
import Info from '#assets/svg/Info.svg';
import Refresh from '#assets/svg/Refresh.svg';
import { Button } from '#components/Button';
import { Dropdown } from '#components/Dropdown';

import { DataContext } from '#contexts/context';
import { downloadImage } from '#utils/utils';
import { useContext, useRef, useState } from 'react';
import {
  PublicOpenSpaceChartKeys,
  chartComponents,
  charts,
  dropDownKeys,
} from './DataMapper/ChartMapper';

export const PublicOpenSpace = () => {
  const [chart, setChart] = useState<PublicOpenSpaceChartKeys | 'All'>('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const { slice } = useContext(DataContext);
  console.log('Context-Demographics');
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-4xl font-semibold text-tprimary-600">{slice}</h2>
      <p className="text-base text-tgray-700">
        Nepal's rapid urbanization underscores the urgency for municipalities to
        enhance resilience by integrating robust disaster risk reduction
        measures. Public open spaces stand as a prime example of how urban
        infrastructure and investments can be planned in a manner that is
        responsive to gender dynamics and resilient to climate challenges.
        However, there's a pressing need to enhance the quality of urban design
        for these spaces to adhere to universal design principles, ensuring they
        are safe, inclusive, and accessible. Public open spaces identified in
        close coordination with the municipality were mapped and comprehensive
        data has been gathered on the types of spaces, available amenities,
        accessibility, utilization patterns, comfort levels, and green coverage.
      </p>
      <div>
        <img className="inline" src={Info} alt="Info" />
        <span className="pl-1 text-sm font-bold text-tgray-800">Source : </span>
        <span className="text-sm font-medium text-tgray-800">
          Field Survey 2024
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Dropdown<PublicOpenSpaceChartKeys>
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
      </div>
    </div>
  );
};
