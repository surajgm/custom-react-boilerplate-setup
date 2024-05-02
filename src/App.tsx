import { useContext } from 'react';
import clsx from 'clsx';
import { Home } from '#views/Home/Home';
import { Modules } from '#views/Modules';
import { DataContext } from './contexts';

function App() {
  const { showModules } = useContext(DataContext);
  console.log('showModules', showModules);

  return (
    <div className={clsx('w-full min-h-screen h-full')}>
      {showModules ? <Modules /> : <Home />}
    </div>
  );
}

export default App;
