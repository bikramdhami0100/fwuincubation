"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ProposalHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500 opacity-10 animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-indigo-500 opacity-10 animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-blue-500 opacity-5 animate-pulse"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className={`md:w-1/2 text-center md:text-left transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-block mb-6 p-2 bg-purple-800/30 rounded-full">
                <div className="px-4 py-1 bg-purple-700/50 rounded-full">
                  <span className="text-purple-100 font-medium">FWU Incubation Center</span>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                Submit Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">Project Proposal</span>
              </h1>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Turn your innovative ideas into reality with support from the Far Western University Incubation Center.
              </p>
            </div>
            
            <div className={`md:w-1/2 mt-10 md:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative h-64 md:h-80 w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl transform -rotate-3 scale-105"></div>
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Submit Your Project Proposal"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="bg-purple-600/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      Innovation Starts Here
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2">
                      We Support Groundbreaking Ideas
                    </h3>
                  </div>
                </div>
              </div>
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
  );
};

export default ProposalHero;
