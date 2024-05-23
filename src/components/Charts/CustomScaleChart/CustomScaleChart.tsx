import Info from '#assets/svg/Info.svg';
import { Scale } from './Scale';

const scaleData = [
  {
    title: 'Safety Level During the Day for Women',
    percent: 60,
  },
  {
    title: 'Safety Level During the Day for Men',
    percent: 60,
  },
];
const legendLabels = ['Safe', 'Partially Safe', 'Not Safe'];
const dataColors = ['#24AB1E', '#DDD51B', '#D23433'];
export const CustomScaleChart = () => {
  return (
    <div className="relative flex flex-col w-full py-[18px] px-6 gap-[15px]">
      <h3 className="text-sm font-bold text-tgray-600">Safety Perception</h3>
      <div className="flex flex-col w-full gap-8 pb-8">
        {scaleData.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-tgray-600">
              {item.title}
            </h4>
            <Scale percent={item.percent} />
          </div>
        ))}
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
      <div className="flex items-center gap-3">
        <img className="self-start" src={Info} alt="info" />
        <p className="text-black">
          Others includes castes such as Teli, Magar, Tamang, Tharu, and Yadav
        </p>
      </div>
    </div>
  );
};
