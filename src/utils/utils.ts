import { SLICES } from '#constants/constants';
import html2canvas from 'html2canvas';

type MarkerDataType = {
  name: string;
  icon: string;
  fill: string;
};

export const getPercent = (value: number, total: number): number => {
  return Math.ceil((value / total) * 100);
};

export const downloadImage = async (
  containerRef: React.RefObject<HTMLElement>,
  title?: SLICES
  //   isLoaded?: boolean
) => {
  if (!containerRef.current) {
    console.log('Map is not loaded');
    return;
  }

  try {
    const canvas = await html2canvas(containerRef.current, {
      useCORS: true,
    });
    const imgData = await canvas.toDataURL('image/jpeg', 1.0);
    const link = document.createElement('a');
    link.href = imgData;
    link.download = title ? `${title}-Charts.jpg` : 'Map-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Failed to capture the charts as an image:', error);
  }
};

// Function to generate png from svg marker outline and svg image provided with customizable properties
const generateMarkerOutline = (fillValue: string) => {
  return `
          <svg width="40" height="50" viewBox="0 0 39 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19.5" cy="19.5" r="18" fill="white"/>
            <path d="M19.4739 0.172179C14.9906 0.174912 10.6567 1.78359 7.25742 4.70669C3.85815 7.62979 1.61848 11.6739 0.944278 16.1062C0.270073 20.5384 1.20594 25.0656 3.58229 28.8672C5.95864 32.6689 9.61824 35.4935 13.8979 36.8292L17.8126 43.5912C18.0477 43.9843 18.4294 44.2679 18.8737 44.3796C19.318 44.4913 19.7884 44.422 20.1816 44.1869L20.1852 44.1845C20.4377 44.0506 20.6443 43.844 20.7782 43.5915L24.6929 36.8295C29.0382 35.5934 32.7885 32.8249 35.2496 29.0364C37.7107 25.2479 38.7159 20.6961 38.0792 16.2235C37.4424 11.7509 35.2068 7.66045 31.7861 4.70938C28.3655 1.7583 23.9915 0.146437 19.4739 0.172179ZM19.4739 33.2698C16.6349 33.2698 13.8596 32.428 11.4991 30.8507C9.1385 29.2734 7.29867 27.0316 6.21222 24.4087C5.12578 21.7858 4.84152 18.8996 5.39538 16.1151C5.94925 13.3307 7.31636 10.773 9.32385 8.76547C11.3313 6.75798 13.889 5.39086 16.6735 4.83699C19.458 4.28313 22.3442 4.56739 24.9671 5.65384C27.59 6.74028 29.8318 8.58011 31.4091 10.9407C32.9864 13.3012 33.8282 16.0765 33.8282 18.9155C33.8317 20.7971 33.4645 22.661 32.7476 24.4007C32.0308 26.1404 30.9782 27.7218 29.6502 29.0548C28.3221 30.3877 26.7445 31.446 25.0074 32.1692C23.2704 32.8924 21.4078 33.2664 19.5262 33.2698H19.4739ZM21.3719 48.9292C21.3719 49.3046 21.2606 49.6715 21.052 49.9837C20.8435 50.2958 20.547 50.5391 20.2002 50.6827C19.8534 50.8264 19.4718 50.8639 19.1036 50.7907C18.7354 50.7175 18.3973 50.5367 18.1318 50.2713C17.8664 50.0058 17.6856 49.6676 17.6124 49.2995C17.5391 48.9313 17.5767 48.5497 17.7204 48.2028C17.864 47.856 18.1073 47.5596 18.4194 47.3511C18.7316 47.1425 19.0985 47.0312 19.4739 47.0312C19.7201 47.028 19.9644 47.0734 20.1931 47.1647C20.4217 47.256 20.6301 47.3914 20.8063 47.5633C20.9826 47.7351 21.1233 47.9401 21.2203 48.1663C21.3173 48.3925 21.3689 48.6357 21.3719 48.8818V48.9292Z" fill="${fillValue}"/>
          </svg>
        `;
};

const svgToImageUrl = (
  svg: string,
  size: number,
  callback: (outLineUrl: string) => void
) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();

  canvas.width = size;
  canvas.height = size;

  const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);

  img.onload = () => {
    if (!ctx) return;
    ctx.drawImage(img, 0, 0, size, size);
    URL.revokeObjectURL(url);
    callback(canvas.toDataURL());
  };
  img.src = url;
};

const createCustomMarker = (
  iconUrl: string,
  outLineColor: string,
  size: number,
  callback: (dataUrl: string) => void
) => {
  const outLineSvg = generateMarkerOutline(outLineColor);

  svgToImageUrl(outLineSvg, size, (outLineUrl: string) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const imgOutline = new Image();
    const imgIcon = new Image();

    canvas.width = size;
    canvas.height = size;

    imgOutline.onload = () => {
      if (!ctx) return;
      ctx.drawImage(imgOutline, 0, 0, size, size);
      imgIcon.onload = () => {
        const iconSize = size * 0.5; // Adjust as needed
        const iconX = (canvas.width - iconSize) / 2;
        const iconY = (canvas.height - iconSize) / 2.5; // Adjust for better vertical alignment
        ctx.drawImage(imgIcon, iconX, iconY, iconSize, iconSize);
        callback(canvas.toDataURL());
      };
      imgIcon.src = iconUrl;
    };
    imgOutline.src = outLineUrl;
  });
};

export const createMarkers = (markerData: MarkerDataType[]) => {
  return new Promise((resolve) => {
    const size = 100; // Adjust the size as needed
    const markers: { name: string; url: string }[] = [];
    let processed = 0;

    markerData.forEach(({ name, icon, fill }) => {
      createCustomMarker(icon, fill, size, (dataUrl: string) => {
        markers.push({ name, url: dataUrl });
        processed += 1;
        if (processed === markerData.length) {
          resolve(markers);
        }
      });
    });
  });
};
