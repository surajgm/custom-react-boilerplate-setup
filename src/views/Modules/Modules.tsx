import clsx from 'clsx';
import { useContext } from 'react';
import { DataContext } from '#contexts/context';
import EmblemOfNepalLg from '#assets/png/EmblemOfNepalLg.png';
import { modules } from './dataMapper/dataMapper';
import { ModuleItem } from './components/ModuleItem';
import { SLICES } from '#constants/constants';

export const Modules = () => {
  const { setSlice } = useContext(DataContext);
  return (
    <div className="w-full h-screen bg-tprimary-100 py-[84px] px-[116px] flex flex-col gap-[116px]">
      <div
        role="button"
        onClick={() => setSlice(SLICES.HOME)}
        className={clsx('flex gap-3 items-center justify-center self-start')}
      >
        <img
          className="w-[134px] h-[112px]"
          src={EmblemOfNepalLg}
          alt="Emblem of Nepal"
          loading="lazy"
        />
        <h1
          className={clsx(
            'text-tprimary-600 text-[36px] leading-[44px] font-semibold'
          )}
        >
          चन्द्रागिरि नगरपालिका
        </h1>
      </div>
      <div className="flex flex-col gap-9">
        <h2 className="text-4xl font-semibold text-tprimary-600">
          Select a Module
        </h2>
        <div className="flex flex-wrap gap-10 text-white">
          {modules.map((module) => (
            <ModuleItem
              key={module.id}
              svg={module.svg}
              title={module.title}
              onClick={() => setSlice(module.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
