const Writing = () => {
  const posts: {
    title: string;
    slug: string;
    date: Date;
  }[] = [
    {
      title: 'Islands: procedural generation with Python',
      slug: 'islands',
      date: new Date(2020, 10, 1),
    },
    {
      title: 'Mazes: algorithmic generation and traversal with Python',
      slug: 'mazes',
      date: new Date(2020, 10, 1),
    },
    {
      title: 'What I learned growing CovIntern to 100k users in 60 days',
      slug: 'covintern',
      date: new Date(2020, 10, 1),
    },
    {
      title: 'Letters from the front: student venture in the time of COVID',
      slug: 'letters-from-the-front',
      date: new Date(2020, 10, 1),
    },
  ];

  return (
    <>
      <h2 data-content="Writing">Writing</h2>
      <p>
        I write about software engineering, startups, careers in tech, and
        whatever else is interesting to me on a given day.
      </p>

      <div className="">
        {posts.map((post) => (
          <div key={post.slug} className="flex items-start">
            <div className="w-24 text-gray-500">
              {post.date.toISOString().split('T')[0]}
            </div>

            <a href={`/writing/${post.slug}`} className="flex-1 no-underline">
              {post.title}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Writing;
