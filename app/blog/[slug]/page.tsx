import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ArrowLeft } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('blog'));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join('blog', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata({ params }: any) {
  const blog = getPost(params);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

function Back() {
  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-zinc-800 px-2 py-1 font-medium no-underline"
      >
        <ArrowLeft className="mr-1 h-4 w-4" strokeWidth={3} /> Back
      </Link>
    </div>
  );
}

export default function Post({ params }: any) {
  const { frontMatter, content } = getPost(params);

  return (
    <article className="post space-y-5">
      <Back />
      <h1 className="text-4xl font-bold">{frontMatter.title}</h1>
      {/* @ts-expect-error Server Component*/}
      <MDXRemote source={content} options={options} />
      <Back />
    </article>
  );
}
