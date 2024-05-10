import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const wardsPopData = [
  {
    name: 'ward 1',
    male: 200,
    female: 300,
    total: 500,
  },
  {
    name: 'ward 2',
    male: 200,
    female: 200,
    total: 400,
  },
  {
    name: 'ward 3',
    male: 300,
    female: 300,
    total: 600,
  },
  {
    name: 'ward 4',
    male: 200,
    female: 300,
    total: 500,
  },
];

// const disabilityPopData = [
//   {
//     name: 'Total Population with Disability',
//     totalCount: 800,
//   },
//   {
//     name: 'Male Population with Disability',
//     menCount: 300,
//   },
//   {
//     name: 'Female Population with Disability',
//     womenCount: 500,
//   },
// ];

// PATTERN TO USE COMPONENT
{
  /* <CustomBarChart
data={wardsPopData}
keys={['male', 'female', 'total']}
colors={['#8884d8', '#82ca9d', '#ffc658']}
/> */
}

{
  /* <CustomBarChart
data={disabilityPopData}
keys={['totalCount', 'menCount', 'womenCount']}
colors={['#8884d8', '#82ca9d', '#ffc658']}
/> */
}

const wardKeys = ['male', 'female', 'total'];
const wardColors = ['#8884d8', '#82ca9d', '#ffc658'];

// const disabilityKeys = ['totalCount', 'menCount', 'womenCount'];
// const disabilityColors = ['#8884d8', '#82ca9d', '#ffc658'];

const CustomBarChart = () => {
  return (
    <div className="flex flex-col w-full py-[18px] px-6">
      <h3 className="text-sm font-bold text-tgray-600">
        Population Distribution by Disability
      </h3>
      <div className="flex items-center justify-center">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={wardsPopData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            {wardKeys.map((key, index) => (
              <Bar key={key} dataKey={key} fill={wardColors[index]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
        {wardsPopData.map((value, index) => (
          <div className="flex items-center gap-1" key={value.name}>
            <div
              style={{
                backgroundColor: wardColors[index],
              }}
              className={'size-4 rounded-xl'}
            />
            <strong className="text-xs font-medium text-tgray-600">
              {value.name}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomBarChart;
