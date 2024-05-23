import Download from '#assets/svg/Download.svg';
import Info from '#assets/svg/Info.svg';
import Refresh from '#assets/svg/Refresh.svg';
import { Button } from '#components/Button';
import { Dropdown } from '#components/Dropdown';

import { DataContext } from '#contexts/context';
import { downloadImage } from '#utils/utils';
import { useContext, useRef, useState } from 'react';
import { WeatherCard } from './Components/WeatherCard';
import {
  ClimateResilienceChartKeys,
  chartComponents,
  charts,
  dropDownKeys,
} from './DataMapper/ChartMapper';
import { weatherData } from './DataMapper/mapper';

export const ClimateResilience = () => {
  const [chart, setChart] = useState<ClimateResilienceChartKeys | 'All'>('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const { slice } = useContext(DataContext);
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-4xl font-semibold text-tprimary-600">
        Climate Resilience
      </h2>
      <p className="text-base text-tgray-700">
        Nepal has an extremely varied and complex climate, driven by uneven
        terrain and regional weather systems. In addition, urban settlements in
        Nepal rank tenth globally on the Climate Risk Index 2021, with extreme
        weather events disproportionately impacting vulnerable populations,
        particularly women and marginalized communities. Nepal's placement at
        106th on the Global Gender Gap Index underscores the persistent gender
        disparities exacerbated by climate change. Rapid and unplanned
        urbanization, coupled with inadequate urban planning and persistent
        gender inequality, contribute to poor infrastructure and unsafe public
        spaces, disproportionately affecting low-income women, girls, youth, and
        persons with disabilities. Looking at the incidents, in the past 10
        years, there have been 70 reported incidents resulting in the loss of
        lives of 6 people and 49 million economic loss. The majority of the
        incidents are fire and forest fires in Chandragiri Municipality during
        the dry season.
      </p>
      <div>
        <img className="inline" src={Info} alt="Info" />
        <span className="pl-1 text-sm font-bold text-tgray-800">Source : </span>
        <span className="text-sm font-medium text-tgray-800">
          Bipad Portal & Department of Hydrology and Meteorology
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
      <div className="flex flex-wrap gap-4">
        {weatherData.map(({ label, value, svg, svgStyle }) => (
          <WeatherCard
            label={label}
            value={`${value}${label === 'Annual Rainfall' ? 'mm' : '°C'}`}
            svg={svg}
            svgStyle={svgStyle}
          />
        ))}
      </div>
      <div ref={containerRef} className="flex flex-col">
        {chart === 'All' ? <>{chartComponents}</> : charts[chart]}
      </div>
    </div>
  );
};
