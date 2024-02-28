import Contact from '../components/contact';
import Hero from '../components/hero';
import Projects from '../components/projects';
import Work from '../components/work';
// import Writing from '../components/writing';

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
