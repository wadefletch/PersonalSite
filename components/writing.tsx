export default function Writing() {
  const posts: {
    title: string;
    slug: string;
    date: Date;
  }[] = [
    {
      title: 'Procedurally generating islands with Python',
      slug: 'islands',
      date: new Date(2020, 10, 1),
    },
    {
      title: 'Generating and solving mazes with Python',
      slug: 'mazes',
      date: new Date(2020, 10, 1),
    },
    {
      title: 'What I learned growing CovIntern to 100k users in 60 days',
      slug: 'covintern',
      date: new Date(2020, 10, 1),
    },
    {
      title: 'Idk something about covintern',
      slug: 'undercovervc',
      date: new Date(2020, 10, 1),
    },
  ];

  return (
    <>
      <h2 className="mt-10 text-2xl font-bold">Writing</h2>

      <p>
        I write about software engineering, startups, careers in tech, and
        whatever else is interesting to me on a given day.
      </p>

      <div className="flex flex-col gap-1 text-sm">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="flex-1 no-underline"
          >
            <div className="flex items-start">
              <div className="w-24 text-zinc-400">
                {post.date.toISOString().split('T')[0]}
              </div>
              <span>{post.title}</span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
