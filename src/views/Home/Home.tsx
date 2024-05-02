import clsx from 'clsx';
import { Tabs } from '#components/Tabs';
import { tabList } from './dataMapper/dataMapper';

export const Home = () => {
  return (
    <div className={clsx('w-full h-full bg-[#0E6353] py-9 px-[46px]')}>
      <Tabs tabList={tabList} />
    </div>
  );
};
