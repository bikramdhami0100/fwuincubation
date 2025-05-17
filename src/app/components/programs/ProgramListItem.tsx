"use client"
import { useState, useEffect } from 'react';
import { ProgramData } from '@/app/programs/page';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiClock, FiBookOpen, FiCalendar, FiTag } from 'react-icons/fi';

interface ProgramListItemProps {
  program: ProgramData;
  index: number;
}

const ProgramListItem: React.FC<ProgramListItemProps> = ({ program, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    
    return () => clearTimeout(timer);
  }, [index]);

  const getDepartmentStyle = (department: string) => {
    const styles = {
      'Engineering': 'bg-blue-500/10 text-blue-700 border-blue-300',
      'Management': 'bg-amber-500/10 text-amber-700 border-amber-300',
      'Science & Technology': 'bg-green-500/10 text-green-700 border-green-300',
      'Humanities': 'bg-red-500/10 text-red-700 border-red-300',
      'Education': 'bg-purple-500/10 text-purple-700 border-purple-300',
    };
    
    return styles[department as keyof typeof styles] || 'bg-gray-500/10 text-gray-700 border-gray-300';
  };

  const getLevelStyle = (level: string) => {
    const styles = {
      'Undergraduate': 'bg-teal-500/10 text-teal-700 border-teal-300',
      'Graduate': 'bg-violet-500/10 text-violet-700 border-violet-300',
      'Diploma': 'bg-orange-500/10 text-orange-700 border-orange-300',
      'Certificate': 'bg-cyan-500/10 text-cyan-700 border-cyan-300',
    };
    
    return styles[level as keyof typeof styles] || 'bg-gray-500/10 text-gray-700 border-gray-300';
  };

  return (
    <article 
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Program Image */}
        {program.imageUrl && (
          <div className="md:w-1/3 w-full h-56 md:h-auto relative flex-shrink-0 overflow-hidden">
            <Image
              src={program.imageUrl}
              alt={program.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 md:rounded-l-xl md:rounded-r-none rounded-t-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-l"></div>
          </div>
        )}

        {/* Content Area */}
        <div className={`p-6 md:p-8 flex flex-col flex-grow ${program.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getDepartmentStyle(program.department)}`}>
              <FiTag className="inline mr-1.5 mb-0.5" />
              {program.department}
            </span>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getLevelStyle(program.level)}`}>
              {program.level}
            </span>
            <div className="flex items-center text-sm text-gray-500">
              <FiCalendar className="mr-1.5 text-blue-500" />
              <span>Next Intake: {program.nextIntake}</span>
            </div>
          </div>

          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
            <Link href={`/programs/${program.slug}`} className="hover:underline">
              {program.title}
            </Link>
          </h2>

          <p className="text-gray-600 mb-5 line-clamp-3 flex-grow">
            {program.description}
          </p>

          <div className="mt-auto pt-4 border-t border-gray-100 flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2 md:mb-0">
              <div className="flex items-center">
                <FiClock className="mr-1.5 text-blue-500" />
                <span>{program.duration}</span>
              </div>
              <div className="flex items-center">
                <FiBookOpen className="mr-1.5 text-blue-500" />
                <span>{program.credits} Credits</span>
              </div>
            </div>
            
            <Link
              href={`/programs/${program.slug}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              Program Details <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProgramListItem;
