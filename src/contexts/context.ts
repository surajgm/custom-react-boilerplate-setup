import { SLICES } from '#constants/constants';
import React from 'react';

type DataContextType = {
  slice: SLICES;
  setSlice: React.Dispatch<React.SetStateAction<SLICES | string>>;
};

type MapContextType = {
  map: string;
};

const initDataContext: DataContextType = {
  slice: SLICES.HOME,
  setSlice: () => undefined,
};

const initMapContext: MapContextType = {
  map: '',
};

export const DataContext = React.createContext(initDataContext);
export const MapContext = React.createContext(initMapContext);
