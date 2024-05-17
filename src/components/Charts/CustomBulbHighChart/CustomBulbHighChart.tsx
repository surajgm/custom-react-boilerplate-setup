import { BulbHighChart } from './BulbHighChart';

export const CustomBulbHighChart = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <BulbHighChart />
      <div className="ml-[-3px] h-3 border rounded-full w-28 border-tgray-800" />
      <div className="ml-[-3px] mt-2 h-3 border rounded-full w-[92px] border-tgray-800" />
    </div>
  );
};
