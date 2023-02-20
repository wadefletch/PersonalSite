const Work = () => {
  const work = [
    {
      company: 'Atmos',
      companyHref: 'https://atmos.ai',
      title: 'Software Engineer',
      time: 'September 2022 - Present',
      lines: [
        'Created our flagship products, the ESG Scorecard and Materiality Assessments.',
        'Created a our first monorepo CI/CD Pipeline from scratch using Github Actions and AWS. Automatically finds and prunes local dependencies, and only builds and deploys packages that are strictly necessary.',
        'Migrated our infrastructure from a wonky DigitalOcean-managed YAML schema to Terraform-powered AWS. Used Docker and ECS to containerize and deploy our Express (node) API and a Cloudfront CDN to serve the React frontend worldwide. (Also configured monitoring, backups, VPC, subnets, and other AWS minutia.)',
        'Re-architected our PDF generation infrastructure from a one-off Lambda function into a containerized microservice.',
      ],
    },
    {
      company: 'Atento Capital',
      companyHref: 'https://atentocapital.com',
      title: 'Investments Intern, Atento Fellows Lead',
      time: 'May 2021 - September 2022',
      lines: [
        'Led planning and execution for the second cohort of the Atento Fellows program, including recruiting and managing 9 fellows, allocating a six-figure budget, planning 2 major in-person events, and coordinating with legal team to manage liability.',
        'Fellows sourced 430 companies for the 2022 Atento University Pitch Competition, 7 of which were selected and invited to pitch at the Atento Capital University Pitch Competition Sunny Period (formerly Menstrual Mates) won the competition, received an equity investment from Atento, and relocated to Tulsa, OK in Q3 2022.',
        'Wrote investment memos and deep-dives about startups considered for potential investment, analyzing their product, team, market sizing, and potential fit with fund and limited-partner goals.',
        "Assisted management in rolling out a national cold sourcing initiative, forming relationships with incubators, accelerators, entrepreneurial support organizations, and other venture funds to expand the fund's deal flow pipeline.",
      ],
    },
    {
      company: 'Indiana University',
      companyHref: 'https://iu.edu',
      title: 'Undergraduate Instructor (CSCI-H 200)',
      time: 'August 2020 - May 2021',
      lines: [
        'Led biweekly office hours for 200+ students in the "Introduction to Computers and Programming" course, teaching introductory algorithms and data structures in Python.',
        'Taught weekly labs (virtual, due to the pandemic) and graded assignments for an honors section.',
      ],
    },
    {
      company: 'OneReq (formerly URx)',
      companyHref: 'https://onereq.com',
      title: 'Software Engineering Intern',
      time: 'May 2020 - September 2020',
      lines: [
        'Created TalentBoard (a technical university recruiting platform used by Facebook, Netflix, eBay, Greylock, and more) using Python (Django).',
        'Worked closely with key stakeholders (notably recruiters) to conduct market research and seek product-market fit.',
      ],
    },
  ];

  return (
    <>
      <h2>Work</h2>
      {work.map((job) => (
        <article key={`${job.title}_${job.company}`}>
          <h3 className="font-bold text-lg">
            <a href={job.companyHref} target="blank" className="no-underline">
              {job.company}
            </a>
          </h3>
          <div className="sm:flex sm:justify-between">
            <p>{job.title}</p>
            <p className="text-gray-500">{job.time}</p>
          </div>
          {job.lines && (
            <details className="text-sm text-gray-500">
              <summary className="group cursor-pointer">
                See more{' '}
                <span className="inline-block group-hover:translate-x-1 transition">
                  &rarr;
                </span>
              </summary>
              <ul className="list-disc ml-5">
                {job.lines.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </details>
          )}
        </article>
      ))}
      <a
        href="//linkedin.com/in/wadefletch"
        className="p-3 text-sm grid place-content-center no-underline hover:scale-105 transition col-span-1 sm:col-span-2"
        target="blank"
        rel="_noreferrer"
      >
        <h3 className="">More on LinkedIn &rarr;</h3>
      </a>
    </>
  );
};

export default Work;
