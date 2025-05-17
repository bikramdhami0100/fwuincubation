"use client"
import { NewsItemData } from '@/app/news/page';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiArrowRight, FiTag, FiClock } from 'react-icons/fi';
import { useState, useEffect } from 'react';

interface NewsListItemProps {
  item: NewsItemData;
  index: number;
}

const NewsListItem: React.FC<NewsListItemProps> = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const categoryStyles = {
    News: 'bg-blue-500/10 text-blue-700 border-blue-300',
    Notice: 'bg-yellow-500/10 text-yellow-700 border-yellow-400',
    'Event Recap': 'bg-green-500/10 text-green-700 border-green-400',
    Announcement: 'bg-purple-500/10 text-purple-700 border-purple-400',
  };
  const categoryStyle = categoryStyles[item.category] || 'bg-gray-500/10 text-gray-700 border-gray-400';

  return (
    <article
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Optional Image - shown on the side for list view */}
        {item.imageUrl && (
          <div className="md:w-1/3 w-full h-56 md:h-auto relative flex-shrink-0 overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 md:rounded-l-xl md:rounded-r-none rounded-t-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-l"></div>
          </div>
        )}

        {/* Content Area */}
        <div className={`p-6 md:p-8 flex flex-col flex-grow ${item.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryStyle}`}>
              <FiTag className="inline mr-1.5 mb-0.5" />
              {item.category}
            </span>
            <div className="flex items-center text-sm text-gray-500">
              <FiCalendar className="mr-1.5 text-indigo-500" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <FiClock className="mr-1.5 text-indigo-500" />
              <span>5 min read</span>
            </div>
          </div>

          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
            <Link href={`/news/${item.slug}`} className="hover:underline">
              {item.title}
            </Link>
          </h2>

          <p className="text-gray-600 mb-5 line-clamp-3 flex-grow">
            {item.summary}
          </p>

          <div className="mt-auto pt-4 border-t border-gray-100">
            <Link
              href={`/news/${item.slug}`}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
            >
              Read Full Article <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsListItem;