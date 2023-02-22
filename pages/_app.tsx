import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
      {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && <Analytics />}
    </>
  );
}

export default MyApp;
