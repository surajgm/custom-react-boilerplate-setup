import Participant from '#assets/svg/LegendAndFilter/Participant.svg';
import SpaceOpen from '#assets/svg/LegendAndFilter/SpaceOpen.svg';
import StreetLight from '#assets/svg/LegendAndFilter/StreetLight.svg';

import { SLICES } from '#constants/constants';

export const legendData: Record<
  SLICES,
  {
    title: string;
    data: { label: string; color?: string; icon?: string }[];
  }
> = {
  [SLICES.HOME]: {
    title: '',
    data: [],
  },
  [SLICES.MODULES]: {
    title: '',
    data: [],
  },
  [SLICES.DEMOGRAPHICS]: {
    title: 'Demography',
    data: [
      {
        label: 'LessThan 6000',
        color: '#D7FEF7',
      },
      {
        label: '6001-8000',
        color: '#8FD9BD',
      },
      {
        label: '8001-10000',
        color: '#62B592',
      },
      {
        label: '10001-12000',
        color: '#37916D',
      },
      {
        label: 'More than 12000',
        color: '#00734C',
      },
    ],
  },
  [SLICES.CLIMATERESILIENCE]: {
    title: 'Climate Resilience',
    data: [
      {
        label: 'Open Space',
        icon: SpaceOpen,
      },
      {
        label: 'Participant',
        icon: Participant,
      },
      {
        label: 'Street Light',
        icon: StreetLight,
      },
    ],
  },
  [SLICES.WOMENSSAFETYANDSECURITY]: {
    title: '',
    data: [],
  },
  [SLICES.PUBLICOPENSPACE]: {
    title: '',
    data: [],
  },
  [SLICES.PUBLICFACILITIES]: {
    title: '',
    data: [],
  },
};
