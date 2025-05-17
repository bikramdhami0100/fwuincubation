// components/home/IntroSection.tsx
"use client"
import Image from 'next/image';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const IntroSection = () => {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full opacity-70 blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full opacity-70 blur-3xl translate-x-1/4 translate-y-1/4"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#4338ca 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-100 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FWU Incubation Center</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transforming innovative ideas into successful ventures through mentorship, resources, and a collaborative ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className={`space-y-8 transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-indigo-100/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full text-indigo-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The FWU Incubation Center aims to foster innovation and entrepreneurship by providing a supportive environment for startups to grow and succeed. We bridge the gap between academic research and commercial applications.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our strategic location at Far Western University gives access to local talent and provides an opportunity for the overall development of the region through innovation and technology transfer.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-indigo-900 mb-6">What We Offer</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Mentorship & Guidance',
                  'Workspace & Resources',
                  'Funding Opportunities',
                  'Networking Events',
                  'Technical Support',
                  'Business Development'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 transform"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      animation: isVisible ? `fadeSlideIn 0.5s ease-out forwards ${300 + index * 100}ms` : 'none',
                      opacity: 0,
                      transform: 'translateY(10px)'
                    }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600">
                      <FiCheck className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="/programs" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group">
                  Explore Our Programs
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right content - Image with overlays */}
          <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {/* Main image */}
              <div className="relative h-[600px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                  alt="FWU Incubation Center"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-indigo-900/30 to-transparent"></div>
              </div>

              {/* Floating info cards */}
              <div className="absolute top-6 right-6 bg-white rounded-xl shadow-lg p-4 max-w-[200px] transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900">20+ Startups</h4>
                </div>
                <p className="text-sm text-gray-600">Currently incubating innovative startups across various sectors</p>
              </div>

              <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-4 max-w-[240px] transform transition-transform duration-500 group-hover:translate-y-2">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Join Our Community</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Be part of a thriving ecosystem of innovators, mentors, and industry experts
                </p>
                <Link href="/apply" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800">
                  Apply Now <FiArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </div>

              {/* Floating dots decoration */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                      animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.2); }
        }
      `}</style>
    </section>
  );
};
export default IntroSection;