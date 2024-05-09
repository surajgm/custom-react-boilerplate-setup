import { ResponsiveContainer, Treemap } from 'recharts';

type TreemapContentProps = {
  x?: number | undefined;
  y?: number | undefined;
  width?: number | undefined;
  height?: number | undefined;
  root?: {
    children: [];
  };
  index?: number | undefined;
  colors: string[];
  name?: string | undefined;
  size?: number | undefined;
};

const treeMapData = [
  {
    name: 'Highway',
    size: 25,
    color: '#307D6F',
  },
  {
    name: 'Road',
    size: 25,
    color: '#389E8C',
  },
  {
    name: 'Alley',
    size: 10,
    color: '#56D9C1',
  },
  {
    name: 'Inside Open Public Space',
    size: 30,
    color: '#77EDD8',
  },
  {
    name: 'Other',
    size: 10,
    color: '#92F6DE',
  },
];
const TreemapContent = ({
  root,
  x,
  y,
  width,
  height,
  index,
  colors,
  name,
  size,
}: TreemapContentProps) => {
  const currentX = x || 0;
  const currentY = y || 0;
  const currentWidth = width || 0;
  const currentHeight = height || 0;
  const currentIndex = index || 0;
  const currentRoot = root || { children: [] };
  const currentSize = size || 0;

  return (
    <g>
      <rect
        x={currentX}
        y={currentY}
        width={currentWidth}
        height={currentHeight}
        style={{
          fill: colors[
            Math.floor((currentIndex / currentRoot.children.length) * 6)
          ],
        }}
      />
      <text
        x={currentX + currentWidth / 2}
        y={currentY + currentHeight / 2.2}
        textAnchor="middle"
        fontSize={currentSize < 10 ? 10 : 14}
        fontWeight={200}
      >
        {name}
      </text>
      <text
        x={currentX + currentWidth / 2}
        y={currentY + currentHeight / 2 + 15}
        textAnchor="middle"
        fontSize={currentSize < 10 ? 10 : 14}
        fontWeight={200}
      >
        {size}%
      </text>
    </g>
  );
};

export const CustomTreemapChart = () => {
  return (
    <div className="flex flex-col gap-[15px] w-full py-[18px] px-6">
      <h3 className="text-sm font-bold text-tgray-600">Treemap title</h3>
      <ResponsiveContainer width="100%" height={400}>
        <Treemap
          data={treeMapData}
          dataKey="size"
          aspectRatio={4 / 3}
          stroke="#fff"
          fill={treeMapData.map((treeValue) => treeValue.color)[0]}
          content={
            <TreemapContent
              colors={treeMapData.map((treeValue) => treeValue.color)}
            />
          }
        ></Treemap>
      </ResponsiveContainer>
    </div>
  );
};
