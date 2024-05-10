import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const stackData = {
  title: 'Availability of Sitting Facilities',
  data: [
    {
      color: '#1A3A6B',
      count: 4567,
      label: 'Safety',
    },
    {
      color: '#FEC84B',
      count: 2021,
      label: 'Partially Safe',
    },
    {
      color: '#FF6D6D',
      count: 976,
      label: 'Not Safe',
    },
  ],
};
export const CustomStackChart = () => {
  return (
    <div>
      <h3>{stackData.title}</h3>
      <ResponsiveContainer height={16} width={'100%'}>
        <BarChart
          layout="vertical"
          data={stackData.data}
          height={16}
          stackOffset="expand"
          margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
        >
          <XAxis hide type="number" />
          <YAxis type="category" dataKey="name" stroke="#FFFFFF" hide />
          {stackData.data.map((dt, idx) => (
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
      <div>
        {stackData.data.map((stackValue) => (
          <div key={stackValue.label}>
            <span>{stackValue.count}</span>
            <span>{stackValue.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
