import clsx from 'clsx';
import { LightLocationType } from './StreetLightLocation';

export const LocationTypeCard = ({
  type,
  percent,
  icon,
  styles,
}: LightLocationType) => {
  return (
    <div className={clsx('relative w-[120px] h-[55px] rounded', styles)}>
      <div
        className={clsx(
          'absolute size-[60px] rounded-full left-1/2 bottom-1/2 translate-x-[-50%]',
          styles.split(' ')[0]
        )}
      >
        <img
          className="absolute top-1/3 left-1/2 translate-x-[-50%] translate-y-[-50%] size-6"
          src={icon}
          alt={type}
        />
      </div>
      <div
        className={clsx(
          'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center w-full px-4'
        )}
      >
        <span className="text-center">{type}</span>
        <span className="text-base font-normal">{percent}%</span>
      </div>
    </div>
  );
};
