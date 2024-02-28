import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { cn } from '../lib/utils';
import Footer from '../components/footer';
import HeaderLine from '../components/header-line';

const inter = Inter({ subsets: ['latin'] });

export const siteConfig = {
  title: 'Wade Fletcher',
  description:
    'Wade Fletcher is an independent AI researcher and software engineer, working on building scalable retrieval systems for LLMs.',
  url: 'https://wadefletcher.com',
};

export const metadata: Metadata = {
  title: {
    default: 'Wade Fletcher',
    template: `%s | Wade Fletcher`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  authors: [{ name: 'Wade Fletcher', url: siteConfig.url }],
  creator: 'Wade Fletcher',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: '/og.png',
      },
    ],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(inter.className)}>
        <HeaderLine />

        <main className="mx-auto mt-10 flex max-w-2xl flex-col gap-5 px-10 pb-10">
          {children}
        </main>

        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && <Analytics />}
    </html>
  );
}
