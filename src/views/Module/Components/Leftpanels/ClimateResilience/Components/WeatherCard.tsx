import clsx from 'clsx';

type WeatherProps = {
  label: string;
  value: string;
  svg: string;
  svgStyle: string;
};

export const WeatherCard = ({ label, value, svg, svgStyle }: WeatherProps) => {
  return (
    <article className="flex items-center justify-center gap-3 py-4 px-[14px] bg-primary-200 rounded-xl">
      <img className={clsx(svgStyle)} src={svg} alt={label} />
      <div className="flex flex-col">
        <strong className="text-lg font-semibold text-tgray-900">
          {value}
        </strong>
        <span className="text-sm font-normal text-tgray-900">{label}</span>
      </div>
    </article>
  );
};
