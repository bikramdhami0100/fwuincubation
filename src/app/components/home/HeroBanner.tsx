// components/home/HeroBanner.tsx
"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Add keyframes for animations
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.8; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(0.95); }
      }
      @keyframes scale {
        0% { transform: scale(1.1); }
        100% { transform: scale(1.2); }
      }
      @keyframes moveUpRight {
        0% { transform: translate(0, 0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translate(100px, -300px); opacity: 0; }
      }
      @keyframes moveLeftRight {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(-2%); }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-indigo-900/80"></div>

        {/* Animated mesh grid */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}>
        </div>

        {/* Animated circles */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          style={{animation: 'pulse 8s ease-in-out infinite'}}></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"
          style={{animation: 'pulse 10s ease-in-out infinite 1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"
          style={{animation: 'pulse 7s ease-in-out infinite 0.5s'}}></div>

        {/* Rotating gradient circle */}
        <div className="absolute -top-40 -left-40 w-96 h-96 opacity-30"
          style={{
            background: 'conic-gradient(from 0deg, #4f46e5, #3b82f6, #0ea5e9, #4f46e5)',
            borderRadius: '50%',
            animation: 'spin-slow 20s linear infinite'
          }}>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                backgroundColor: i % 3 === 0 ? '#93c5fd' : i % 3 === 1 ? '#c4b5fd' : '#bae6fd',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `moveUpRight ${Math.random() * 15 + 15}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Badge */}
              <div className="inline-block mb-6 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full">
                <span className="text-blue-200 font-medium text-sm">FWU Incubation Center</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                <span className="block mb-2 text-white">Far Western University</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">
                  Empowering Innovation
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Join our incubation center and transform your innovative ideas into successful ventures with expert mentorship, resources, and a collaborative ecosystem.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-bold text-white">20+</span>
                  <span className="text-blue-200 text-sm">Startups Incubated</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-bold text-white">50+</span>
                  <span className="text-blue-200 text-sm">Expert Mentors</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-bold text-white">₹5M+</span>
                  <span className="text-blue-200 text-sm">Funding Secured</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link href="/apply" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center group">
                  Apply Now
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/programs" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>

          {/* Right content - 3D floating illustration */}
          <div className={`lg:w-1/2 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative h-[400px] md:h-[500px] w-full">
              {/* Main image with floating animation */}
              <div className="absolute inset-0 flex items-center justify-center" style={{animation: 'float 6s ease-in-out infinite'}}>
                <div className="relative w-full h-full max-w-md mx-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop"
                    alt="FWU Incubation Center"
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent rounded-2xl"></div>

                  {/* Floating elements */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float-slow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Innovation Hub</p>
                        <p className="text-xs text-gray-500">Cutting-edge facilities</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4" style={{animation: 'float 5s ease-in-out infinite 1s'}}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Mentorship</p>
                        <p className="text-xs text-gray-500">Expert guidance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background glow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-3xl opacity-20 transform scale-75"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center">
          <span className="text-blue-200 text-sm mb-2">Scroll Down</span>
          <div className="w-10 h-10 rounded-full border-2 border-blue-200 flex items-center justify-center animate-bounce">
            <FiChevronDown className="text-blue-200" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,74.7C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

// Add CSS keyframes for animations
const styles = `
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(0.95); }
}
@keyframes scale {
  0% { transform: scale(1.1); }
  100% { transform: scale(1.2); }
}
@keyframes moveUpRight {
  0% { transform: translate(0, 0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate(100px, -300px); opacity: 0; }
}
@keyframes moveLeftRight {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-2%); }
}
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}

export default HeroBanner;