// import Demographics from '#assets/svgComp/Demographics';
import ClimateResilience from '#assets/svg/ClimateResilience.svg';
import Demographics from '#assets/svg/Demographics.svg';
import SafetySecurity from '#assets/svg/SafetySecurity.svg';
import { nanoid } from 'nanoid';
// import Transgender from '#assets/svg/Transgender.svg';
// import Governance from '#assets/svg/Governance.svg';
import OpenSpace from '#assets/svg/OpenSpace.svg';
import PublicFacility from '#assets/svg/PublicFacility.svg';

export const modules = [
  {
    id: nanoid(),
    svg: Demographics,
    title: 'Demographics',
  },
  {
    id: nanoid(),
    svg: ClimateResilience,
    title: 'Climate Resilience',
  },
  {
    id: nanoid(),
    svg: SafetySecurity,
    title: "Womens's Safety and Security",
  },
  {
    id: nanoid(),
    svg: OpenSpace,
    title: 'Public Open Space',
  },
  {
    id: nanoid(),
    svg: PublicFacility,
    title: 'Public Facilities',
  },
  // {
  //   id: nanoid(),
  //   svg: Transgender,
  //   title: 'Gender and Social Inclusion',
  // },
  // {
  //   id: nanoid(),
  //   svg: Governance,
  //   title: 'Governance and Decision Making',
  // },
];
