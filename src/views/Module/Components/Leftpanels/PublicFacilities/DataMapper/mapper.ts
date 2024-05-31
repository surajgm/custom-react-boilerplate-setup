import BankingAndFinance from '#assets/svg/BankAndFinance.svg';
import Education from '#assets/svg/Education.svg';
import GovernmentV2 from '#assets/svg/GovernmentV2.svg';
import HealthFacility from '#assets/svg/HealthFacility.svg';
import HeritageSite from '#assets/svg/HeritageSite.svg';
import Sanitation from '#assets/svg/Sanitation.svg';
import Transportation from '#assets/svg/Transportation.svg';

export const facilitiesData = [
  {
    value: 1000,
    title: 'Banking and Finance',
    icon: BankingAndFinance,
  },
  {
    value: 750,
    title: 'Education',
    icon: Education,
  },
  {
    value: 1000,
    title: 'Culture/Heritage Site',
    icon: HeritageSite,
  },
  {
    value: 800,
    title: 'Governance',
    icon: GovernmentV2,
  },
  {
    value: 600,
    title: 'Health Facility',
    icon: HealthFacility,
  },
  {
    value: 1000,
    title: 'Sanitation',
    icon: Sanitation,
  },
  {
    value: 1200,
    title: 'Transportation',
    icon: Transportation,
  },
];

export const availabilityFacilityPieData = [
  { name: 'Yes', value: 50, color: '#4662EA' },
  { name: 'No', value: 30, color: '#1A3A6B' },
];

export const operatorBarData = [
  {
    name: 'Private',
    count: 800,
  },
  {
    name: 'Government',
    count: 345,
  },
  {
    name: 'Community',
    count: 700,
  },
  {
    name: 'Other',
    count: 40,
  },
];
export const singleBarKey = ['count'];
export const singleBarColor = ['#41C6AE'];

export const disabilityFriendlyPieData = [
  { name: 'Yes', value: 50, color: '#4662EA' },
  { name: 'No', value: 30, color: '#1A3A6B' },
];
