import Info from '#assets/svg/Info.svg';
import { getPercent } from '#utils/utils';
import { useMemo } from 'react';
import { Bar } from './Bar';

type DataType = {
  label: string;
  count: number;
};

type NoAxisBarProps = {
  title: string;
  data: DataType[];
};

export const CustomBarNoAxisChart = ({ data, title }: NoAxisBarProps) => {
  const totalCount = useMemo(() => {
    return data.reduce((acc, curr) => {
      return acc + curr.count;
    }, 0);
  }, [data]);

  return (
    <div className="flex flex-col gap-[15px] w-full py-[18px] px-6">
      <h3 className="text-sm font-bold text-tgray-600">{title}</h3>
      {data.map((barValue) => (
        <div className="text-sm text-tgray-600" key={barValue.label}>
          <p className="flex gap-2">
            <strong className="font-semibold">{barValue.count}</strong>
            <span>{barValue.label}</span>
          </p>
          <Bar value={getPercent(barValue.count, totalCount)} />
          <p>
            {`${getPercent(barValue.count, totalCount)}% of Total Population`}
          </p>
        </div>
      ))}
      <div className="flex items-center gap-3">
        <img className="self-start" src={Info} alt="info" />
        <p className="text-black">
          Others includes castes such as Teli, Magar, Tamang, Tharu, and Yadav
        </p>
      </div>
    </div>
  );
};
