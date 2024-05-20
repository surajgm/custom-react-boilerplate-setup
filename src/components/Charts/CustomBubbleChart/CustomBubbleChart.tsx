import { useMemo, useState } from 'react';
import { Bubble } from './Bubble';

const bubbleData = [
  {
    problem: 'Murder',
    count: 100,
  },
  {
    problem: 'Sexual Assault',
    count: 20,
  },
  {
    problem: 'Vandalism & Crime',
    count: 225,
  },
  {
    problem: 'Loud Noise',
    count: 100,
  },
  {
    problem: 'Drug Abuse',
    count: 150,
  },
  {
    problem: 'Violence',
    count: 140,
  },
  {
    problem: 'Domestic Violence',
    count: 80,
  },
  {
    problem: 'Poverty',
    count: 190,
  },
  {
    problem: 'Problem with Public Transport',
    count: 105,
  },
  {
    problem: 'Prostitution',
    count: 130,
  },
  {
    problem: 'Illegal Dumping',
    count: 144,
  },
  {
    problem: 'Others',
    count: 155,
  },
];

export const CustomBubbleChart = () => {
  const [selectedBubbles, setSelectedBubbles] = useState<string[]>([]);

  const totalCount = useMemo(() => {
    console.log('memoize');
    return bubbleData.reduce((acc, curr) => acc + curr.count, 0);
  }, [bubbleData]);

  return (
    <div className="flex flex-col gap-[15px] w-full py-[18px] px-6">
      <h3 className="text-sm font-bold text-tgray-600">Bubble chart title</h3>
      <div className="flex flex-wrap justify-between gap-3">
        {bubbleData.map(({ problem, count }) => (
          <Bubble
            key={problem}
            itemCount={count}
            totalCount={totalCount}
            label={problem}
            bubbles={selectedBubbles}
            setBubbles={setSelectedBubbles}
          />
        ))}
      </div>
    </div>
  );
};
