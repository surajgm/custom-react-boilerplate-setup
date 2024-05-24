import { LocationTypeCard } from './LocationTypeCard';

export type LightLocationType = {
  type: string;
  percent: number;
  icon: string;
  styles: string;
};

type LightLocationProps = {
  title: string;
  data: LightLocationType[];
};

export const StreetLightLocation = ({ title, data }: LightLocationProps) => {
  return (
    <div className="relative flex flex-col w-full py-[18px] px-6 gap-[15px]">
      <h3 className="text-sm font-bold text-tgray-600">{title}</h3>
      <div className="flex flex-col w-full gap-8 pb-8">
        {data.map(({ type, percent, icon, styles }) => (
          <LocationTypeCard
            type={type}
            percent={percent}
            icon={icon}
            styles={styles}
          />
        ))}
      </div>
    </div>
  );
};
