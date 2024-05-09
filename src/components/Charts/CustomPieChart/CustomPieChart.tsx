import { Cell, Pie, PieChart } from 'recharts';

type CustomizedLabelProps = {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  value: number;
};

const pieData = [
  { name: 'Functional', value: 50, color: '#0E9B46' },
  { name: 'Partial Functioning', value: 30, color: '#2F796C' },
  { name: 'Non Functional', value: 20, color: '#54D2BB' },
];

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

export const CustomPieChart = () => {
  return (
    <div className="flex flex-col w-full py-[18px] px-6">
      <h3 className="text-sm font-bold text-tgray-600">Pie chart title</h3>
      <div className="flex items-center justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
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
            {pieData.map((pieValue, index) => (
              <Cell key={`cell-${index}`} fill={pieValue.color} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex items-center justify-center gap-10">
        {pieData.map((pieValue) => (
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
