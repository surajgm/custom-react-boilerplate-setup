import clsx from 'clsx';
import { useContext } from 'react';
import { DataContext } from '#contexts/context';
import EmblemOfNepalLg from '#assets/png/EmblemOfNepalLg.png';
import { modules } from './dataMapper/dataMapper';
import { Module } from './components/Module';

export const Modules = () => {
  const { setShowModules } = useContext(DataContext);
  return (
    <div className="text-white w-full h-full bg-[#0E6353] py-[84px] px-[116px] flex flex-col gap-[116px]">
      <div
        role="button"
        onClick={() => setShowModules(false)}
        className={clsx('flex gap-3 items-center justify-center self-start')}
      >
        <img
          className="w-134px h-112px"
          src={EmblemOfNepalLg}
          alt="Emblem of Nepal"
        />
        <h1
          className={clsx(
            'text-white text-[36px] leading-[44px] font-semibold'
          )}
        >
          चन्द्रागिरि नगरपालिका
        </h1>
      </div>
      <div className="flex flex-col gap-9">
        <h2 className="text-4xl font-semibold">Select a Module</h2>
        <div className="flex flex-wrap gap-10">
          {modules.map((module) => (
            <Module svg={module.svg} title={module.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
