import CheckCircle from '#assets/svg/CheckCircle.svg';
import clsx from 'clsx';

type BubbleProps = {
  itemCount: number;
  totalCount: number;
  label: string;
  bubbles: string[];
  setBubbles: React.Dispatch<React.SetStateAction<string[]>>;
};

const calculateBubbleWidthHeight = (itemCount: number) => {
  let height;
  switch (true) {
    case itemCount <= 25: {
      height = itemCount + 50;
      return height;
    }
    case itemCount > 25 && itemCount <= 50: {
      height = itemCount + 60;
      return height;
    }
    case itemCount > 50 && itemCount <= 75: {
      height = itemCount + 70;
      return height;
    }
    case itemCount > 75 && itemCount <= 100: {
      height = itemCount + 80;
      return height;
    }
    case itemCount > 100 && itemCount <= 150: {
      height = itemCount + 90;
      return height;
    }
    case itemCount > 150 && itemCount <= 250: {
      height = itemCount + 80;
      return height;
    }
    default:
      return itemCount + 50;
  }
};

const calculateFontSize = (itemCount: number, totalCount: number) => {
  let fontsize;
  switch (true) {
    case itemCount <= 10: {
      fontsize = (itemCount / totalCount) * 20 + 8;
      return fontsize;
    }
    case itemCount > 10 && itemCount <= 50: {
      fontsize = (itemCount / totalCount) * 20 + 10;
      return fontsize;
    }
    case itemCount > 50 && itemCount <= 75: {
      fontsize = (itemCount / totalCount) * 20 + 14;
      return fontsize;
    }
    case itemCount > 75 && itemCount <= 100: {
      fontsize = (itemCount / totalCount) * 20 + 18;
      return fontsize;
    }
    case itemCount > 100 && itemCount <= 150: {
      fontsize = (itemCount / totalCount) * 20 + 22;
      return fontsize;
    }
    default:
      return (itemCount / totalCount) * 50 + 22;
  }
};

export const Bubble = ({
  itemCount,
  totalCount,
  label,
  bubbles,
  setBubbles,
}: BubbleProps) => {
  const bubbleClickHandler = () => {
    if (!bubbles.includes(label)) {
      setBubbles((prevBubbles) => [...prevBubbles, label]);
    } else {
      setBubbles((prevBubbles) =>
        prevBubbles.filter((bubble) => bubble !== label)
      );
    }
  };

  return (
    <button
      className={clsx(
        'relative rounded-full border-[5px]  bg-primary-200 text-primary-900 hover:shadow-md hover:opacity-90',
        bubbles.includes(label) ? 'border-primary-600' : 'border-primary-200'
      )}
      style={{
        height: `${calculateBubbleWidthHeight(itemCount)}px`,
        width: `${calculateBubbleWidthHeight(itemCount)}px`,
      }}
      onClick={bubbleClickHandler}
    >
      <div className="flex flex-col items-center justify-center">
        <strong
          className="font-normal"
          style={{ fontSize: `${calculateFontSize(itemCount, totalCount)}px` }}
        >
          {itemCount}
        </strong>
        <strong
          className="font-bold"
          style={{ fontSize: `${calculateFontSize(itemCount, totalCount)}px` }}
        >
          {label}
        </strong>
      </div>
      {bubbles.includes(label) && (
        <img
          style={{
            height: `${itemCount / totalCount + 25}%`,
          }}
          className="absolute top-0 right-0"
          src={CheckCircle}
          alt="Check circle"
        />
      )}
    </button>
  );
};
