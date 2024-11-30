import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ArrowLeft } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import remarkGfm from 'remark-gfm';
import rehypePrism from '@mapbox/rehype-prism';
import '@/styles/prism.css';
import { cn } from '@/lib/utils';
import { Tweet } from 'react-tweet';

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

function Back() {
  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-gray-100 px-2 py-1 no-underline hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <ArrowLeft className="mr-1 h-4 w-4" strokeWidth={2} /> Back
      </Link>
    </div>
  );
}

export default function Post({ params }: any) {
  const { frontMatter, content } = getPost(params);

  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
  };

  const components = {
    Tweet,
    h1: (props: any) => <h1 {...props} className="text-4xl font-bold" />,
    h2: (props: any) => (
      <h2 {...props} className="mt-10 text-2xl font-semibold" />
    ),
    h3: (props: any) => (
      <h3 {...props} className="mt-8 text-xl font-semibold" />
    ),
    h4: (props: any) => (
      <h4 {...props} className="mt-6 text-lg font-semibold" />
    ),
    pre: (props: any) => (
      <pre
        {...props}
        className={cn(props.className, 'overflow-x-auto bg-gray-500')}
      />
    ),
  };

  return (
    <article className="post space-y-5">
      <Back />
      <h1 className="text-4xl font-bold">{frontMatter.title}</h1>
      {/* @ts-expect-error Server Component*/}
      <MDXRemote source={content} options={options} components={components} />
      <Back />
    </article>
  );
}
