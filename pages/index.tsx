import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Wade Fletcher</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='max-w-xl space-y-6'>
        <div className='flex justify-between items-center'>
          <h1>Wade Fletcher</h1>
          <div className='h-8 flex gap-4 text-gray-300'>
            <a href='//linkedin.com/in/wadefletch' target='_blank' rel='noreferrer' className='block h-8 w-8 hover:text-sky-800 transition duration-150'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='//twitter.com/wadefletch' target='_blank' rel='noreferrer' className='block h-8 w-8 hover:text-sky-400 transition duration-150'>
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          </div>
        </div>
        <p>
          I&apos;m a software engineer at{' '}
          <a href='//atmos.ai' target='_blank' rel='noreferrer'>
            Atmos
          </a>
          , building a platform for <a href='//www.investopedia.com/terms/e/environmental-social-and-governance-esg-criteria.asp'>ESG</a> analytics.
        </p>
        <div>
          <h3>Previously</h3>
          <ul className='list-disc ml-4'>
            <li>
              Early-stage investing (intern) at{' '}
              <a href='//atentocapital.com' target='blank' rel='noreferrer'>
                Atento Capital
              </a>
            </li>
            <li>
              Computer Science and Finance (c/o 2023) at <a href='//indiana.edu'>Indiana University</a>
            </li>
            <li>
              Former internship curator (for 165k users) via <a href='//covintern.com'>CovIntern</a>
            </li>
          </ul>
        </div>
        <p className='italic'>
          Connect with me via email at{' '}
          <a href='mailto:hello@wadefletcher.com' className='bg-gray-200 px-1 py-0.5 rounded font-mono text-sm font-normal no-underline'>
            hello at wadefletcher dot com
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export default Home;
