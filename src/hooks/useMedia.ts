import { useState, useEffect } from 'react';
import { breakpoints } from '@/styles/breakpoints';

type Media = keyof typeof breakpoints;

export const useMedia = () => {
  const [media, setMedia] = useState<Media>('mobile');

  const getMedia = (): Media => {
    const width = window.innerWidth;
    if (width >= breakpoints.desktop) return 'desktop';
    if (width >= breakpoints.tablet) return 'tablet';
    return 'mobile';
  };

  useEffect(() => {
    const handleResize = () => {
      setMedia(getMedia());
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { media };
};
