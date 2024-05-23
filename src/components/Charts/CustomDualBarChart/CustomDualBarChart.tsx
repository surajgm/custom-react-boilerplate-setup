import { CustomTooltip } from '#components/CustomTooltip';
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type DataType = {
  name: string;
  male: number;
  female: number;
};

type DualBarProps = {
  title: string;
  data: DataType[];
};

export const CustomDualBarChart = ({ title, data }: DualBarProps) => {
  return (
    <div className="relative flex flex-col w-full py-[18px] px-6 gap-[15px]">
      <h3 className="text-sm font-bold text-tgray-600">{title}</h3>
      <div className="flex w-full">
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart layout="vertical" data={data}>
              <XAxis type="number" reversed hide />
              <YAxis
                dataKey="name"
                type="category"
                style={{ visibility: 'hidden' }}
              />
              <Bar
                dataKey="male"
                fill="#AFB5D9"
                label={{
                  fill: '#1D2939',
                  fontSize: 12,
                  fontWeight: '600',
                }}
              />
              <Tooltip content={CustomTooltip} />
              <Legend
                iconType="circle"
                align="right"
                wrapperStyle={{
                  fontWeight: '600',
                  textTransform: 'capitalize',
                  fontSize: '14px',
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" data={data}>
              <XAxis hide type="number" />
              <YAxis
                dataKey="name"
                type="category"
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1D2939',
                }}
                axisLine={false}
                tickLine={false}
              />
              <Bar
                dataKey="female"
                fill="#FD6F8E"
                label={{
                  fill: '#1D2939',
                  fontSize: 12,
                  fontWeight: '600',
                }}
              />
              <Tooltip content={CustomTooltip} />
              <Legend
                iconType="circle"
                wrapperStyle={{
                  fontWeight: '600',
                  textTransform: 'capitalize',
                  fontSize: '14px',
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
