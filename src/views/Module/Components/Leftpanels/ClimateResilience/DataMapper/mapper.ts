import Rainfall from '#assets/svg/Rainfall.svg';
import TemperatureMaximum from '#assets/svg/TemperatureMaximum.svg';
import TemperatureMinimum from '#assets/svg/TemperatureMinimum.svg';

export const weatherData = [
  {
    label: 'Minimum',
    value: 19,
    svg: TemperatureMinimum,
    svgStyle: 'w-[20px] h-[40px]',
  },
  {
    label: 'Maximum',
    value: 25,
    svg: TemperatureMaximum,
    svgStyle: 'w-[20px] h-[40px]',
  },
  {
    label: 'Annual Rainfall',
    value: 3956.5,
    svg: Rainfall,
    svgStyle: 'w-[30px] h-[40px]',
  },
];

export const rainfallLineData = [
  {
    name: 'Jan',
    min: 9,
    avg: 16,
    max: 24,
  },
  {
    name: 'Feb',
    min: 12,
    avg: 19,
    max: 25,
  },
  {
    name: 'Mar',
    min: 13,
    avg: 20,
    max: 26,
  },
  {
    name: 'Apr',
    min: 14,
    avg: 21,
    max: 27,
  },
  {
    name: 'May',
    min: 15,
    avg: 22,
    max: 28,
  },
  {
    name: 'Jun',
    min: 19,
    avg: 28,
    max: 33,
  },
  {
    name: 'Jul',
    min: 18,
    avg: 26,
    max: 33,
  },
  {
    name: 'Aug',
    min: 18,
    avg: 26,
    max: 37,
  },
  {
    name: 'Sep',
    min: 17,
    avg: 24,
    max: 30,
  },
  {
    name: 'Oct',
    min: 15,
    avg: 25,
    max: 29,
  },
  {
    name: 'Nov',
    min: 13,
    avg: 23,
    max: 28,
  },
  {
    name: 'Dec',
    min: 12,
    avg: 21,
    max: 26,
  },
];
export const rainLineKeys = ['min', 'avg', 'max'];
export const rainLineColors = ['#46C8FF', '#FEA157', '#2AF5AC'];
export const rainLineLegends = ['Minimum', 'Average', 'Maximum'];

export const temperatureLineData = [
  {
    name: 'Jan',
    min: 9,
    avg: 16,
    max: 24,
  },
  {
    name: 'Feb',
    min: 12,
    avg: 19,
    max: 25,
  },
  {
    name: 'Mar',
    min: 13,
    avg: 20,
    max: 26,
  },
  {
    name: 'Apr',
    min: 14,
    avg: 21,
    max: 27,
  },
  {
    name: 'May',
    min: 15,
    avg: 22,
    max: 28,
  },
  {
    name: 'Jun',
    min: 19,
    avg: 28,
    max: 33,
  },
  {
    name: 'Jul',
    min: 18,
    avg: 26,
    max: 33,
  },
  {
    name: 'Aug',
    min: 18,
    avg: 26,
    max: 37,
  },
  {
    name: 'Sep',
    min: 17,
    avg: 24,
    max: 30,
  },
  {
    name: 'Oct',
    min: 15,
    avg: 25,
    max: 29,
  },
  {
    name: 'Nov',
    min: 13,
    avg: 23,
    max: 28,
  },
  {
    name: 'Dec',
    min: 12,
    avg: 21,
    max: 26,
  },
];
export const temperatureLineKeys = ['min', 'avg', 'max'];
export const temperatureLineColors = ['#46C8FF', '#FEA157', '#2AF5AC'];
export const temperatureLineLegends = ['Minimum', 'Average', 'Maximum'];
