"use client"
import PastEventsGallerySection from "../components/programs/PastEventsGallerySection ";
import ProgramCalendarSection from "../components/programs/ProgramCalendarSection ";
import ProgramTypesSection from "../components/programs/ProgramTypesSection";
import { FiArrowDown } from 'react-icons/fi';

export default function ProgramsPage() {
  // Function to scroll to the next section smoothly
  const scrollToNextSection = () => {
    const programsSection = document.getElementById('program-types');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Redesigned Hero Section with Tailwind Animations */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        {/* Background pattern - using CSS pattern instead of image */}
        <div className="absolute inset-0 opacity-5 bg-white"
             style={{
               backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
               backgroundSize: '20px 20px'
             }}></div>

        {/* Accent elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-blue-50 to-transparent opacity-70 rounded-bl-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-indigo-50 to-transparent opacity-70 rounded-tr-[100px]"></div>

        {/* Animated accent circles */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100 opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-indigo-100 opacity-20 animate-float-reverse"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="opacity-0 animate-fadeIn">
            <div className="inline-block mb-6 p-2 bg-blue-50 rounded-full">
              <div className="px-4 py-1 bg-blue-100 rounded-full">
                <span className="text-blue-800 font-medium">Innovation Hub</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-gray-900 leading-tight">
              FWU <span className="text-blue-600">Incubation Center</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-6">
              Empowering innovation and entrepreneurship at Far Western University
            </p>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Discover our range of specialized programs designed to support entrepreneurs at every stage of their journey,
              from ideation to market launch. Join our vibrant community of innovators and change-makers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={scrollToNextSection}
                className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-4 px-8 rounded-lg shadow-lg inline-flex items-center transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Explore Programs
                <FiArrowDown className="ml-2" />
              </button>

              <a
                href="/apply"
                className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg shadow-md inline-flex items-center transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Apply Now
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">20+</div>
                <div className="text-gray-600 text-sm">Startups Incubated</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-gray-600 text-sm">Mentors & Experts</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">12</div>
                <div className="text-gray-600 text-sm">Programs Yearly</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-gray-600 text-sm">Students Engaged</div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fadeIn animation-delay-1000 animate-bounce">
            <button
              onClick={scrollToNextSection}
              className="text-blue-600 focus:outline-none"
              aria-label="Scroll down"
            >
              <FiArrowDown size={30} />
            </button>
          </div>
        </div>
      </section>

      {/* Program Types Section with ID for scroll targeting */}
      <div id="program-types">
        <ProgramTypesSection />
      </div>

      {/* Calendar Section */}
      <ProgramCalendarSection />

      {/* Past Events Gallery */}
      <PastEventsGallerySection />
    </>
  );
}