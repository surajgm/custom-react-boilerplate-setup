import clsx from 'clsx';
import { LightLocationType } from './StreetLightLocation';

export const LocationTypeCard = ({
  type,
  percent,
  icon,
  styles,
}: LightLocationType) => {
  return (
    <div className={clsx('w-[120px] h-[55px] rounded', styles)}>
      <div className={clsx('size-[60px] rounded-full', styles.split(' ')[0])}>
        <img className="size-6" src={icon} alt={type} />
      </div>
      <div className={clsx('flex flex-col justify-center items-center')}>
        <span>{type}</span>
        <span className="text-base font-normal">{percent}%</span>
      </div>
    </div>
  );
};
