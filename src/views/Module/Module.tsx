import FourDots from '#assets/svg/FourDots.svg';
import { SLICES } from '#constants/constants';
import { useContext } from 'react';
import { Demographics } from './components/Leftpanels';
import { Map } from './components/Map';
import { DataContext } from '#contexts/context';

export const Module = () => {
  const { slice, setSlice } = useContext(DataContext);

  const leftPanelHandler = (module: string) => {
    switch (module) {
      case SLICES.DEMOGRAPHICS:
        return <Demographics />;
    }
  };

  return (
    <main className="w-full h-screen">
      <header className="flex items-center gap-5 px-4 py-6 border-b border-tgray-300">
        <img
          role="button"
          onClick={() => setSlice(SLICES.MODULES)}
          src={FourDots}
          alt="Four circular dots"
        />
        <h1 className="text-2xl font-semibold text-tgray-900">
          <span className="text-primary-900">{slice}</span> in{' '}
          <span className="capitalize">chandragiri municipality</span>
        </h1>
      </header>
      <article className="flex h-full">
        <aside className="w-1/3 px-12 py-6 border-r-2 border-pink-700">
          {leftPanelHandler(slice)}
        </aside>
        <section className="w-2/3 border-l-2 border-blue-800">
          <Map />
        </section>
      </article>
    </main>
  );
};
