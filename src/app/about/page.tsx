"use client"
import { useEffect, useState, useRef } from 'react';
import AdvisoryBoardSection from '../components/about/AdvisoryBoardSection';
import IntroAbout from '../components/about/IntroAbout';
import TeamSection from '../components/about/TeamSection';
import HistoryTimeline from '../components/about/HistoryTimeline';
import FacultyShowcase from '../components/about/FacultyShowcase';
import Image from 'next/image';
import Link from 'next/link';
import { FaUniversity, FaGraduationCap, FaUsers, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { FiBook, FiAward, FiMapPin, FiCalendar } from 'react-icons/fi';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          heroObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          statsObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    // Store current ref values in variables to use in cleanup
    const currentHeroRef = heroRef.current;
    const currentStatsRef = statsRef.current;

    if (currentHeroRef) {
      heroObserver.observe(currentHeroRef);
    }

    if (currentStatsRef) {
      statsObserver.observe(currentStatsRef);
    }

    return () => {
      // Use the stored ref values in cleanup
      if (currentHeroRef) {
        heroObserver.unobserve(currentHeroRef);
      }
      if (currentStatsRef) {
        statsObserver.unobserve(currentStatsRef);
      }
    };
  }, []);

  return (
    <>
      <main className="overflow-hidden">
        {/* Hero Banner with Parallax and Animation Effects */}
        <div
          ref={heroRef}
          className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden"
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Far Western University Campus"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-indigo-800/85 to-blue-900/80"></div>
          </div>

          {/* Animated particles */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          {/* Content with animations */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center py-16">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <FaUniversity className="text-indigo-300" />
                  <span className="text-white font-medium">Established 2010</span>
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block mb-2 text-white">About</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300">
                  Far Western University
                </span>
              </h1>

              <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed mb-10">
                A premier institution in Nepal dedicated to academic excellence, research-based education, and community engagement in the Far Western region.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link
                  href="#university-intro"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center group"
                >
                  Learn More
                  <FaChevronDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg transition-all duration-300 border border-white/20 flex items-center group"
                >
                  Contact Us
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                style={{animation: 'wave 15s ease-in-out infinite'}}
              ></path>
            </svg>
          </div>
        </div>

        {/* Quick Stats Section */}
        <div
          ref={statsRef}
          className="py-16 bg-gradient-to-b from-white to-indigo-50 relative"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: <FaGraduationCap className="text-indigo-600" size={28} />, count: 491, label: "Teachers", delay: 100 },
                  { icon: <FaUsers className="text-indigo-600" size={28} />, count: 17238, label: "Students", delay: 300 },
                  { icon: <FiBook className="text-indigo-600" size={28} />, count: 180, label: "Staff", delay: 500 },
                  { icon: <FiAward className="text-indigo-600" size={28} />, count: 17909, label: "Users", delay: 700 }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-white p-6 rounded-2xl shadow-lg border border-indigo-100 flex flex-col items-center justify-center transform transition-all duration-700 ${
                      statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${stat.delay}ms` }}
                  >
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-indigo-900 mb-1">
                      {statsVisible ? stat.count : 0}
                    </div>
                    <div className="text-indigo-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main content sections */}
        <div id="university-intro">
          <IntroAbout />
        </div>
        <HistoryTimeline />
        <FacultyShowcase />

        {/* Recent News & Events Section */}
        <section className="py-20 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 translate-x-1/4 translate-y-1/4"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Latest News & Events</h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest happenings, announcements, and events at Far Western University.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* News Card 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Vice Chancellor Visit to Israel"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <FiCalendar className="mr-1" />
                    Apr 6, 2025
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-indigo-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    Vice Chancellor Visit to Israel
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Vice Chancellor of Far Western University Prof. Hem Raj Pant visited Israel from march 13 to 20, 2025. During his visit to Israel, the discussion with government professionals...
                  </p>
                  <Link href="#" className="text-indigo-600 font-medium flex items-center group/link">
                    Read More
                    <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" size={14} />
                  </Link>
                </div>
              </div>

              {/* News Card 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="MOU Among Universities"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <FiCalendar className="mr-1" />
                    Feb 9, 2025
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-indigo-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    MOU Among Five Universities
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Far Western University signed a Memorandum of Understanding with Mid-West University, Nepal Open University, Purbanchal University and Lumbini Technological University...
                  </p>
                  <Link href="#" className="text-indigo-600 font-medium flex items-center group/link">
                    Read More
                    <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" size={14} />
                  </Link>
                </div>
              </div>

              {/* Event Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="International Conference"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-indigo-600/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Upcoming Event
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="mr-3 text-center">
                      <div className="text-2xl font-bold text-indigo-600">25</div>
                      <div className="text-xs text-gray-500 uppercase">June</div>
                    </div>
                    <div className="border-l border-gray-200 pl-3">
                      <h3 className="text-xl font-bold text-indigo-900 group-hover:text-indigo-600 transition-colors">
                        International Conference 2025
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <FiMapPin className="mr-1" />
                        University Central Office
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Join us for the International Conference on Advanced Functional Materials 2025 at Himalaya Hotel Kathmandu in partnership with Far Western University...
                  </p>
                  <Link href="#" className="text-indigo-600 font-medium flex items-center group/link">
                    Learn More
                    <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" size={14} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="#"
                className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                View All News & Events
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <TeamSection />
        <AdvisoryBoardSection />

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.2); }
          }
          @keyframes wave {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-2%); }
          }
        `}</style>
      </main>
    </>
  );
}