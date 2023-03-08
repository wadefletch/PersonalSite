import Head from 'next/head';

import Footer from './Footer';
import HeaderLine from './HeaderLine';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const meta = {
    title: 'Wade Fletcher',
    description:
      'Wade Fletcher is a software engineer. He is currently working at Atmos, a startup in the ESG analytics space.',
    ogImage: '/og.png',
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.ogImage} />

        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      </Head>

      <HeaderLine />

      <main className="mx-auto mt-10 flex max-w-2xl flex-col gap-5 px-10 pb-10">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
