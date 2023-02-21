const Projects = () => {
  const projects = [
    {
      name: 'UndercoverVC',
      href: '//undercover.vc',
      description:
        'Student Venture Network connecting 14+ partner funds with students on 25+ underestimated campuses.',
    },
    {
      name: 'CovIntern',
      href: '//covintern.com',
      description:
        'A remote internship jobs board used by 120k students and recruiters. Featured in Marketwatch.',
    },
    {
      name: 'TalentBoard',
      href: '//talentboard.io',
      description:
        'Technical University Recruiting Platform used by Facebook, Netflix, eBay, Greylock, and more.',
    },
    {
      name: 'Project Dalio',
      href: '//github.com/ecmgiu/projectdalio',
      description:
        "React/Firebase App used to manage reporting, analytics, and personnel for IU's only student-managed fund.",
    },
  ];

  return (
    <>
      <h2>Projects</h2>
      <p>
        I&apos;ve worked on a variety of projects: some technical, some
        community-focused, and some just for fun. Here are a few of my
        favorites.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 grid-rows-2">
        {projects.map((project) => (
          <a
            href={project.href}
            key={project.href}
            className="bg-gray-100 dark:bg-gray-700 p-4 no-underline hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            target="blank"
          >
            <h3 className="font-bold mb-1">{project.name}</h3>
            <p className="text-sm">{project.description}</p>
          </a>
        ))}
      </div>
      {/* <Link
          href={'/'}
          className="p-3 text-sm grid place-content-center no-underline hover:scale-105 transition col-span-1 sm:col-span-2"
        >
          <h3 className="">More Projects &rarr;</h3>
        </Link> */}
    </>
  );
};

export default Projects;
