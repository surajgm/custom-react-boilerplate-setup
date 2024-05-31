import { Filter } from '#components/Filter';
import { filterData } from '#components/Filter/DataMapper/Mapper';
import { Legend, legendData } from '#components/Legend';
import { chandragiriGeoJSONData } from '#constants/geojson';
import { DataContext } from '#contexts/context';
import { createMarkers } from '#utils/utils';
import mapboxgl from 'mapbox-gl';
import { useContext, useEffect, useRef } from 'react';
import { mapMarkerData } from './DataMapper/mapper';

type MapProps = {
  mapContainerRef: React.RefObject<HTMLDivElement>;
};

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const mapStyles = {
  height: '100%',
  width: '100%',
};

export const Map = ({ mapContainerRef }: MapProps) => {
  const { slice } = useContext(DataContext);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    const { current: mapContainer } = mapContainerRef;

    if (!mapContainer) {
      console.error('No container found.');
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainer,
      style: import.meta.env.VITE_CHANDRAGIRI_MAP_STYLE_URL,
      center: [85.2295513743239, 27.68688537933637],
      zoom: 12.6,
      minZoom: 12,
      maxZoom: 22,
      attributionControl: false,
      preserveDrawingBuffer: true,
    });

    mapRef.current = map;

    map.on('style.load', () => {
      createMarkers(mapMarkerData).then((markers) => {
        console.log('custom-markers', markers);
        // @ts-expect-error Type error for Highchart first argument issue couldnot be resolved
        markers.forEach((img: { name: string; url: string }) => {
          if (map) {
            map.loadImage(img.url, (error, image) => {
              if (error) throw error;
              if (map) {
                // @ts-expect-error Type error for Highchart first argument issue couldnot be resolved
                map.addImage(img.name, image);
              }
            });
          }
        });
      });

      console.log('timeout');
      map.addSource('source-problems', {
        type: 'geojson',
        // @ts-expect-error Type error for Highchart first argument issue couldnot be resolved
        data: chandragiriGeoJSONData,
        cluster: true,
        clusterRadius: 50,
      });

      map.addLayer({
        id: 'cluster-problems',
        type: 'circle',
        source: 'source-problems',
        filter: ['has', 'point_count'],
        layout: {
          visibility: 'visible',
        },
        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#3da1a6',
            100,
            '#3da1a6',
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            100,
            30,
            750,
            40,
          ],
        },
      });

      map.addLayer({
        id: 'cluster-count-problems',
        type: 'symbol',
        source: 'source-problems',
        // paint: { 'circle-color': '#d1e7e8' },
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12,
          visibility: 'visible',
        },
      });

      map.addLayer({
        id: 'unclustered-problems',
        type: 'symbol',
        source: 'source-problems',
        layout: {
          'icon-image': ['concat', '', ['get', 'resourceType']],
          'icon-size': 0.3,
          'icon-anchor': 'bottom',
          visibility: 'visible',
        },
      });
    });

    // map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // mapZoomEffect.current = setTimeout(() => {
    //   map.fitBounds(
    //     [
    //       85.1886443524253, 27.6453570974925, 85.2778127089963,
    //       27.7268575477248,
    //     ],
    //     {
    //       duration: 10000,
    //       padding: { top: 0, bottom: 30, left: 0, right: 0 },
    //       pitch: 25,
    //     }
    //   );
    // }, 2000);

    return () => {
      // clearTimeout(mapZoomEffect.current);
      map.remove();
    };
  }, []);
  console.log('slice', slice, legendData[slice]);
  return (
    <div className="relative" ref={mapContainerRef} style={mapStyles}>
      <Legend
        positionStyles="absolute bottom-[28px] right-[28px]"
        data={legendData[slice].data}
        title={legendData[slice].title}
      />
      {/* <LayerSwitch positionStyles="absolute top-[28px] right-[28px]" /> */}
      <Filter
        title={filterData.title}
        data={filterData.data}
        positionStyles="absolute top-[28px] right-[28px]"
      />
    </div>
  );
};
