"use client"
import { useState, useEffect } from 'react';
import { ProgramData } from '@/app/programs/page';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiClock, FiBookOpen } from 'react-icons/fi';

interface FeaturedProgramsProps {
  featuredPrograms: ProgramData[];
}

const FeaturedPrograms: React.FC<FeaturedProgramsProps> = ({ featuredPrograms }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!featuredPrograms || featuredPrograms.length === 0) {
    return null;
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'Engineering': 'bg-blue-500/10 text-blue-700 border-blue-300',
      'Management': 'bg-amber-500/10 text-amber-700 border-amber-300',
      'Science & Technology': 'bg-green-500/10 text-green-700 border-green-300',
      'Humanities': 'bg-red-500/10 text-red-700 border-red-300',
      'Education': 'bg-purple-500/10 text-purple-700 border-purple-300',
    };
    
    return colors[category as keyof typeof colors] || 'bg-gray-500/10 text-gray-700 border-gray-300';
  };

  const getLevelColor = (level: string) => {
    const colors = {
      'Undergraduate': 'bg-teal-500/10 text-teal-700 border-teal-300',
      'Graduate': 'bg-violet-500/10 text-violet-700 border-violet-300',
      'Diploma': 'bg-orange-500/10 text-orange-700 border-orange-300',
      'Certificate': 'bg-cyan-500/10 text-cyan-700 border-cyan-300',
    };
    
    return colors[level as keyof typeof colors] || 'bg-gray-500/10 text-gray-700 border-gray-300';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-12 text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Programs</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular academic programs at Far Western University Incubation Center
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredPrograms.map((program, index) => (
            <div 
              key={program.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                {program.imageUrl ? (
                  <Image
                    src={program.imageUrl}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getCategoryColor(program.department)}`}>
                    {program.department}
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getLevelColor(program.level)}`}>
                    {program.level}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {program.title}
                </h3>
                
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <div className="flex items-center">
                    <FiClock className="mr-1.5 text-blue-500" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FiBookOpen className="mr-1.5 text-blue-500" />
                    <span>{program.credits} Credits</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {program.description}
                </p>
                
                <Link
                  href={`/programs/${program.slug}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
                >
                  View Program <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
