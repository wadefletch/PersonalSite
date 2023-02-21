const Footer = () => {
  const commit = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA;

  return (
    <footer className="text-sm text-gray-500 flex gap-1 max-w-2xl mx-auto p-5 items-center justify-center">
      <a href="//creativecommons.org/licenses/by/4.0/" className="no-underline">
        CC BY 4.0
      </a>

      <span>&#x2022;</span>

      <span>2023</span>

      <span>&#x2022;</span>

      <a
        href={
          commit
            ? `https://github.com/wadefletch/wadefletcher.com/commit/${commit}`
            : '//github.com/wadefletch/wadefletcher.com'
        }
        target="blank"
        className="no-underline"
      >
        {commit ? commit.substring(0, 7) : 'Source'}
      </a>
    </footer>
  );
};

export default Footer;
