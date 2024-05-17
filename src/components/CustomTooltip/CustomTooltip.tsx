import { TooltipProps } from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';

export const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col gap-1 px-3 py-3 text-xs font-semibold capitalize border rounded-lg bg-tgray-25 text-tgray-900 border-tgray-200">
        <p className="text-tgray-700">{label}</p>
        {payload.map((entry, index: number) => (
          <p
            style={{ color: entry.color }}
            key={index}
          >{`${entry.name}: ${entry.value}`}</p>
        ))}
      </div>
    );
  }
  return null;
};
