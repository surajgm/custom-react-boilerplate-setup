import { Button } from '#components/Button';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { nanoid } from 'nanoid';
import ArrrowDown from '#assets/svg/ArrowDown.svg';

const dropDownValues = [
  {
    id: nanoid(),
    label: 'Population Distribution by Gender',
  },
  {
    id: nanoid(),
    label: 'Population Distribution by Ward ',
  },
  {
    id: nanoid(),
    label: 'Ethnicity',
  },
  {
    id: nanoid(),
    label: 'Disability',
  },
  {
    id: nanoid(),
    label: 'Family Head Household Distribution by Age',
  },
];
export const Dropdown = () => {
  return (
    <Menu>
      <MenuButton className="flex justify-between items-center gap-2 rounded-lg border border-tgray-300 py-[10px] px-4 text-tgray-700 text-sm font-semibold">
        Select Category
        <img src={ArrrowDown} alt="Arrow down" />
      </MenuButton>
      <Transition
        enter="transition ease-out duration-75"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom start"
          className="mt-1 border rounded-lg border-tgray-300"
        >
          {dropDownValues.map(({ id, label }) => (
            <MenuItem key={id}>
              <Button
                variant="dropDown"
                size="dropDown"
                className="justify-start bg-white py-[10px] border border-white hover:border-primary-900 w-full text-left"
              >
                {label}
              </Button>
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};
