import ArrrowDown from '#assets/svg/ArrowDown.svg';
import { Button } from '#components/Button';
import { ClimateResilienceChartKeys } from '#views/Module/Components/Leftpanels/ClimateResilience/DataMapper/ChartMapper';
import { DemoGraphicChartKeys } from '#views/Module/Components/Leftpanels/Demographics/DataMapper/ChartMapper';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import clsx from 'clsx';

export type ChartKeys =
  | 'Population Distribution by Sex'
  | 'Population Distribution by Ward'
  | 'Population Distribution by literacy rate'
  | 'Population Distribution by Ethnicity'
  | 'Population Distribution by Disability'
  | 'Family Head Household Distribution by Age';

type DropdownProps = {
  chart: DemoGraphicChartKeys | ClimateResilienceChartKeys | 'All';
  setChart: React.Dispatch<
    React.SetStateAction<
      DemoGraphicChartKeys | ClimateResilienceChartKeys | 'All'
    >
  >;
  data: DemoGraphicChartKeys[] | ClimateResilienceChartKeys[];
};

export const Dropdown = ({ chart, setChart, data }: DropdownProps) => {
  return (
    <Menu>
      <MenuButton className="flex justify-between items-center gap-2 rounded-lg bg-white border border-tgray-300 py-[10px] px-4 text-tgray-700 text-sm font-semibold">
        Select Category
        <img className="size-[12px]" src={ArrrowDown} alt="Arrow down" />
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
          className="w-[215px] p-1 mt-1 bg-white border rounded-lg border-tgray-300"
        >
          {data.map((dataItem) => (
            <MenuItem key={dataItem}>
              {({ focus }) => (
                <Button
                  className={clsx(
                    'w-full text-left !justify-start hover:!opacity-100 shadow-none btn-dropdown-option',
                    focus && 'text-tprimary-500',
                    chart === dataItem && 'text-tprimary-500'
                  )}
                  onClick={() => setChart(dataItem)}
                >
                  {dataItem}
                </Button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};
