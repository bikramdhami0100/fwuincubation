// components/home/UpcomingPrograms.tsx
"use client"
import { useEffect, useState, useRef } from 'react';
import ProgramCard, { Program } from './ProgramCard';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const programsData: Program[] = [
  {
    id: '1',
    title: 'InnovateHER: Women in Tech Bootcamp',
    date: 'October 15-20, 2024',
    description: 'An intensive bootcamp designed to empower women with tech skills and entrepreneurial mindset.',
    category: 'Bootcamp',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    link: '/programs/innovate-her',
  },
  {
    id: '2',
    title: 'Seed Funding Pitch Day',
    date: 'November 5, 2024',
    description: 'Showcase your startup to a panel of investors and compete for seed funding.',
    category: 'Pitch Event',
    imageUrl: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=800&auto=format&fit=crop',
    link: '/events/pitch-day',
  },
  {
    id: '3',
    title: 'AI & Machine Learning Workshop',
    date: 'December 1-3, 2024',
    description: 'Dive deep into the world of AI and ML with hands-on sessions from industry experts.',
    category: 'Workshop',
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-7d65ca45393a?q=80&w=800&auto=format&fit=crop',
    link: '/workshops/ai-ml',
  },
];

const UpcomingPrograms = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-100/50 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-100 rounded-full mb-4">
              <FiCalendar className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Programs & Events</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join our exciting programs designed to accelerate your entrepreneurial journey
          </p>
        </div>

        {/* Featured event - larger card */}
        <div className={`mb-16 transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-indigo-100/20">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative h-64 lg:h-auto">
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop"
                    alt="FWU Innovation Summit"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured Event
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col">
                <div className="flex items-center text-sm text-indigo-600 font-medium mb-3">
                  <FiCalendar className="mr-2" />
                  <span>December 15-17, 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">FWU Innovation Summit 2024</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Join us for our annual innovation summit featuring keynote speakers, panel discussions, startup showcases, and networking opportunities with industry leaders and investors.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full">
                    Networking
                  </span>
                  <span className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full">
                    Workshops
                  </span>
                  <span className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full">
                    Pitch Competition
                  </span>
                </div>
                <Link
                  href="/events/innovation-summit"
                  className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group"
                >
                  Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Program cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program, index) => (
            <div
              key={program.id}
              className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>

        {/* View all programs button */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            href="/programs"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            View All Programs
            <FiArrowRight className="ml-2" />
          </Link>
          <p className="text-gray-500 mt-4 text-sm">
            Stay updated with our latest events and programs
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingPrograms;