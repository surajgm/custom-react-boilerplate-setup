import { CustomTooltip } from '#components/CustomTooltip';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { LayoutType } from 'recharts/types/util/types';

type DataType =
  | {
      name: string;
      male: number;
      female: number;
      total: number;
    }
  | (
      | {
          name: string;
          totalCount: number;
          menCount?: undefined;
          womenCount?: undefined;
        }
      | {
          name: string;
          menCount: number;
          totalCount?: undefined;
          womenCount?: undefined;
        }
      | {
          name: string;
          womenCount: number;
          totalCount?: undefined;
          menCount?: undefined;
        }
    )
  | {
      name: string;
      count: number;
    };

type CustomTickStyleProps = {
  fontWeight?: number;
  fontSize?: string;
  color?: string;
};

type BarChartProps = {
  title: string;
  width?: string;
  height?: number;
  layout?: LayoutType | undefined;
  data: DataType[];
  dataKeys?: string[];
  dataColors: string[];
  legendLabels?: string[];
  xAxisType?: 'number' | 'category' | undefined;
  yAxisType?: 'number' | 'category' | undefined;
  xAxisDataKey?: string;
  yAxisDataKey?: string;
  xAxisTick?: boolean | CustomTickStyleProps;
  yAxisTick?: boolean | CustomTickStyleProps;
};

const defaultTickStyle = {
  fontWeight: 600,
  fontSize: '12px',
  color: '#1D2939',
  // display: 'none',
};

// DEFAULT PROPS VALUE ADJUSTED TO DISPLAY VERTICALLY
export const CustomBarChart = ({
  title,
  width = '100%',
  height = 400,
  layout = 'vertical',
  data,
  dataKeys = [],
  dataColors = [],
  legendLabels,
  xAxisType = 'number',
  yAxisType = 'category',
  xAxisDataKey = '',
  yAxisDataKey = 'name',
  xAxisTick = defaultTickStyle,
  yAxisTick = false,
}: BarChartProps) => {
  return (
    <div className="relative flex flex-col w-full py-[18px] px-6 gap-[15px]">
      <h3 className="text-sm font-bold text-tgray-600">{title}</h3>
      <div className="flex items-center justify-center w-full">
        <ResponsiveContainer width={width} height={height}>
          <BarChart layout={layout} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisDataKey} type={xAxisType} tick={xAxisTick} />
            <YAxis
              width={yAxisTick ? 60 : 1}
              dataKey={yAxisDataKey}
              type={yAxisType}
              tick={yAxisTick && defaultTickStyle}
            />
            <Tooltip content={CustomTooltip} />
            {dataKeys.length === 1 ? (
              <Bar dataKey={dataKeys[0]} fill={dataColors[0]} />
            ) : (
              <>
                {dataKeys.map((key, index) => (
                  <Bar key={key} dataKey={key} fill={dataColors[index]} />
                ))}
              </>
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* TOOLTIP */}
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
