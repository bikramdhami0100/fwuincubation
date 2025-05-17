"use client"
import { useState, useEffect } from 'react';
import { ProjectData } from '@/app/projects/page';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiUsers, FiTag, FiClock } from 'react-icons/fi';

interface ProjectListItemProps {
  project: ProjectData;
  index: number;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    
    return () => clearTimeout(timer);
  }, [index]);

  const getCategoryStyle = (category: string) => {
    const styles = {
      'Technology': 'bg-blue-500/10 text-blue-700 border-blue-300',
      'Agriculture': 'bg-green-500/10 text-green-700 border-green-300',
      'Healthcare': 'bg-red-500/10 text-red-700 border-red-300',
      'Education': 'bg-yellow-500/10 text-yellow-700 border-yellow-300',
      'Environment': 'bg-emerald-500/10 text-emerald-700 border-emerald-300',
    };
    
    return styles[category as keyof typeof styles] || 'bg-gray-500/10 text-gray-700 border-gray-300';
  };

  const getStatusStyle = (status: string) => {
    const styles = {
      'Completed': 'bg-green-500/10 text-green-700 border-green-300',
      'In Progress': 'bg-blue-500/10 text-blue-700 border-blue-300',
      'Planning': 'bg-yellow-500/10 text-yellow-700 border-yellow-300',
      'On Hold': 'bg-red-500/10 text-red-700 border-red-300',
    };
    
    return styles[status as keyof typeof styles] || 'bg-gray-500/10 text-gray-700 border-gray-300';
  };

  return (
    <article 
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Project Image */}
        {project.imageUrl && (
          <div className="md:w-1/3 w-full h-56 md:h-auto relative flex-shrink-0 overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 md:rounded-l-xl md:rounded-r-none rounded-t-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-l"></div>
          </div>
        )}

        {/* Content Area */}
        <div className={`p-6 md:p-8 flex flex-col flex-grow ${project.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getCategoryStyle(project.category)}`}>
              <FiTag className="inline mr-1.5 mb-0.5" />
              {project.category}
            </span>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getStatusStyle(project.status)}`}>
              <FiClock className="inline mr-1.5 mb-0.5" />
              {project.status}
            </span>
            <div className="flex items-center text-sm text-gray-500">
              <FiCalendar className="mr-1.5 text-purple-500" />
              <span>Started: {project.startDate}</span>
            </div>
          </div>

          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors leading-tight">
            <Link href={`/projects/${project.id}`} className="hover:underline">
              {project.title}
            </Link>
          </h2>

          <p className="text-gray-600 mb-5 line-clamp-3 flex-grow">
            {project.description}
          </p>

          <div className="mt-auto pt-4 border-t border-gray-100 flex flex-wrap justify-between items-center">
            <div className="flex items-center text-sm text-gray-500 mb-2 md:mb-0">
              <FiUsers className="mr-1.5 text-purple-500" />
              <span>{project.teamSize} Team Members</span>
            </div>
            
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors"
            >
              View Project <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectListItem;
