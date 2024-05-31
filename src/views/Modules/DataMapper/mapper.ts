// import Demographics from '#assets/svgComp/Demographics';
import ClimateResilience from '#assets/svg/ClimateResilience.svg';
import Demographics from '#assets/svg/Demographics.svg';
import SafetySecurity from '#assets/svg/SafetySecurity.svg';
import { nanoid } from 'nanoid';
// import Transgender from '#assets/svg/Transgender.svg';
// import Governance from '#assets/svg/Governance.svg';
import OpenSpace from '#assets/svg/OpenSpace.svg';
import PublicFacility from '#assets/svg/PublicFacility.svg';
import { SLICES } from '#constants/constants';

export const modules = [
  {
    id: nanoid(),
    svg: Demographics,
    title: SLICES.DEMOGRAPHICS,
  },
  {
    id: nanoid(),
    svg: ClimateResilience,
    title: SLICES.CLIMATERESILIENCE,
  },
  {
    id: nanoid(),
    svg: SafetySecurity,
    title: SLICES.WOMENSSAFETYANDSECURITY,
  },
  {
    id: nanoid(),
    svg: OpenSpace,
    title: SLICES.PUBLICOPENSPACE,
  },
  {
    id: nanoid(),
    svg: PublicFacility,
    title: SLICES.PUBLICFACILITIES,
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
