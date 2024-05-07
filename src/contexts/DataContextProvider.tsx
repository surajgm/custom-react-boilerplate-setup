import React, { useState } from 'react';
import { DataContext } from './context';
import { SLICES } from '#constants/constants';

type ProviderProps = {
  children: React.ReactNode;
};

export const DataContextProvider = ({ children }: ProviderProps) => {
  const [slice, setSlice] = useState<SLICES | string>(SLICES.HOME);

  const dataContextValues = {
    slice,
    setSlice,
  };

  return (
    <DataContext.Provider value={dataContextValues}>
      {children}
    </DataContext.Provider>
  );
};
