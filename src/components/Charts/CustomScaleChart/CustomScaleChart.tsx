import Info from '#assets/svg/Info.svg';
import { Scale } from './Scale';

type DataType = {
  title: string;
  percent: number;
};

type ScaleChartProps = {
  title: string;
  data: DataType[];
  legendLabels: string[];
  dataColors: string[];
};

export const CustomScaleChart = ({
  title,
  data,
  legendLabels,
  dataColors,
}: ScaleChartProps) => {
  return (
    <div className="relative flex flex-col w-full py-[18px] px-6 gap-[15px]">
      <h3 className="text-sm font-bold text-tgray-600">{title}</h3>
      <div className="flex flex-col w-full gap-8 pb-8">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-tgray-600">
              {item.title}
            </h4>
            <Scale percent={item.percent} />
          </div>
        ))}
      </div>
      {legendLabels && legendLabels.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
          {legendLabels.map((value, index) => (
            <div className="flex items-center gap-1" key={value}>
              <div
                style={{
                  backgroundColor: dataColors[index],
                }}
                className={'size-4 rounded-xl'}
              />
              <strong className="text-xs font-medium capitalize text-tgray-600">
                {value}
              </strong>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center gap-3">
        <img className="self-start" src={Info} alt="info" />
        <p className="text-black">
          It represents the highest percentage reported from 2000 surveys
          conducted
        </p>
      </div>
    </div>
  );
};
