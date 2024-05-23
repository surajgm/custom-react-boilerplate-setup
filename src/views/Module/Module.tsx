import Download from '#assets/svg/Download.svg';
import FourDots from '#assets/svg/FourDots.svg';
import { Button } from '#components/Button';
import { SLICES } from '#constants/constants';
import { DataContext } from '#contexts/context';
import { downloadImage } from '#utils/utils';
import { useContext, useRef } from 'react';
import { ClimateResilience } from './Components/Leftpanels/ClimateResilience/ClimateResilience';
import { Demographics } from './Components/Leftpanels/Demographics';
import { Map } from './Components/Map';

export const Module = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const { slice, setSlice } = useContext(DataContext);

  const leftPanelHandler = (module: string) => {
    switch (module) {
      case SLICES.DEMOGRAPHICS:
        return <Demographics />;
      case SLICES.CLIMATERESILIENCE:
        return <ClimateResilience />;
    }
  };

  return (
    <main className="flex flex-col w-full h-screen">
      <header className="flex justify-between border h-[80px] items-center  px-4 py-6 border-b border-tgray-300">
        <div className="flex gap-5">
          <img
            role="button"
            onClick={() => setSlice(SLICES.MODULES)}
            src={FourDots}
            alt="Four circular dots"
          />
          <h1 className="text-2xl font-semibold text-tgray-900">
            <span className="text-tprimary-600">{slice}</span> in{' '}
            <span className="capitalize">chandragiri municipality</span>
          </h1>
        </div>
        <Button
          icon={Download}
          className="!py-2 px-[14px] ml-[12px] text-white gap-2 btn-primary"
          onClick={() => downloadImage(mapContainerRef)}
        >
          Download Map
        </Button>
      </header>
      <article
        style={{
          height: 'calc(100vh - 80px)',
        }}
        className="flex"
      >
        <aside className="w-1/3 h-full px-12 py-6 overflow-auto border-r bg-tprimary-50 border-tgray-300">
          {leftPanelHandler(slice)}
        </aside>
        <section className="w-2/3 h-full">
          <Map mapContainerRef={mapContainerRef} />
        </section>
      </article>
    </main>
  );
};
