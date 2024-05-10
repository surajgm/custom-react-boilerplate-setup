export const getPercent = (value: number, total: number): number => {
  return Math.ceil((value / total) * 100);
};
