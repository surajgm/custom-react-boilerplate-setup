import clsx from 'clsx';
import { CustomSwitch } from './CustomSwitch';

type LayerSwitchProps = {
  positionStyles: string;
};

const layerData = [
  {
    name: 'All Public Facilities',
  },
  {
    name: 'Street Lights',
  },
  {
    name: 'Public Space Assessment',
  },
];

export const LayerSwitch = ({ positionStyles }: LayerSwitchProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-2 px-[10px] py-[14px] rounded-[5px] bg-tgray-25',
        positionStyles
      )}
    >
      <h4 className="text-sm font-semibold text-tgray-800">Layers</h4>
      {layerData.map((layer) => (
        <div className="flex gap-2" key={layer.name}>
          <CustomSwitch />
          <strong className="text-xs font-normal text-tgray-800">
            {layer.name}
          </strong>
        </div>
      ))}
    </div>
  );
};
