import type { GetStaticProps } from 'next';

interface FooterProps {
  commit?: string;
}

const Footer = ({ commit }: FooterProps) => (
  <footer className="text-sm text-gray-500 flex gap-1 max-w-2xl mx-auto p-5 items-center justify-center">
    <a href="//creativecommons.org/licenses/by/4.0/" className="no-underline">
      CC BY 4.0
    </a>

    <span>&#x2022;</span>

    <span>2023</span>

    {commit ? (
      <>
        <span>&#x2022;</span>
        <a
          className="font-mono no-underline"
          href={`https://github.com/wadefletch/wadefletcher.com/commit/${commit}`}
        >
          {commit.substring(0, 7)}
        </a>
      </>
    ) : null}
  </footer>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      commit: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
    },
  };
};

export default Footer;
