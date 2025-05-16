"use client"
import { useEffect, useState, useRef } from 'react';
import AdvisoryBoardSection from '../components/about/AdvisoryBoardSection';
import IntroAbout from '../components/about/IntroAbout';
import TeamSection from '../components/about/TeamSection';
import HistoryTimeline from '../components/about/HistoryTimeline';
import FacultyShowcase from '../components/about/FacultyShowcase';
import Image from 'next/image';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <>
      <main>
        {/* Hero Banner with Parallax and Animation Effects */}
        <div
          ref={heroRef}
          className="relative min-h-[500px] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/campus-aerial.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Overlay with animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>

          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>

          {/* Content with animations */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-16">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white">
                <span className="block mb-2">About</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                  Far Western University
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Established in 2010, Far Western University is a premier institution in Nepal dedicated to academic excellence, research, and community engagement.
              </p>

              {/* Decorative elements */}
              <div className="flex justify-center mt-8">
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-teal-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
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

        {/* Main content sections */}
        <IntroAbout />
        <HistoryTimeline />
        <FacultyShowcase />
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