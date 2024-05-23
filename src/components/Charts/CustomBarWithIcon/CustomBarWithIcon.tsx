import BuildingFacilityDestroyed from '#assets/svg/BuildingFacilityDestroyed.svg';
import GenderViolence from '#assets/svg/GenderViolence.svg';
import NaturePeople from '#assets/svg/NaturePeople.svg';
import RoadAffected from '#assets/svg/RoadAffected.svg';
import Traffic from '#assets/svg/Traffic.svg';
import Umbrella from '#assets/svg/Umbrella.svg';
import ViewSidebar from '#assets/svg/ViewSidebar.svg';
import Workspaces from '#assets/svg/Workspaces.svg';
import { Bar } from './Bar';

const iconBarData = [
  {
    label: 'Poor/ no street lighting',
    percent: 60,
    svg: Umbrella,
  },
  {
    label: 'Lack of Gender Inclusive Design',
    percent: 50,
    svg: GenderViolence,
  },
  {
    label: 'Long Grass/ Trees',
    percent: 40,
    svg: NaturePeople,
  },
  {
    label: 'Potholes/ Poor Roads',
    percent: 70,
    svg: RoadAffected,
  },
  {
    label: 'No traffic controls',
    percent: 60,
    svg: Traffic,
  },
  {
    label: 'Sidewalks taken up by illegal/informal vendors',
    percent: 60,
    svg: ViewSidebar,
  },
  {
    label: 'Abandoned building and houses',
    percent: 20,
    svg: BuildingFacilityDestroyed,
  },
  {
    label: 'Others',
    percent: 60,
    svg: Workspaces,
  },
];

export const CustomBarWithIcon = () => {
  return (
    <div className="flex flex-col gap-[15px] w-full py-[18px] px-6">
      <h3 className="text-sm font-bold text-tgray-600">
        Infrastructural Problems
      </h3>
      {iconBarData.map((barValue) => (
        <div className="flex gap-2 text-sm text-tgray-600" key={barValue.label}>
          <span className="self-start text-lg font-semibold text-tprimary-500">
            {barValue.percent}%
          </span>
          <div className="flex flex-col w-full gap-3">
            <Bar percent={barValue.percent} icon={barValue.svg} />
            <p>{barValue.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
