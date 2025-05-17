"use client"
import { useState, useEffect } from 'react';
import { ProjectData } from '@/app/projects/page';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiUsers } from 'react-icons/fi';

interface FeaturedProjectsProps {
  featuredProjects: ProjectData[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ featuredProjects }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!featuredProjects || featuredProjects.length === 0) {
    return null;
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'Technology': 'bg-blue-500/10 text-blue-700 border-blue-300',
      'Agriculture': 'bg-green-500/10 text-green-700 border-green-300',
      'Healthcare': 'bg-red-500/10 text-red-700 border-red-300',
      'Education': 'bg-yellow-500/10 text-yellow-700 border-yellow-300',
      'Environment': 'bg-emerald-500/10 text-emerald-700 border-emerald-300',
    };
    
    return colors[category as keyof typeof colors] || 'bg-gray-500/10 text-gray-700 border-gray-300';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-12 text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Projects</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most innovative and impactful projects from the Far Western University Incubation Center
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FiCalendar className="mr-2 text-purple-500" />
                  <span>Started: {project.startDate}</span>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FiUsers className="text-purple-500 mr-2" />
                    <span className="text-sm text-gray-500">{project.teamSize} Team Members</span>
                  </div>
                  
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group"
                  >
                    Details <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
