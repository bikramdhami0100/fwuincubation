"use client"
import { useState } from 'react';
import { FiGrid, FiList, FiSearch } from 'react-icons/fi'; // Icons
import Link from 'next/link';
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
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-10 animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-indigo-500 opacity-10 animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-purple-500 opacity-5 animate-pulse"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          ></div>
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 p-2 bg-blue-800/30 rounded-full">
              <div className="px-4 py-1 bg-blue-700/50 rounded-full">
                <span className="text-blue-100 font-medium">FWU Incubation Center</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Innovators <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">&</span> Trailblazers
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Meet the diverse portfolio of startups growing with Far Western University&apos;s Incubation Center,
              transforming ideas into impactful ventures.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span className="text-white text-sm">20+ Active Startups</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-white text-sm">12 Graduated Companies</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <span className="text-white text-sm">8 Industries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Controls: Search, Filter, View Toggle */}
      <section className="py-6 bg-white shadow-lg sticky top-0 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search startups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm transition-all"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500">
                <FiSearch size={20} />
              </div>
            </div>

            {/* Filter Dropdown */}
            <div className="relative w-full md:w-auto">
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="w-full md:w-56 appearance-none bg-white pl-4 pr-12 py-3 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm transition-all"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundSize: "1.5em 1.5em", backgroundPosition: "right 0.75rem center", backgroundRepeat: "no-repeat" }}
              >
                <option value="">All Domains</option>
                {uniqueDomains.map(domain => (
                  <option key={domain} value={domain}>{domain}</option>
                ))}
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center p-1 bg-gray-100 rounded-full shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-full transition-all ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
                aria-label="Grid View"
              >
                <FiGrid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-full transition-all ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
                aria-label="List View"
              >
                <FiList size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Explore by Domain</h2>
            <p className="text-gray-600">Discover startups across various industries and sectors</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedDomain('')}
              className={`px-5 py-2.5 rounded-full transition-all ${
                selectedDomain === ''
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              All
            </button>

            {uniqueDomains.map(domain => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-5 py-2.5 rounded-full transition-all ${
                  selectedDomain === domain
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Startups Display Area */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredStartups.length} {filteredStartups.length === 1 ? 'Startup' : 'Startups'}
              {selectedDomain && <span className="text-blue-600"> in {selectedDomain}</span>}
            </h2>

            {searchTerm && (
              <div className="text-sm text-gray-500">
                Search results for: <span className="font-medium text-gray-700">&quot;{searchTerm}&quot;</span>
              </div>
            )}
          </div>

          {filteredStartups.length > 0 ? (
            viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {filteredStartups.map((startup, index) => (
                  <div
                    key={startup.id}
                    className="opacity-0 animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <StartupGridItem startup={startup} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {filteredStartups.map((startup, index) => (
                  <div
                    key={startup.id}
                    className="opacity-0 animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <StartupListItem startup={startup} />
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-6">
                <FiSearch className="text-gray-400 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No Startups Found</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-8">
                We couldn&apos;t find any startups matching your search criteria. Try adjusting your filters or search term.
              </p>
              <button
                onClick={() => {setSearchTerm(''); setSelectedDomain('');}}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Join Our Ecosystem Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-white flex items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Join Our Startup Ecosystem</h3>
                  <p className="mb-6 text-blue-100">
                    FWU Incubation Center provides resources, mentorship, and networking opportunities to help transform ideas into successful ventures.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Mentorship from industry experts</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Access to funding opportunities</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Collaborative workspace</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-3/5 p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply to Our Program</h3>
                <p className="text-gray-600 mb-8">
                  Have an innovative idea or early-stage startup? Apply to join our next cohort and take your venture to the next level.
                </p>
                <div className="space-y-4">
                  <a
                    href="/apply"
                    className="block w-full py-3 px-6 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors"
                  >
                    Apply Now
                  </a>
                  <Link
                    href="/programs"
                    className="block w-full py-3 px-6 text-center bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
                  >
                    Learn About Our Programs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}