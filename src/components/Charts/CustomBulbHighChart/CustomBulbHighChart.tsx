import Info from '#assets/svg/Info.svg';
import { BulbHighChart } from './BulbHighChart';

type BulbDataType = {
  name: string;
  data: number[];
  color: string;
};

export type BulbHighChartProps = {
  title: string;
  data: BulbDataType[];
};

export const CustomBulbHighChart = ({ title, data }: BulbHighChartProps) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BulbHighChart title={title} data={data} />
        <div className="ml-[-3px] h-3 border rounded-full w-28 border-tgray-800" />
        <div className="ml-[-3px] mt-2 h-3 border rounded-full w-[92px] border-tgray-800" />
      </div>
      <div className="flex items-center gap-3">
        <img className="self-start" src={Info} alt="info" />
        <p className="text-black">Others includes sources such as ...</p>
      </div>
    </>
  );
};
