import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Link from 'next/link';

export default function Writing() {
  const blogDir = 'blog';
  const files = fs.readdirSync(path.join(blogDir));
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return (
    <>
      <h2 className="mt-10 text-2xl font-semibold">Writing</h2>

      <p>
        I write about software engineering, startups, careers in tech, and
        whatever else is interesting to me on a given day.
      </p>

      <div className="flex flex-col gap-1 text-sm">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="flex-1 no-underline"
          >
            <div className="flex items-start">
              <div className="w-24 text-gray-400">{blog.meta.date}</div>
              <span>{blog.meta.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
