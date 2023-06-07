import type { NextPage } from 'next';

import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Work from '../components/Work';
import Writing from '../components/Writing';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Writing />
      <Work />
      <Contact />
    </Layout>
  );
};

export default Home;
