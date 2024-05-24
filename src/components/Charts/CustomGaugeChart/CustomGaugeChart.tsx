import { Gauge } from './Gauge';

type GaugeChartProps = {
  question: string;
  value: number;
};

const bandConstructorData = [
  { start: 0, end: 36, color: '#57BF20', label: 'Low' },
  { start: 36, end: 72, color: '#B2CB1B' },
  { start: 72, end: 108, color: '#DDD51B', label: 'Medium' },
  { start: 108, end: 144, color: '#D78A26' },
  { start: 144, end: 180, color: '#D23433', label: 'High' },
];

// VALUES TO CONSTRUCT SEMICIRCULAR GAUGE
const minimumAngle = 0;
const maximumAngle = 180;

export const CustomGaugeChart = ({ question, value }: GaugeChartProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <p className="text-base font-semibold text-tgray-800">{question}</p>
      <Gauge
        value={value}
        min={minimumAngle}
        max={maximumAngle}
        bands={bandConstructorData}
      />
    </div>
  );
};
