import Link from 'next/link';

const HeaderLine = () => (
  <header className="border-t-4 border-gray-800 dark:border-gray-700 w-full sticky top-0 left-0 right-0 z-10">
    <div className="max-w-2xl w-full mx-auto">
      <Link
        href="/"
        className="font-medium inline-block bg-gray-800 dark:bg-gray-700 text-white px-3 pb-1 no-underline ml-10"
      >
        Wade Fletcher
      </Link>
    </div>
  </header>
);

export default HeaderLine;
