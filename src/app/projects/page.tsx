"use client"
import { useState } from 'react';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectCategoryFilter from '../components/projects/ProjectCategoryFilter';
import FeaturedProjects from '../components/projects/FeaturedProjects';
import ProjectListItem from '../components/projects/ProjectListItem';
import SectionTitle from '../components/shared/SectionTitle';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

// Project Data Interface
export interface ProjectData {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'Completed' | 'In Progress' | 'Planning' | 'On Hold';
  startDate: string;
  teamSize: number;
  imageUrl?: string;
}

// Sample project data
export const allProjectsData: ProjectData[] = [
  {
    id: 'p1',
    title: 'Smart Agriculture Monitoring System',
    description: 'An IoT-based system for monitoring soil moisture, temperature, and other environmental factors to optimize crop growth and water usage in the Far Western region of Nepal.',
    category: 'Agriculture',
    status: 'In Progress',
    startDate: 'June 2023',
    teamSize: 5,
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'p2',
    title: 'Renewable Energy Solutions for Rural Communities',
    description: 'Developing affordable solar and micro-hydro power solutions for remote villages in the Far Western region, providing clean energy access to underserved communities.',
    category: 'Environment',
    status: 'In Progress',
    startDate: 'March 2023',
    teamSize: 7,
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'p3',
    title: 'Mobile Health Clinic Application',
    description: 'A mobile application connecting remote communities with healthcare professionals, enabling telemedicine consultations and health monitoring for areas with limited healthcare access.',
    category: 'Healthcare',
    status: 'Completed',
    startDate: 'January 2023',
    teamSize: 4,
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'p4',
    title: 'Digital Literacy Program for Rural Schools',
    description: 'An educational initiative providing computer equipment, training, and digital curriculum to schools in rural areas, bridging the digital divide for students in the Far Western region.',
    category: 'Education',
    status: 'In Progress',
    startDate: 'August 2023',
    teamSize: 6,
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'p5',
    title: 'Water Purification Technology for Rural Areas',
    description: 'Developing low-cost, sustainable water purification systems using locally available materials to provide clean drinking water to communities facing water quality challenges.',
    category: 'Environment',
    status: 'Planning',
    startDate: 'October 2023',
    teamSize: 3,
    imageUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'p6',
    title: 'AI-Powered Crop Disease Detection',
    description: 'A machine learning application that helps farmers identify crop diseases through smartphone photos, providing immediate diagnosis and treatment recommendations to prevent crop loss.',
    category: 'Technology',
    status: 'In Progress',
    startDate: 'May 2023',
    teamSize: 4,
    imageUrl: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'p7',
    title: 'Biodiversity Conservation and Monitoring',
    description: 'A research project documenting and preserving the unique biodiversity of the Far Western region, involving local communities in conservation efforts and sustainable resource management.',
    category: 'Environment',
    status: 'In Progress',
    startDate: 'February 2023',
    teamSize: 8,
    imageUrl: 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'p8',
    title: 'Traditional Knowledge Digital Archive',
    description: 'Documenting and preserving traditional knowledge, practices, and cultural heritage of indigenous communities in the Far Western region through digital archiving and community engagement.',
    category: 'Education',
    status: 'On Hold',
    startDate: 'April 2023',
    teamSize: 5,
    imageUrl: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
];

// Extract unique categories for filtering
const uniqueCategories = Array.from(new Set(allProjectsData.map(p => p.category))).sort();

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get featured projects (first 3)
  const featuredProjects = allProjectsData.slice(0, 3);
  
  // Filter projects based on search term and category
  const filteredProjects = allProjectsData
    .filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(project =>
      selectedCategory ? project.category === selectedCategory : true
    );

  return (
    <main className="bg-white">
      {/* Hero Section with Search */}
      <ProjectHero 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
      />
      
      {/* Category Filter */}
      <ProjectCategoryFilter 
        categories={uniqueCategories} 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />
      
      {/* Featured Projects Section (only show if no filters are applied) */}
      {!searchTerm && !selectedCategory && (
        <FeaturedProjects featuredProjects={featuredProjects} />
      )}
      
      {/* Projects List Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {searchTerm || selectedCategory ? 'Search Results' : 'All Projects'}
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {searchTerm || selectedCategory 
                ? `Showing ${filteredProjects.length} result${filteredProjects.length !== 1 ? 's' : ''}`
                : 'Explore all innovative projects from the Far Western University Incubation Center'
              }
            </p>
          </div>
          
          {filteredProjects.length > 0 ? (
            <div className="max-w-4xl mx-auto space-y-8">
              {filteredProjects.map((project, index) => (
                <ProjectListItem key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-md max-w-2xl mx-auto">
              <SectionTitle title="No Projects Found" subtitle="Try adjusting your search or filters" />
              <p className="text-gray-600 mt-4 px-6">
                We couldn&apos;t find any projects matching your criteria. Please try different keywords or browse all categories.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Have an Innovative Project Idea?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              The Far Western University Incubation Center is looking for innovative project proposals. Submit your idea and join our community of innovators.
            </p>
            <Link 
              href="/submit-proposal" 
              className="inline-flex items-center px-6 py-3 bg-white text-purple-900 font-bold rounded-lg hover:bg-indigo-100 transition-colors"
            >
              Submit Your Proposal <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
