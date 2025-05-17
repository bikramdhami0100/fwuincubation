"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { FiArrowLeft, FiBookOpen, FiUsers, FiCalendar, FiFileText } from 'react-icons/fi';
import ProgramApplication from '../ProgramApplication';
import ProgramFaculty from '../ProgramFaculty';
import ProgramCurriculum from '../ProgramCurriculum';
import ProgramDetails from '../ProgramDetails';
import { ProgramTypeCardProps } from '../ProgramTypeCard';

interface ProgramContentProps {
  program: ProgramTypeCardProps|null
}

const ProgramContent: React.FC<ProgramContentProps> = ({ program }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!program) {
    return (
      <main className="container mx-auto py-16 px-4 text-center">
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <p className="text-gray-600 mb-8">
            The academic program you are looking for does not exist or has been moved to a different location.
          </p>
          <Link 
            href="/programs" 
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Back to Programs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-10 animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-indigo-500 opacity-10 animate-float-reverse"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link 
              href="/programs" 
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <FiArrowLeft className="mr-2" /> Back to Programs
            </Link>
            
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-700/50 text-blue-100 border border-blue-400/30">
                {/* {program?.department} */}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-700/50 text-indigo-100 border border-indigo-400/30">
                {/* {program?.level} */}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              {program.title}
            </h1>
            
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl">
              {program.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-indigo-100">
              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                {/* <span>Duration: {program.duration}</span> */}
              </div>
              <div className="flex items-center">
                <FiBookOpen className="mr-2" />
                {/* <span>{program.credits} Credits</span> */}
              </div>
              <div className="flex items-center">
                <FiUsers className="mr-2" />
                {/* <span>Class Size: {program.classSize} Students</span> */}
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
      
      {/* Navigation Tabs */}
      <section className="bg-white sticky top-20 z-20 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 scrollbar-hide">
            <button
              onClick={() => setActiveTab('details')}
              className={`px-5 py-2 rounded-lg mr-2 whitespace-nowrap transition-colors ${
                activeTab === 'details' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FiBookOpen className="inline mr-2 mb-0.5" />
              Program Details
            </button>
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`px-5 py-2 rounded-lg mr-2 whitespace-nowrap transition-colors ${
                activeTab === 'curriculum' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FiFileText className="inline mr-2 mb-0.5" />
              Curriculum
            </button>
            <button
              onClick={() => setActiveTab('faculty')}
              className={`px-5 py-2 rounded-lg mr-2 whitespace-nowrap transition-colors ${
                activeTab === 'faculty' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FiUsers className="inline mr-2 mb-0.5" />
              Faculty
            </button>
            <button
              onClick={() => setActiveTab('application')}
              className={`px-5 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activeTab === 'application' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FiCalendar className="inline mr-2 mb-0.5" />
              Application
            </button>
          </div>
        </div>
      </section>
      
      {/* Content Sections */}
      <div className={`transition-opacity duration-300 ${activeTab === 'details' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <ProgramDetails program={program} />
      </div>
      
      <div className={`transition-opacity duration-300 ${activeTab === 'curriculum' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <ProgramCurriculum program={program} />
      </div>
      
      <div className={`transition-opacity duration-300 ${activeTab === 'faculty' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <ProgramFaculty program={program} />
      </div>
      
      <div className={`transition-opacity duration-300 ${activeTab === 'application' ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <ProgramApplication program={program} />
      </div>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              {/* Take the next step in your academic journey with Far Western University. Applications for the {program.nextIntake} intake are now open. */}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/submit-application" 
                className="px-6 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Apply Now
              </Link>
              <button 
                className="px-6 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgramContent;
