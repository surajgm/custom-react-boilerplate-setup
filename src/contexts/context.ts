import React from 'react';

type DataContextType = {
  showModules: boolean;
  setShowModules: React.Dispatch<React.SetStateAction<boolean>>;
};

type MapContextType = {
  map: string;
};

const initDataContext: DataContextType = {
  showModules: false,
  setShowModules: () => undefined,
};

const initMapContext: MapContextType = {
  map: '',
};

export const DataContext = React.createContext(initDataContext);
export const MapContext = React.createContext(initMapContext);
