import { getPercent } from '#utils/utils';
import { useMemo } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

type DataType = {
  color: string;
  count: number;
  label: string;
};

type StackProps = {
  title: string;
  data: DataType[];
};
type StackPercent = {
  [key: string]: number;
};

export const CustomStackChart = ({ title, data }: StackProps) => {
  const totalCount = useMemo(() => {
    return data.reduce((acc, curr) => {
      return acc + curr.count;
    }, 0);
  }, []);

  const stackDataWithPercent = data.map((dt) => ({
    ...dt,
    percent: getPercent(dt.count, totalCount),
  }));

  const stackPercent = stackDataWithPercent.reduce<StackPercent>(
    (acc, curr) => {
      acc[curr.label] = curr.percent;
      return acc;
    },
    {}
  );

  return (
    <div className="relative flex flex-col w-full py-[18px] px-6 gap-[15px]">
      <h3 className="text-sm font-bold text-tgray-600">{title}</h3>
      <div className="flex items-center justify-center w-full">
        <ResponsiveContainer height={16} width={'100%'}>
          <BarChart
            layout="vertical"
            data={[stackPercent]}
            height={16}
            stackOffset="expand"
            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
          >
            <XAxis hide type="number" />
            <YAxis hide type="category" stroke="#FFFFFF" />
            {stackDataWithPercent.map((dt, idx) => (
              <Bar
                key={idx}
                dataKey={dt.label}
                fill={dt.color}
                stackId="a"
                radius={8}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex w-full">
        {stackDataWithPercent.map((stackValue) => (
          <div
            style={{
              width: `${stackValue.percent}%`,
            }}
            className="flex flex-col"
            key={stackValue.label}
          >
            <span
              style={{
                color: `${stackValue.color}%`,
              }}
              className="text-lg font-bold"
            >
              {stackValue.percent + '%'}
            </span>
            <span className="text-xs text-tgray-800">{stackValue.count}</span>
            <span className="text-xs text-tgray-800">{stackValue.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
