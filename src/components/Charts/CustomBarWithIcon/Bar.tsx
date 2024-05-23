type BarProps = {
  color?: string;
  percent: number;
  icon: string;
};

export const Bar = ({ color = '#4662EA', percent = 0, icon }: BarProps) => {
  return (
    <div className="w-full h-5 bg-white border border-tgray-200 rounded-r-2xl rounded-l-2xl">
      <div
        style={{
          width: `${percent}%`,
          backgroundColor: color,
        }}
        className="relative h-full rounded-r-2xl rounded-l-2xl"
      >
        <div className="absolute border border-tgray-900 right-0 translate-y-[-25%] flex items-center justify-center rounded-full size-9 bg-tprimary-600">
          <img src={icon} alt="Infrastructural problems icons" />
        </div>
      </div>
    </div>
  );
};
