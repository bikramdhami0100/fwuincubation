"use client"
import { allNewsData, NewsItemData } from '../page';
import NewsArticleContent from '@/app/components/news/slug/NewsArticleContent'; // ✅ must be a Client Component

interface NewsArticlePageProps {
  params: {
    slug: string;
  };
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = allNewsData.find((item: NewsItemData) => item.slug === params.slug) || null;

  return <NewsArticleContent article={article} />;
}
