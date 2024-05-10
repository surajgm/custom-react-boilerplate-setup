import { getPercent } from '#utils/utils';
import { useMemo } from 'react';
import { Bar } from './Bar';
import Info from '#assets/svg/Info.svg';

const noAxisBarData = [
  {
    label: 'Brahmin',
    count: 1202,
  },
  {
    label: 'Kshettri',
    count: 1674,
  },
  {
    label: 'Newar',
    count: 800,
  },
  {
    label: 'Magar',
    count: 700,
  },
  {
    label: 'Other',
    count: 1300,
  },
];

export const CustomBarNoAxisChart = () => {
  const totalCount = useMemo(() => {
    return noAxisBarData.reduce((acc, curr) => {
      return acc + curr.count;
    }, 0);
  }, [noAxisBarData]);

  return (
    <div className="flex flex-col gap-[15px] w-full py-[18px] px-6">
      <h3 className="text-sm font-bold text-tgray-600">
        Population Distribution by Ethnicity
      </h3>
      {noAxisBarData.map((barValue) => (
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
