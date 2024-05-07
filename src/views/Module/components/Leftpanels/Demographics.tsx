import Info from '#assets/svg/Info.svg';
import { Button } from '#components/Button';
import { Dropdown } from '#components/Dropdown';
import Refresh from '#assets/svg/Refresh.svg';
import Download from '#assets/svg/Download.svg';

export const Demographics = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-4xl font-semibold">Demographics</h2>
      <p className="text-base text-tgray-700">
        In terms of gender demographics, Chandragiri likely exhibits a
        relatively balanced population distribution between males and females,
        with slight variations depending on factors such as age groups and
        economic activities. However, despite this overall balance, gender
        disparities may exist in areas such as education, employment, and
        political representation.
      </p>
      <div>
        <img className="inline" src={Info} alt="Info" />
        <span className="pl-1 text-sm font-bold text-tgray-800">Source : </span>
        <span className="text-sm font-medium text-tgray-800">
          National Population and Housing Census 2021
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Dropdown />
        <Button icon={Refresh} className="!p-2" />
        <Button
          icon={Download}
          className="!py-2 px-[14px] ml-[12px] text-white"
        >
          Download
        </Button>
      </div>
    </div>
  );
};