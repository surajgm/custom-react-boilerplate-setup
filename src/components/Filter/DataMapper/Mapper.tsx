import Murder from '#assets/svg/LegendAndFilter/Murder.svg?react';

export const filterData = {
  title: 'Filter',
  data: [
    {
      title: 'Social Problem',
      data: [
        {
          label: 'Murder',
          icon: (fill: string = '') => <Murder fill={fill} />,
        },
        {
          label: 'Sexual Assault',
          icon: (fill: string = '') => <Murder fill={fill} />,
        },
        {
          label: 'Loud noise',
          icon: (fill: string = '') => <Murder fill={fill} />,
        },
        {
          label: 'Drug Abuse',
          icon: (fill: string = '') => <Murder fill={fill} />,
        },
      ],
    },
    {
      title: 'Status of Street Light',
      data: [
        {
          label: 'Functioning',
          icon: (fill: string = '') => <Murder fill={fill} />,
        },
        {
          label: 'Partially Functioning',
          icon: (fill: string = '') => <Murder fill={fill} />,
        },
        {
          label: 'Non Functioning',
          icon: (fill: string = '') => <Murder fill={fill} />,
        },
      ],
    },
    {
      title: 'Security',
      data: [
        {
          label: 'CCTV',
          icon: (fill: string = '') => <Murder fill={fill} />,
        },
        {
          label: 'Anti-Social Behaviour',
          icon: (fill: string = '') => <Murder fill={fill} />,
        },
        {
          label: 'Incident of Harassment',
          icon: (fill: string = '') => <Murder fill={fill} />,
        },
      ],
    },
  ],
};
