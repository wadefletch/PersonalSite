import { spawn } from 'child_process';

const Footer = () => {
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA;

  const pieces = [
    <a
      key={0}
      href="//creativecommons.org/licenses/by/4.0/"
      className="no-underline"
    >
      CC BY 4.0
    </a>,
    <span key={1}>2023</span>,
    sha && (
      <a
        key={2}
        className="font-mono no-underline"
        href={`https://github.com/wadefletch/wadefletcher.com/commit/${sha}`}
      >
        {sha.substring(0, 7)}
      </a>
    ),
  ];
  const dot = <span>&#x2022;</span>;

  return (
    <footer className="text-sm text-gray-500 flex gap-1 max-w-2xl mx-auto p-5 items-center justify-center">
      {pieces.filter(Boolean).map((piece, i) => (
        <>
          {piece} {i < pieces.length - 1 && dot}
        </>
      ))}
    </footer>
  );
};

export default Footer;
