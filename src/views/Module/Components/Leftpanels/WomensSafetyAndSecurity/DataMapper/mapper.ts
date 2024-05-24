import Alley from '#assets/svg/Alley.svg';
import BuildingFacilityDestroyed from '#assets/svg/BuildingFacilityDestroyed.svg';
import GenderViolence from '#assets/svg/GenderViolence.svg';
import Highway from '#assets/svg/Highway.svg';
import InPublicLight from '#assets/svg/InPublicLight.svg';
import NaturePeople from '#assets/svg/NaturePeople.svg';
import Road from '#assets/svg/Road.svg';
import RoadAffected from '#assets/svg/RoadAffected.svg';
import ThreeDots from '#assets/svg/ThreeDots.svg';
import Traffic from '#assets/svg/Traffic.svg';
import Umbrella from '#assets/svg/Umbrella.svg';
import ViewSidebar from '#assets/svg/ViewSidebar.svg';
import Workspaces from '#assets/svg/Workspaces.svg';

export const scaleData = [
  {
    title: 'Safety Level During the Day for Women',
    percent: 60,
  },
  {
    title: 'Safety Level During the Day for Men',
    percent: 60,
  },
  {
    title: 'Safety Level During the Night for Women',
    percent: 60,
  },
  {
    title: 'Safety Level During the Night for Men',
    percent: 60,
  },
];
export const legendLabels = ['Safe', 'Partially Safe', 'Not Safe'];
export const dataColors = ['#24AB1E', '#DDD51B', '#D23433'];

export const iconBarData = [
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

export const gaugeData = [
  {
    question:
      'To what extent do you feel safe in the land you live or work in?',
    value: 30,
  },
  {
    question:
      'To what extent you feel safe to use public transport for mobility?',
    value: 40,
  },
  {
    question: 'How do you assess the safety for women in this city overall?',
    value: 70,
  },
  {
    question:
      'How do you assess the safety for  लैङ्गिक र यौन अल्पसंख्यकहरू in this city overall?',
    value: 45,
  },
  {
    question:
      'Can you access health and sanitation facilities specially during disaster and emergencies?',
    value: 65,
  },
  {
    question:
      'Are there community facilities in case of emergency lack of water?',
    value: 20,
  },
];

export const streetLightData = [
  {
    type: 'Highway',
    percent: 25,
    icon: Highway,
    styles: 'bg-[#1A3A6B] text-base text-tgray-25 font-medium',
  },
  {
    type: 'Road',
    percent: 25,
    icon: Road,
    styles: 'bg-[#389E8B] text-base text-tgray-25 font-medium',
  },
  {
    type: 'Alley',
    percent: 25,
    icon: Alley,
    styles: 'bg-[#4662EA] text-base text-tgray-25 font-medium',
  },
  {
    type: 'Inside the Open public Space',
    percent: 25,
    icon: InPublicLight,
    styles: 'bg-[#77EDD8] text-[10px] text-tgray-700 font-medium',
  },
  {
    type: 'Others',
    percent: 25,
    icon: ThreeDots,
    styles: 'bg-[#92F6DE] text-base font-medium text-tgray-700',
  },
];

export const bulbHighData = [
  {
    name: 'Solar',
    data: [25],
    color: '#77EDD8',
  },
  {
    name: 'Battery',
    data: [20],
    color: '#4662EA',
  },
  {
    name: 'Electricity',
    data: [30],
    color: '#389E8B',
  },
  {
    name: 'Others',
    data: [25],
    color: '#D78A26',
  },
];

export const pieData = [
  { name: 'Functional', value: 50, color: '#0E9B46' },
  { name: 'Partial Functioning', value: 30, color: '#2F796C' },
  { name: 'Non Functional', value: 20, color: '#54D2BB' },
];

export const pathwayBarData = [
  {
    name: 'Yes',
    count: 3000,
  },
  {
    name: 'No',
    count: 3000,
  },
];
export const pathwayLegends = ['Yes', 'No'];
export const pathwayBarKeys = ['Yes Count', 'No Count'];
export const pathwayBarColors = ['#AFB5D9', '#FD6F8E'];
