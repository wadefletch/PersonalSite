const Footer = () => (
  <footer className="text-sm text-gray-500 grid place-content-center max-w-2xl mx-auto p-5">
    CC BY 4.0 &#x2022; 2023 &#x2022;{' '}
    {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.substring(0, 7)}
  </footer>
);

export default Footer;
