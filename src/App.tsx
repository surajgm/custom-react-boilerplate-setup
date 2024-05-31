import { Home } from '#views/Home/Home';
import { Module } from '#views/Module';
import { Modules } from '#views/Modules';
import clsx from 'clsx';
import { useContext } from 'react';
import { SLICES } from './constants';
import { DataContext } from './contexts';

function App() {
  const { slice } = useContext(DataContext);
  console.log('slice', slice);

  const sliceHandler = (sliceValue: SLICES | string) => {
    switch (sliceValue) {
      case SLICES.HOME:
        return <Home />;
      case SLICES.MODULES:
        return <Modules />;
      default:
        return <Module />;
    }
  };
  return (
    <div className={clsx('w-full min-h-screen h-full')}>
      {sliceHandler(slice)}
    </div>
  );
}

export default App;
