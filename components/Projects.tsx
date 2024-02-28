export default function Projects() {
  const projects = [
    {
      name: 'UndercoverVC',
      href: 'https://undercover.vc',
      description:
        'Student Venture Network connecting 14+ partner funds with students on 25+ underestimated campuses.',
    },
    {
      name: 'CovIntern',
      href: 'https://covintern.com',
      description:
        'Remote internship jobs board used by 120k students and recruiters. Featured in Marketwatch.',
    },
    {
      name: 'TalentBoard',
      href: 'https://talentboard.io',
      description:
        'Technical University Recruiting Platform used by Facebook, Netflix, eBay, Greylock, and more.',
    },
    {
      name: 'Project Dalio',
      href: 'https://github.com/ecmgiu/projectdalio',
      description:
        "React/Firebase App used to manage reporting, analytics, and personnel for IU's student-managed fund.",
    },
  ];

  return (
    <>
      <h2 data-content="Projects">Projects</h2>
      <p>
        I&apos;ve worked on a variety of projects: some technical, some
        community-focused, and some just for fun. Here are a few of my
        favorites.
      </p>
      <div className="grid grid-cols-1 grid-rows-2 gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            href={project.href}
            key={project.href}
            className="bg-neutral-100 p-4 no-underline transition hover:scale-105 dark:bg-neutral-900"
            target="blank"
          >
            <h3 className="mb-1 font-bold">{project.name}</h3>
            <p className="text-sm dark:text-neutral-400">
              {project.description}
            </p>
          </a>
        ))}
      </div>
      {/*
      <Link 
        href={'/'}
        className="p-3 text-sm grid place-content-center no-underline hover:scale-105 transition col-span-1 sm:col-span-2"
      >
        <h3 className="">More Projects &rarr;</h3>
      </Link> 
      */}
    </>
  );
}
