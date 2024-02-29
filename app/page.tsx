import Hero from '../components/hero';
import Projects from '../components/projects';
// import Writing from '@/components/writing';
import Work from '../components/work';
import Contact from '../components/contact';

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Projects />
      {/* <Writing /> */}
      <Work />
      <Contact />
    </>
  );
}
