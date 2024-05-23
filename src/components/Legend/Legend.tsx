import clsx from 'clsx';

type Data = {
  label: string;
  color?: string;
  icon?: string;
};
type LegendProps = {
  data: Data[];
  positionStyles: string;
  title: string;
};

export const Legend = ({ data, positionStyles, title }: LegendProps) => {
  return (
    <div
      className={clsx(
        'bg-tgray-25 border border-tgray-200 rounded-md px-4 py-3 flex flex-col gap-[6px]',
        positionStyles
      )}
    >
      <h4 className="text-sm font-semibold text-tgray-800 mb-[2px]">{title}</h4>
      {data.map((dataItem) => (
        <div className="flex items-center gap-3">
          {dataItem?.icon ? (
            <img className="size-5" src={dataItem?.icon} alt="icon" />
          ) : (
            <div
              style={{ backgroundColor: dataItem?.color }}
              className="rounded-full size-5"
            />
          )}
          <strong className="text-xs font-normal text-tgray-800">
            {dataItem?.label}
          </strong>
        </div>
      ))}
    </div>
  );
};
