import CitiesAlliance from '#assets/png/Citiesalliance.png';
import StarFlag from '#assets/png/FlagWithStars.png';
import UNhabitat from '#assets/png/UNHabitat.png';
import Unops from '#assets/png/Unops.png';
import Info from '#assets/svg/Info.svg';
import { Button } from '#components/Button';
import { SLICES } from '#constants/constants';
import { DataContext } from '#contexts/context';
import clsx from 'clsx';
import { useContext } from 'react';

export const AboutProject = () => {
  const { setSlice } = useContext(DataContext);
  return (
    <main className={clsx('px-[68px] pt-[155px] h-full flex flex-col gap-24')}>
      <article className="max-w-[999px] flex flex-col gap-5 text-tgray-900">
        <div>
          <h2 className="text-4xl font-semibold">Cities 4 Women:</h2>
          <h2 className="text-4xl font-semibold">
            Inclusive and Climate Resilient Urbanization in Nepal
          </h2>
        </div>
        <p className="text-lg font-normal">
          Open space mapping is a vital process for urban planners and
          environmentalists alike, as it provides a comprehensive understanding
          of the distribution, accessibility, and characteristics of open areas
          within a region. By employing geographic information systems (GIS) and
          remote sensing technologies, such as satellite imagery and aerial
          surveys, open space mapping facilitates the identification of green
          spaces, parks, forests, and other natural landscapes.
        </p>
        <Button
          className="mt-3 w-fit btn-primary"
          onClick={() => setSlice(SLICES.MODULES)}
        >
          See Visualization
        </Button>
      </article>
      {/* <section className="flex text-lg font-normal text-primary-900 gap-9">
        <div className="w-[482px] py-6 bg-primary-300 opacity-80 rounded-3xl px-9 flex flex-col gap-[10px]">
          <img className="w-[150px] h-[40px]" src={Unops} alt="Logo of UNOPS" />
          <address className="not-italic">
            Address: Marmorvej 51, PO Box 2695 2100 Copenhagen, Denmark
          </address>
          <a href="https://www.unops.org/" target="_blank">
            https://www.unops.org/
          </a>
          <span>
            Region of Activities: <span className="underline">Denmark</span>
          </span>
          <span>
            Type:{' '}
            <a
              className="underline"
              href="https://globalabc.org/taxonomy/term/10"
              target="_blank"
            >
              Intergovernmental organizations/agencies
            </a>
          </span>
          <span>Founded: 1973</span>
        </div>
        <div className="w-[482px] py-6 bg-primary-300 opacity-80 rounded-3xl px-9 flex flex-col gap-[10px]">
          <img
            className="w-[205px] h-[40px]"
            src={Yilab}
            alt="Logo of YI-Lab"
          />
          <address className="not-italic">
            Address: Baluwatar, Kathmandu
          </address>
          <a href="https://www.youthinnovationlab.org" target="_blank">
            https://www.youthinnovationlab.org
          </a>
          <span>Founded: 2022</span>
        </div>
      </section> */}
      <section className="flex flex-col px-6 gap-7 py-9 rounded-3xl bg-tprimary-300 max-w-[992px]">
        <p className="flex gap-2 font-semibold flextext-xl text-tgray-900">
          <img src={Info} alt="Info icon" />
          Cities 4 Women: Inclusive and Climate Resilient Urbanization in Nepal
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <img
            className="w-[150px] h-[40px]"
            src={Unops}
            alt="Logo of UNOPS"
            loading="lazy"
          />
          <img
            className="w-[150px] h-[60px]"
            src={CitiesAlliance}
            alt="Logo of Cities Alliance"
            loading="lazy"
          />
          <img
            className="w-[150px] h-[50px]"
            src={UNhabitat}
            alt="Logo of UN Habitat"
            loading="lazy"
          />
          <img
            className="w-[100px] h-[65px]"
            src={StarFlag}
            alt="Flag with stars"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};
