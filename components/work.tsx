export default function Work() {
  const work = [
    {
      company: 'Atmos AI (acq. WAP Sustainability Consulting)',
      companyHref: 'https://atmos.ai',
      title: 'Founding Engineer, CTO',
      time: 'Sep 2022 - Feb 2024',
      lines: [
        'Atmos AI was acquired by WAP Sustainability Consulting in February 2024.',
        'Led 0 to 1 initial architecture and development of the Atmos Platform, structuring both our Express backend and React frontend to be modular and scalable for future team and customer growth.',
        'Hired our first 5 engineers, designing a repeatable interview process and leading the technical interview for each candidate.',
        'Created our flagship products, the ESG Scorecard and Materiality Assessments.',
        'Created a monorepo CI/CD Pipeline using Github Actions and AWS. Automatically finds and prunes local dependencies, and only builds and deploys packages with necessary changes.',
        'Migrated our infrastructure from a (wonky) DigitalOcean-managed YAML schema to Terraform-powered AWS. Used Docker and ECS to containerize and deploy our Express (node) API and a Cloudfront CDN to serve our React frontend worldwide. (Also configured monitoring, backups, VPC, subnets, and other AWS minutia.)',
        'Re-architected PDF generation infrastructure from a one-off Lambda function to a containerized microservice.',
        'Participated in design reviews, product planning, and customer calls.',
      ],
    },
    {
      company: 'Atento Capital',
      companyHref: 'https://atentocapital.com',
      title: 'Investments Intern, Atento Fellows Lead',
      time: 'May 2021 - Sep 2022',
      lines: [
        'Spent two summers of a full-time residential internship and a year of remote work with the venture arm of the George Kaiser Family Foundation.',
        'Led planning and execution for the second cohort of the Atento Fellows program, including recruiting and managing 9 fellows, allocating a six-figure budget and planning 2 major in-person events.',
        "Fellows sourced 430 companies for the 2022 Atento University Pitch Competition, 7 of which were selected and invited to pitch at the Atento Capital University Pitch Competition. Sunny Period (formerly Menstrual Mates) won the competition, received an equity investment from Atento, and relocated to Tulsa, OK in Q3 2022 after being sourced and selected through the Fellows' program funnel.",
        'Wrote investment memos and deep-dives about startups considered for potential investment, analyzing their product, team, market sizing, and potential fit with fund and limited-partner goals.',
        "Assisted management in rolling out a national cold sourcing initiative, forming relationships with incubators, accelerators, entrepreneurial support organizations, and other venture funds to expand the fund's deal flow pipeline.",
      ],
    },
    {
      company: 'Indiana University',
      companyHref: 'https://iu.edu',
      title: 'Undergraduate Instructor (CSCI-H 200)',
      time: 'Aug 2020 - May 2021',
      lines: [
        'Led biweekly office hours for 200+ students in the "Introduction to Computers and Programming" course, teaching introductory algorithms and data structures in Python.',
        'Taught weekly labs (virtual, due to the pandemic) and graded assignments for an honors section of 20 students.',
      ],
    },
    {
      company: 'OneReq (formerly URx)',
      companyHref: 'https://onereq.com',
      title: 'Software Engineering Intern',
      time: 'May 2020 - Sep 2020',
      lines: [
        'Created TalentBoard, a technical university recruiting platform used by Facebook, Netflix, eBay, Greylock, and more using Python (Django) and TailwindCSS.',
        'Worked closely with key stakeholders (notably recruiters) to conduct market research, solicit product feedback, and seek product-market fit.',
      ],
    },
  ];

  return (
    <>
      <h2 className="mt-10 text-2xl font-semibold">Work</h2>

      <p>
        Before jumping back into software, I spent a year at a venture fund,
        mostly working on sourcing. If you&apos;d like to learn more, please
        take a look at my{' '}
        <a href="//linkedin.com/in/wadefletch" target="blank" rel="_noreferrer">
          LinkedIn
        </a>
        .
      </p>

      {work.map((job) => (
        <div
          key={`${job.title}_${job.company}`}
          className="overflow-hidden bg-zinc-100 dark:bg-zinc-800"
        >
          <div className="p-4">
            <div className="sm:flex sm:items-start sm:justify-between">
              <h3 className="font-semibold">
                <a
                  href={job.companyHref}
                  target="blank"
                  className="no-underline"
                >
                  {job.company}
                </a>
              </h3>

              <p className="text-muted-foreground text-sm">{job.time}</p>
            </div>
            <div className="text-sm">
              <p>{job.title}</p>
            </div>
          </div>

          {job.lines && (
            <details className="text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              <summary className="group cursor-pointer select-none px-4 pb-4">
                See more
              </summary>
              <ul className="ml-4 list-disc px-4 pb-4">
                {job.lines.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </details>
          )}
        </div>
      ))}
    </>
  );
}
