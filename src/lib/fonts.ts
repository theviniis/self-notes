import { Libre_Bodoni, Montserrat } from 'next/font/google';

export const sans = Montserrat({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const serif = Libre_Bodoni({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-bodoni',
});
