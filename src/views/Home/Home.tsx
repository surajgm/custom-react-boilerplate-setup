import clsx from 'clsx';
import { Tabs } from '#components/Tabs';
import { tabList } from './dataMapper/dataMapper';

export const Home = () => {
  return (
    <div
      className={clsx(
        'w-full min-h-screen h-full bg-tprimary-100 py-9 px-[46px] '
      )}
    >
      <Tabs tabList={tabList} />
    </div>
  );
};
