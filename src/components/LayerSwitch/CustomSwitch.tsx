import { Switch } from '@headlessui/react';
import { useState } from 'react';

export const CustomSwitch = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="flex items-center group relative h-5 w-9 cursor-pointer rounded-full bg-primary-200 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white border border-primary-400"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none size-[16px] translate-x-[-2px] rounded-full bg-white ring-0 shadow-2xl transition duration-200 ease-in-out group-data-[checked]:translate-x-3"
      />
    </Switch>
  );
};
