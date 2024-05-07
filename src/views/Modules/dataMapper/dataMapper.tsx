// import Demographics from '#assets/svgComp/Demographics';
import { nanoid } from 'nanoid';
import Demographics from '#assets/svg/Demographics.svg';
import Transgender from '#assets/svg/Transgender.svg';
import ClimateResilience from '#assets/svg/ClimateResilience.svg';
import SafetySecurity from '#assets/svg/SafetySecurity.svg';
import Governance from '#assets/svg/Governance.svg';
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
    svg: Transgender,
    title: 'Gender and Social Inclusion',
  },
  {
    id: nanoid(),
    svg: ClimateResilience,
    title: 'Climate Resilience',
  },
  {
    id: nanoid(),
    svg: SafetySecurity,
    title: 'Safety and Security',
  },
  {
    id: nanoid(),
    svg: Governance,
    title: 'Governance and Decision Making',
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
];
