import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const mapStyles = {
  height: '100%',
  width: '100%',
};
export const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  // const mapZoomEffect = useRef<any | undefined>(null);

  useEffect(() => {
    const { current: mapContainer } = mapContainerRef;

    if (!mapContainer) {
      console.error('No container found.');
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainer,
      style: import.meta.env.VITE_CHANDRAGIRI_MAP_STYLE_URL,
      // Initial co-ordinates of map and ease to given fit-bounds for zoom-in visual effect
      // center: [82.2020372039787, 27.9640979280828],
      // Co-ordinates of center of chandragiri
      center: [85.2295513743239, 27.68688537933637],
      minZoom: 2,
      maxZoom: 22,
      attributionControl: false,
    });

    map.fitBounds(
      [
        [85.1886443524253, 27.6453570974925],
        [85.2778127089963, 27.7268575477248],
      ],
      {
        animate: false,
        padding: { top: 0, bottom: 30, left: 0, right: 0 },
        pitch: 5,
      }
    );
    // map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    mapRef.current = map;

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
  return <div ref={mapContainerRef} style={mapStyles}></div>;
};
