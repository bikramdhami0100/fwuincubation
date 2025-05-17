import NewsArticleContent from '@/app/components/news/slug/NewsArticleContent';
import { NewsItemData, allNewsData } from '../page';


// This is a server component
export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  // Find the article with the matching slug
  const article = allNewsData.find((item: NewsItemData) => item.slug === params.slug) || null;

  // Pass the article to the client component
  return <NewsArticleContent article={article} />;
}

// Generate static params for all news items
export async function generateStaticParams() {
  return allNewsData.map((item: NewsItemData) => ({
    slug: item.slug,
  }));
}
