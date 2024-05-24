import { Bar } from './Bar';

type DataType = {
  label: string;
  percent: number;
  svg: string;
};
type BarWithIconProps = {
  data: DataType[];
};

export const CustomBarWithIcon = ({ data }: BarWithIconProps) => {
  return (
    <div className="flex flex-col gap-[15px] w-full py-[18px] px-6">
      <h3 className="text-sm font-bold text-tgray-600">
        Infrastructural Problems
      </h3>
      {data.map((barValue) => (
        <div className="flex gap-2 text-sm text-tgray-600" key={barValue.label}>
          <span className="self-start text-lg font-semibold text-tprimary-500">
            {barValue.percent}%
          </span>
          <div className="flex flex-col w-full gap-3">
            <Bar percent={barValue.percent} icon={barValue.svg} />
            <p>{barValue.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
