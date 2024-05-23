import { SLICES } from '#constants/constants';
import html2canvas from 'html2canvas';

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
    console.log('promise-downloadImage-container', containerRef.current);
    console.log('promise-start');
    const canvas = await html2canvas(containerRef.current, {
      useCORS: true,
    });
    console.log('promise-end');
    const imgData = await canvas.toDataURL('image/jpeg', 1.0);
    console.log('promise-next');
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
console.log;
