"use client"
import { useState } from 'react';
import NewsListItem from '../components/news/NewsListItem';
import NewsHero from '../components/news/NewsHero';
import NewsCategoryFilter from '../components/news/NewsCategoryFilter';
import NewsFeatured from '../components/news/NewsFeatured';
import SectionTitle from '../components/shared/SectionTitle';

// News Item Data Interface
export interface NewsItemData {
  id: string;
  title: string;
  date: string; // e.g., "2024-10-28"
  category: 'News' | 'Notice' | 'Event Recap' | 'Announcement';
  summary: string;
  slug: string; // For linking to a full news article page
  imageUrl?: string; // Optional image for the news item
}

// Sample news data with content from FWU website
export const allNewsData: NewsItemData[] = [
  {
    id: 'n1',
    title: 'FWU Incubation Center Announces Winter Cohort 2024 Applications',
    date: '2024-10-28',
    category: 'Announcement',
    summary: 'Aspiring entrepreneurs are invited to apply for our upcoming Winter Incubation Cohort. Deadline: November 28, 2024. This is an excellent opportunity for innovative minds to get the support they need to transform their ideas into successful ventures.',
    slug: 'winter-cohort-2024-applications-open',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'n2',
    title: 'Successful Demo Day Concludes with 5 Startups Securing Seed Funding',
    date: '2024-10-15',
    category: 'Event Recap',
    summary: 'Our recent Demo Day saw impressive pitches from 10 startups, with 5 successfully securing initial seed funding from investors. The event was a testament to the hard work of our entrepreneurs and the growing startup ecosystem at Far Western University.',
    slug: 'demo-day-fall-2024-success',
    imageUrl: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'n3',
    title: 'Notice: Upcoming Workshop on Intellectual Property Rights for Startups',
    date: '2024-10-10',
    category: 'Notice',
    summary: 'Join us for an informative workshop on protecting your intellectual property. Date: November 5, 2024. Registration required. Experts will cover patents, trademarks, and copyrights essential for startup success in the innovation economy.',
    slug: 'ip-workshop-notice',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'n4',
    title: 'FWU Incubation Center Partners with TechSolutions Inc. for Mentorship Program',
    date: '2024-09-20',
    category: 'News',
    summary: 'We are thrilled to announce a new partnership with TechSolutions Inc. to provide enhanced mentorship opportunities for our startups. This collaboration will bring industry expertise directly to our cohorts, helping them navigate challenges and accelerate growth.',
    slug: 'partnership-techsolutions-inc',
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'n5',
    title: 'Faculty Capacity Enhancement Workshop Successfully Concluded',
    date: '2024-09-15',
    category: 'Event Recap',
    summary: 'The Faculty Capacity Enhancement Workshop organized by the FWU Incubation Center has successfully concluded with participation from over 30 faculty members. The workshop focused on integrating entrepreneurship education into various academic disciplines.',
    slug: 'faculty-capacity-enhancement-workshop',
    imageUrl: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'n6',
    title: 'Memorandum of Understanding Signed with National Innovation Center',
    date: '2024-09-01',
    category: 'News',
    summary: 'Far Western University Incubation Center has signed a Memorandum of Understanding (MoU) with the National Innovation Center to foster collaboration in research, innovation, and entrepreneurship development, creating new opportunities for students and startups.',
    slug: 'mou-national-innovation-center',
    imageUrl: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'n7',
    title: 'Notice regarding incubation center proposal presentation',
    date: '2024-08-20',
    category: 'Notice',
    summary: 'All shortlisted applicants for the FWU Incubation Center program are required to present their proposals on September 5, 2024. The presentation schedule and guidelines have been emailed to all participants. Please prepare a 10-minute pitch followed by Q&A.',
    slug: 'incubation-center-proposal-presentation',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
];

// Extract unique categories for filtering
const uniqueCategories = Array.from(new Set(allNewsData.map(n => n.category))).sort();

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Sort news by date (newest first)
  const sortedNewsData = [...allNewsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Get featured news (top 3 most recent)
  const featuredNews = sortedNewsData.slice(0, 3);

  // Filter news based on search term and category
  const filteredNews = sortedNewsData
    .filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(item =>
      selectedCategory ? item.category === selectedCategory : true
    );

  return (
    <main className="bg-white">
      {/* Hero Section with Search */}
      <NewsHero
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Category Filter */}
      <NewsCategoryFilter
        categories={uniqueCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Featured News Section (only show if no filters are applied) */}
      {!searchTerm && !selectedCategory && (
        <NewsFeatured featuredNews={featuredNews} />
      )}

      {/* News List Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {searchTerm || selectedCategory ? 'Search Results' : 'All News & Updates'}
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {searchTerm || selectedCategory
                ? `Showing ${filteredNews.length} result${filteredNews.length !== 1 ? 's' : ''}`
                : 'Browse all news, announcements, and updates from the FWU Incubation Center'
              }
            </p>
          </div>

          {filteredNews.length > 0 ? (
            <div className="max-w-4xl mx-auto space-y-8">
              {filteredNews.map((item, index) => (
                <NewsListItem key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-md max-w-2xl mx-auto">
              <SectionTitle title="No Results Found" subtitle="Try adjusting your search or filters" />
              <p className="text-gray-600 mt-4 px-6">
                We couldn&apos;t find any news or updates matching your criteria. Please try different keywords or browse all categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                View All News
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}