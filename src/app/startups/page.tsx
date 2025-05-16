"use client"
import { useState } from 'react';
import SectionTitle from '../components/shared/SectionTitle';
import { FiGrid, FiList, FiSearch, FiChevronDown } from 'react-icons/fi'; // Icons
import StartupGridItem from '../components/startups/StartupGridItem';
import StartupListItem from '../components/startups/StartupListItem';

// Dummy Data - This would ideally come from a CMS or API
export interface StartupData {
  id: string;
  name: string;
  logoUrl: string;
  domain: string; // e.g., EdTech, HealthTech, FinTech
  website: string;
  shortDescription: string;
  longDescription?: string; // For a potential detail page
  foundedYear?: number;
  status?: 'Active' | 'Graduated' | 'Seed'; // Example statuses
  tags?: string[]; // e.g., ['AI', 'Mobile App', 'SaaS']
}

const allStartupsData: StartupData[] = [
  {
    id: 's1',
    name: 'EduSpark Innovations',
    logoUrl: '/startups/eduspark-logo.png', // Create in public/startups/
    domain: 'EdTech',
    website: 'https://eduspark.example.com',
    shortDescription: 'AI-powered personalized learning platform for K-12 students.',
    foundedYear: 2022,
    status: 'Active',
    tags: ['AI', 'Education', 'Platform'],
  },
  {
    id: 's2',
    name: 'GreenShift Solutions',
    logoUrl: '/startups/greenshift-logo.png', // Create in public/startups/
    domain: 'Sustainability',
    website: 'https://greenshift.example.com',
    shortDescription: 'Urban waste management solutions using IoT and data analytics.',
    foundedYear: 2021,
    status: 'Graduated',
    tags: ['IoT', 'Environment', 'Smart City'],
  },
  {
    id: 's3',
    name: 'HealthAI Diagnostics',
    logoUrl: '/startups/healthai-logo.png', // Create in public/startups/
    domain: 'HealthTech',
    website: 'https://healthai.example.com',
    shortDescription: 'Early disease detection using AI-driven medical image analysis.',
    foundedYear: 2023,
    status: 'Seed',
    tags: ['AI', 'Healthcare', 'Diagnostics'],
  },
  {
    id: 's4',
    name: 'FinWiz',
    logoUrl: '/startups/finwiz-logo.png', // Create in public/startups/
    domain: 'FinTech',
    website: 'https://finwiz.example.com',
    shortDescription: 'Personal finance management app for young professionals.',
    foundedYear: 2022,
    status: 'Active',
    tags: ['Mobile App', 'Finance', 'Budgeting'],
  },
  {
    id: 's5',
    name: 'AgroConnect',
    logoUrl: '/startups/agroconnect-logo.png', // Create in public/startups/
    domain: 'AgriTech',
    website: 'https://agroconnect.example.com',
    shortDescription: 'Connecting farmers directly to markets and agricultural resources.',
    foundedYear: 2021,
    status: 'Active',
    tags: ['Marketplace', 'Agriculture', 'Supply Chain'],
  },
  {
    id: 's6',
    name: 'CraftyHands',
    logoUrl: '/startups/craftyhands-logo.png', // Create in public/startups/
    domain: 'E-commerce',
    website: 'https://craftyhands.example.com',
    shortDescription: 'Online marketplace for handmade crafts by local artisans.',
    foundedYear: 2023,
    status: 'Seed',
    tags: ['Marketplace', 'Artisan', 'Handmade'],
  },
];

// Get unique domains for filtering
const uniqueDomains = Array.from(new Set(allStartupsData.map(s => s.domain))).sort();

export default function StartupsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');

  const filteredStartups = allStartupsData
    .filter(startup =>
      startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(startup =>
      selectedDomain ? startup.domain === selectedDomain : true
    );

  return (
    <>
        {/* Page Hero */}
        <div className="bg-gradient-to-br from-brand-accent to-yellow-600 text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Our Innovators & Trailblazers
            </h1>
            <p className="text-lg sm:text-xl text-yellow-100 max-w-2xl mx-auto">
              Meet the diverse portfolio of startups growing with FWU Incubation Center.
            </p>
          </div>
        </div>

        {/* Controls: Search, Filter, View Toggle */}
        <section className="py-8 md:py-12 bg-white shadow-sm sticky top-20 z-30"> {/* Adjust top value if header height changes */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search Input */}
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search startups..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent shadow-sm transition-colors"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>

              {/* Filter Dropdown */}
              <div className="relative w-full md:w-auto">
                <select
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className="w-full md:w-auto appearance-none bg-white pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent shadow-sm transition-colors"
                >
                  <option value="">All Domains</option>
                  {uniqueDomains.map(domain => (
                    <option key={domain} value={domain}>{domain}</option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>

              {/* View Toggle */}
              <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-brand-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'
                  }`}
                  aria-label="Grid View"
                >
                  <FiGrid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-brand-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'
                  }`}
                  aria-label="List View"
                >
                  <FiList size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Startups Display Area */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredStartups.length > 0 ? (
              viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredStartups.map((startup) => (
                    <StartupGridItem key={startup.id} startup={startup} />
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredStartups.map((startup) => (
                    <StartupListItem key={startup.id} startup={startup} />
                  ))}
                </div>
              )
            ) : (
              <div className="text-center py-12">
                <SectionTitle title="No Startups Found" subtitle="Try adjusting your search or filters." />
                <p className="text-gray-600">We could not find any startups matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

    </>
  );
}