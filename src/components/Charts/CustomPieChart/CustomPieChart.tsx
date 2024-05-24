import { Cell, Pie, PieChart } from 'recharts';

type CustomizedLabelProps = {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  value: number;
};

type DataType = {
  name: string;
  value: number;
  color: string;
};

type PieChartProps = {
  title: string;
  data: DataType[];
};

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  value,
}: CustomizedLabelProps) => {
  const labelX = cx + (outerRadius + 30) * Math.cos(-midAngle * RADIAN);
  const labelY = cy + (outerRadius + 30) * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={labelX}
      y={labelY}
      fill="#101828"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-sm"
    >
      {`${value}%`}
    </text>
  );
};

export const CustomPieChart = ({ title, data }: PieChartProps) => {
  return (
    <div className="flex flex-col w-full py-[18px] px-6">
      <h3 className="text-sm font-bold text-tgray-600">{title}</h3>
      <div className="flex items-center justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            label={renderCustomizedLabel}
            labelLine={{
              stroke: '#101828',
              strokeWidth: 1,
            }}
            outerRadius={100}
            fill="#54D2BB"
            dataKey="value"
          >
            {data.map((pieValue, index) => (
              <Cell key={`cell-${index}`} fill={pieValue.color} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex items-center justify-center gap-10">
        {data.map((pieValue) => (
          <div className="flex items-center gap-1" key={pieValue.name}>
            <div
              style={{
                backgroundColor: pieValue.color,
              }}
              className={'size-4 rounded-xl'}
            />
            <strong className="text-xs font-medium text-tgray-600">
              {pieValue.name}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
};
