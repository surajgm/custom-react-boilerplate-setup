type BarProps = {
  color?: string;
  value: number;
};

export const Bar = ({ color = '#389E8C', value = 0 }: BarProps) => {
  return (
    <div className="w-full h-5 bg-white border border-tgray-200 rounded-r-2xl">
      <div
        style={{
          width: `${value}%`,
          backgroundColor: color,
        }}
        className="h-full rounded-r-2xl"
      />
    </div>
  );
};
