import Info from '#assets/svg/Info.svg';
import { CustomGaugeChart } from '#components/Charts/CustomGaugeChart';

type GaugeChartType = {
  question: string;
  value: number;
};

type GaugeContainerProps = {
  title: string;
  data: GaugeChartType[];
};

export const CustomGaugeContainer = ({ title, data }: GaugeContainerProps) => {
  return (
    <div className="relative flex flex-col w-full py-[18px] px-6 gap-[15px]">
      <h3 className="text-sm font-bold text-tgray-600">{title}</h3>
      <div className="flex flex-col w-full gap-8 pb-8">
        {data.map(({ question, value }) => (
          <CustomGaugeChart question={question} value={value} />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <img className="self-start" src={Info} alt="info" />
        <p className="text-black">
          This indicates the most number of survey reported
        </p>
      </div>
    </div>
  );
};
