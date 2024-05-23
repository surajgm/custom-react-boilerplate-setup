import { LayerSwitch } from '#components/LayerSwitch';
import { Legend, legendData } from '#components/Legend';
import { DataContext } from '#contexts/context';
import mapboxgl from 'mapbox-gl';
import { useContext, useEffect, useRef } from 'react';

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
  return (
    <div className="relative" ref={mapContainerRef} style={mapStyles}>
      <Legend
        positionStyles="absolute bottom-[28px] right-[28px]"
        data={legendData[slice].data}
        title={legendData[slice].title}
      />
      <LayerSwitch positionStyles="absolute top-[28px] right-[28px]" />
    </div>
  );
};
