import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts';
import { CustomTooltip } from '#components/CustomTooltip';

type DataType = {
  name: string;
  min: number;
  avg: number;
  max: number;
};

type LineChartProps = {
  title: string;
  data: DataType[];
  dataKeys: string[];
  dataColors: string[];
  legendLabels: string[];
};

const defaultTickStyle = {
  fontWeight: 600,
  fontSize: '12px',
  color: '#1D2939',
};

const getDot = (
  props: {
    payload: { name: string };
    cx: string | number | undefined;
    cy: string | number | undefined;
  },
  color: string
): React.ReactElement<SVGElement> => {
  if (props.payload.name === 'Jul') {
    return (
      <circle
        cx={props.cx}
        cy={props.cy}
        r={6}
        fill="#1A3A6B"
        stroke={color}
        strokeWidth={4}
      />
    );
  } else {
    // Return an empty SVG element if the condition is not met
    return <svg />;
  }
};

export const CustomLineChart = ({
  title,
  data,
  dataKeys,
  dataColors,
  legendLabels,
}: LineChartProps) => {
  return (
    <div className="relative flex flex-col w-full py-[18px] px-6 gap-[15px]">
      <h3 className="text-sm font-bold text-tgray-600">{title}</h3>
      <div className="flex items-center justify-center w-full">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="1" vertical={false} />
          <XAxis
            tickLine={false}
            axisLine={false}
            dataKey="name"
            tick={defaultTickStyle}
          />
          <YAxis tickLine={false} axisLine={false} tick={defaultTickStyle} />
          <Tooltip content={CustomTooltip} />
          <ReferenceLine x="Jul" stroke="#1A3A6B" strokeWidth={2} />
          {dataKeys.map((key, idx) => (
            <Line
              key={key}
              dot={(props) => getDot(props, dataColors[idx])}
              type="monotone"
              dataKey={key}
              stroke={dataColors[idx]}
              strokeWidth={4}
            />
          ))}
        </LineChart>
      </div>
      {legendLabels && legendLabels.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
          {legendLabels.map((value, index) => (
            <div className="flex items-center gap-1" key={value}>
              <div
                style={{
                  backgroundColor: dataColors[index],
                }}
                className={'size-4 rounded-xl'}
              />
              <strong className="text-xs font-medium capitalize text-tgray-600">
                {value}
              </strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
