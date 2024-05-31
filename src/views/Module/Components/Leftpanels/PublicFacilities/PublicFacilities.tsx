import Download from '#assets/svg/Download.svg';
import Info from '#assets/svg/Info.svg';
import Refresh from '#assets/svg/Refresh.svg';
import { Button } from '#components/Button';
import { Dropdown } from '#components/Dropdown';

import { DataContext } from '#contexts/context';
import { downloadImage } from '#utils/utils';
import { useContext, useRef, useState } from 'react';
import { FacilitiesCard } from './Components/FacilitiesCard';
import {
  PublicFacilitiesChartKeys,
  chartComponents,
  charts,
  dropDownKeys,
} from './DataMapper/ChartMapper';
import { facilitiesData } from './DataMapper/mapper';

export const PublicFacilities = () => {
  const [chart, setChart] = useState<PublicFacilitiesChartKeys | 'All'>('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const { slice } = useContext(DataContext);
  console.log('Context-Demographics');
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-4xl font-semibold text-tprimary-600">{slice}</h2>
      <p className="text-base text-tgray-700">
        Public facilities are essential infrastructural elements provided by the
        government or other entities for the use of the general public. They are
        essential for supporting the well-being, development, and quality of
        life of individuals and communities. Ensuring equitable access to these
        facilities is important for promoting inclusivity, social cohesion, and
        sustainable development.Through field surveys, the public facilities
        such as education institutions, health facilities, banking and finance,
        government institutions, culture/heritage sites, sanitation, and bus
        stations around the public open spaces were mapped.
      </p>
      <div>
        <img className="inline" src={Info} alt="Info" />
        <span className="pl-1 text-sm font-bold text-tgray-800">Source : </span>
        <span className="text-sm font-medium text-tgray-800">
          Field Survey 2024
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Dropdown<PublicFacilitiesChartKeys>
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
      <div className="flex flex-wrap gap-3">
        {facilitiesData.map(({ icon, title, value }) => (
          <FacilitiesCard icon={icon} title={title} value={value} />
        ))}
      </div>
      <div ref={containerRef} className="flex flex-col">
        {chart === 'All' ? <>{chartComponents}</> : charts[chart]}
      </div>
    </div>
  );
};
