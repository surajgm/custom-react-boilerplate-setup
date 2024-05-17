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

const populationData = [
  {
    name: '<14',
    male: 1800,
    female: 2400,
  },
  {
    name: '15-19',
    male: 1500,
    female: 2600,
  },
  {
    name: '20-29',
    male: 1200,
    female: 2100,
  },
  {
    name: '30-39',
    male: 1500,
    female: 2600,
  },
  {
    name: '40-49',
    male: 3200,
    female: 2200,
  },
  {
    name: '50-59',
    male: 3500,
    female: 1000,
  },
  {
    name: '60-69',
    male: 2000,
    female: 700,
  },
  {
    name: '>70',
    male: 500,
    female: 400,
  },
];

export const CustomDualBarChart = () => {
  return (
    <div className="relative flex flex-col w-full py-[18px] px-6 gap-[15px]">
      <h3 className="text-sm font-bold text-tgray-600">
        Family Head Household Distribution by Age
      </h3>
      <div className="flex w-full">
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart layout="vertical" data={populationData}>
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
            <BarChart layout="vertical" data={populationData}>
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
