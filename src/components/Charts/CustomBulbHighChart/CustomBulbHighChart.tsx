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
        <div className="ml-[-3px] h-[10px] border rounded-full w-20 border-tgray-800" />
        <div className="ml-[-3px] mt-2 h-[10px] border rounded-full w-16 border-tgray-800" />
      </div>
      <div className="flex items-center gap-2 mt-4">
        <img className="self-center size-[14px]" src={Info} alt="info" />
        <p className="text-sm text-black">
          Others includes sources such as ...
        </p>
      </div>
    </>
  );
};
