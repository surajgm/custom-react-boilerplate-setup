import DownPointer from '#assets/svg/LegendAndFilter/DownPointer.svg?react';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react';
import clsx from 'clsx';
import { useState } from 'react';

type DataType = {
  label: string;
  icon: (fill: string) => React.ReactElement;
};

export type DisclosureProps = {
  title: string;
  data: DataType[];
};

export const DisclosureComponent = ({ title, data }: DisclosureProps) => {
  const [legendValue, setLegendValue] = useState('');
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className="flex items-center justify-between py-2">
            <strong className="text-base font-medium text-tgray-800">
              {title}
            </strong>
            <DownPointer
              style={{
                transition: 'transform ease 350ms',
              }}
              className={clsx('size-3', open && 'rotate-180')}
            />
          </DisclosureButton>
          <Transition
            enter="duration-200 ease-out"
            enterFrom="opacity-0 -translate-y-6"
            enterTo="opacity-100 translate-y-0"
            leave="duration-300 ease-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-6"
          >
            <DisclosurePanel className="text-gray-500">
              <ul className="flex flex-col gap-2">
                {data.map(({ label, icon }) => (
                  <li key={label}>
                    <button
                      className="flex items-center gap-3"
                      onClick={() => setLegendValue(label)}
                    >
                      {icon('red')}
                      <span
                        className={clsx(
                          'text-xs font-semibold',
                          legendValue === label
                            ? 'text-primary-800'
                            : 'text-tgray-800'
                        )}
                      >
                        {label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
