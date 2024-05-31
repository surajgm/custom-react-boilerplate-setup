import clsx from 'clsx';
import { DisclosureComponent, DisclosureProps } from './Disclosure';

type FilterProps = {
  title: string;
  data: DisclosureProps[];
  positionStyles: string;
};

export const Filter = ({ title, data, positionStyles }: FilterProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-2 bg-tgray-25 rounded-md py-3 px-4 min-w-60',
        positionStyles
      )}
    >
      <h4 className="text-sm font-semibold text-tgray-800">{title}</h4>
      <div className="flex flex-col">
        {data.map(({ title, data }) => (
          <DisclosureComponent title={title} data={data} />
        ))}
      </div>
    </div>
  );
};
