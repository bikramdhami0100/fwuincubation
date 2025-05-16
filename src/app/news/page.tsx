"use client"
 // We will create/use this
import SectionTitle from '../components/shared/SectionTitle';
import { FiFilter, FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import NewsListItem from '../components/news/NewsListItem';

// Dummy Data - (Same as previous example, ensure it's accessible)
export interface NewsItemData {
  id: string;
  title: string;
  date: string; // e.g., "2024-10-28"
  category: 'News' | 'Notice' | 'Event Recap' | 'Announcement';
  summary: string;
  slug: string; // For linking to a full news article page
  imageUrl?: string; // Optional image for the news item
}

export const allNewsData: NewsItemData[] = [
  {
    id: 'n1',
    title: 'FWU Incubation Center Announces Winter Cohort 2024 Applications',
    date: '2024-10-28',
    category: 'Announcement',
    summary: 'Aspiring entrepreneurs are invited to apply for our upcoming Winter Incubation Cohort. Deadline: November 28, 2024. This is an excellent opportunity for innovative minds to get the support they need.',
    slug: 'winter-cohort-2024-applications-open',
    imageUrl: '/news/winter-cohort-apply.jpg',
  },
  {
    id: 'n2',
    title: 'Successful Demo Day Concludes with 5 Startups Securing Seed Funding',
    date: '2024-10-15',
    category: 'Event Recap',
    summary: 'Our recent Demo Day saw impressive pitches from 10 startups, with 5 successfully securing initial seed funding from investors. The event was a testament to the hard work of our entrepreneurs.',
    slug: 'demo-day-fall-2024-success',
    imageUrl: '/news/demo-day-success.jpg',
  },
  {
    id: 'n3',
    title: 'Notice: Upcoming Workshop on Intellectual Property Rights for Startups',
    date: '2024-10-10',
    category: 'Notice',
    summary: 'Join us for an informative workshop on protecting your intellectual property. Date: November 5, 2024. Registration required. Experts will cover patents, trademarks, and copyrights.',
    slug: 'ip-workshop-notice',
    // No image for this one to show variety
  },
  {
    id: 'n4',
    title: 'FWU Incubation Center Partners with TechSolutions Inc. for Mentorship Program',
    date: '2024-09-20',
    category: 'News',
    summary: 'We are thrilled to announce a new partnership with TechSolutions Inc. to provide enhanced mentorship opportunities for our startups. This collaboration will bring industry expertise directly to our cohorts.',
    slug: 'partnership-techsolutions-inc',
    imageUrl: '/news/partnership-tech.jpg',
  },
];

const uniqueCategories = Array.from(new Set(allNewsData.map(n => n.category))).sort();

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const sortedNewsData = [...allNewsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filteredNews = sortedNewsData
    .filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(item =>
      selectedCategory ? item.category === selectedCategory : true
    );

  return (
    <>


      <main className="bg-gray-50"> {/* Slightly different background for variety */}
        {/* Page Hero (Same as before) */}
        <div className="bg-gradient-to-r from-brand-primary to-indigo-700 text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Stay Informed
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto">
              The latest updates, announcements, and stories from the FWU Incubation Center.
            </p>
          </div>
        </div>

        {/* Controls: Search, Filter (Same as before) */}
        <section className="py-8 md:py-12 bg-white shadow-md sticky top-20 z-30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-2/5">
                <input
                  type="text"
                  placeholder="Search news & notices..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent shadow-sm transition-colors"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <div className="relative w-full md:w-auto">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full md:w-auto appearance-none bg-white pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent shadow-sm transition-colors"
                >
                  <option value="">All Categories</option>
                  {uniqueCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <FiFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>
          </div>
        </section>

        {/* News & Notices List - This will use NewsListItem */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredNews.length > 0 ? (
              <div className="max-w-3xl mx-auto space-y-8"> {/* Centered single column */}
                {filteredNews.map((item) => (
                  <NewsListItem key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                 <SectionTitle title="No News Found" subtitle="Try adjusting your search or filters." />
                <p className="text-gray-600 mt-4">
                  We could not find any news or notices matching your criteria.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

    </>
  );
}