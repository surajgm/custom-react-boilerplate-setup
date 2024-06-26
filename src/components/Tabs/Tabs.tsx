import React from 'react';
import { Tab } from '@headlessui/react';
import EmblemOfNepal from '#assets/png/EmblemOfNepal.png';
import clsx from 'clsx';

type TabList = {
  'About the Project': React.ReactNode;
  Methodology: React.ReactNode;
  'How to use the Portal': React.ReactNode;
};

type TabsProps = {
  tabList: TabList;
};

export const Tabs = ({ tabList }: TabsProps) => {
  return (
    <div className="flex flex-col h-full">
      <Tab.Group>
        <header className={clsx('flex justify-between items-center')}>
          <div
            // role="button"
            // onClick={() => setShowModules(false)}
            className={clsx('flex gap-3 items-center justify-center')}
          >
            <img
              className="w-[60px] h-[50px]"
              src={EmblemOfNepal}
              alt="Emblem of Nepal"
              loading="lazy"
            />
            <h1
              className={clsx(
                'text-tprimary-600 text-[28px] leading-[44px] font-semibold'
              )}
            >
              चन्द्रागिरि नगरपालिका
            </h1>
          </div>
          <Tab.List
            className={clsx(
              ' bg-tprimary-200 rounded-[40px] py-2 px-3 flex gap-9 w-fit '
            )}
          >
            {Object.keys(tabList).map((tabKey) => (
              <Tab
                className={({ selected }) =>
                  clsx(
                    'p-4 rounded-[32px] text-lg text-white outline-none',
                    selected ? 'bg-tprimary-400' : ''
                  )
                }
                key={tabKey}
              >
                {tabKey}
              </Tab>
            ))}
          </Tab.List>
        </header>

        <Tab.Panels className={'flex-1'}>
          {Object.values(tabList).map((tabValue, idx) => (
            <Tab.Panel key={idx} className={'h-full'}>
              {tabValue}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
