"use client"
import { useState, useEffect } from 'react';
import { ProgramData } from '@/app/programs/page';
import Image from 'next/image';
import { FiClock, FiBookOpen, FiCalendar, FiTag, FiMapPin, FiUsers, FiAward } from 'react-icons/fi';

interface ProgramDetailsProps {
  program: ProgramData;
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({ program }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-2/3">
              {/* Program Image */}
              {program.imageUrl && (
                <div className="relative h-72 md:h-96 w-full rounded-xl overflow-hidden mb-8">
                  <Image
                    src={program.imageUrl}
                    alt={program.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getDepartmentStyle(program.department)}`}>
                        {program.department}
                      </span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getLevelStyle(program.level)}`}>
                        {program.level}
                      </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                      {program.title}
                    </h1>
                  </div>
                </div>
              )}

              {/* Program Overview */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Overview</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">{program.description}</p>
                  <p>{program.overview}</p>
                </div>
              </div>

              {/* Program Highlights */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {program.highlights.map((highlight, index) => (
                    <div 
                      key={index} 
                      className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex"
                      style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{highlight.title}</h3>
                        <p className="text-sm text-gray-600">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Outcomes</h2>
                <ul className="space-y-3">
                  {program.learningOutcomes.map((outcome, index) => (
                    <li 
                      key={index} 
                      className="flex items-start"
                      style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                    >
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3 flex-shrink-0 mt-0.5">
                        <FiCheck size={14} />
                      </div>
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Program Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FiAward className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Degree Awarded</p>
                      <p className="text-gray-900">{program.degreeAwarded}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiClock className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Duration</p>
                      <p className="text-gray-900">{program.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiBookOpen className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Total Credits</p>
                      <p className="text-gray-900">{program.credits} Credits</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiCalendar className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Next Intake</p>
                      <p className="text-gray-900">{program.nextIntake}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiTag className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Department</p>
                      <p className="text-gray-900">{program.department}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiMapPin className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Campus</p>
                      <p className="text-gray-900">{program.campus}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiUsers className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Class Size</p>
                      <p className="text-gray-900">{program.classSize} Students</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                  <button className="w-full mt-3 py-3 px-4 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FiCheck component for the learning outcomes
const FiCheck = ({ size }: { size: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default ProgramDetails;
