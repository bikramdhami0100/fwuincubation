"use client"
import { GetStaticPaths } from 'next';
import { NewsItemData, allNewsData } from '../page';
import { FiCalendar, FiTag } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

interface NewsArticlePageProps {
  article: NewsItemData | null;
}

export default function NewsArticlePage({ article }: NewsArticlePageProps) {
  if (!article) {
    return (
        <>
         <main className="container mx-auto py-12 px-4 text-center">
            <h1 className="text-3xl font-bold">Article Not Found</h1>
            <p className="mt-4">The news article you are looking for does not exist or has been moved.</p>
            <Link href="/news" className="mt-6 inline-block bg-brand-primary text-white px-6 py-2 rounded hover:bg-blue-700">
                Back to News
            </Link>
         </main>

        </>
    );
  }

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>

      <main className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <article>
            <header className="mb-8">
              <div className="mb-4">
                <span className="text-sm font-semibold px-3 py-1 rounded-full border bg-brand-light text-brand-primary border-brand-primary/30">
                  <FiTag className="inline mr-1.5 mb-0.5" /> {article.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-3 leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center text-md text-gray-500">
                <FiCalendar className="mr-2 text-brand-accent" />
                <span>Published on {formattedDate}</span>
              </div>
            </header>

            {article.imageUrl && (
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
                <Image src={article.imageUrl} alt={article.title} layout="fill" objectFit="cover" />
              </div>
            )}

            {/* Full content would go here - for now, using summary */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>{article.summary}</p>
              {/* In a real CMS, this would be replaced by article.content or similar */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              {/* Add more dummy content or fetch from a CMS */}
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

// Fetch data at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const newsItems = allNewsData; // Your function/data source to get all news slugs
  const paths = newsItems.map((item: NewsItemData) => ({
    params: { slug: item.slug },
  }));
  return { paths, fallback: true }; // fallback: true or 'blocking' if you have many items
};

export const getStaticProp= async ({ params }: { params: { slug: string } } ) => {
    const slug = params.slug;

  const newsItems = allNewsData;
  const article = newsItems.find((item: NewsItemData) => item.slug === slug) || null;

  if (!article) {
    return { notFound: true };
  }

  return {
    props: { article },
    revalidate: 60, // Revalidate every 60 seconds (optional)
  };
};
