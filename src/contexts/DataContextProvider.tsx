import React, { useState } from 'react';
import { DataContext } from './context';

type ProviderProps = {
  children: React.ReactNode;
};

export const DataContextProvider = ({ children }: ProviderProps) => {
  const [showModules, setShowModules] = useState(false);

  const dataContextValues = {
    showModules,
    setShowModules,
  };

  return (
    <DataContext.Provider value={dataContextValues}>
      {children}
    </DataContext.Provider>
  );
};
