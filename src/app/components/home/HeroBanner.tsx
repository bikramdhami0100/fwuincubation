// components/home/HeroBanner.tsx
import Button from '../common/Button';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src="/hero-bg.jpg"
            alt="Far Western University"
            fill
            priority
            className="object-cover object-center transform scale-110"
            style={{
              animation: 'scale 20s ease-in-out infinite alternate',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-teal-500/10 rounded-full"
        style={{animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-yellow-400/10 rounded-full"
        style={{animation: 'float 6s ease-in-out infinite'}}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-lg rotate-45"
        style={{animation: 'float 8s ease-in-out infinite 1s'}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-blue-500/10 rounded-full"
        style={{animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.5s'}}></div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `moveUpRight ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content with Animations */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
            <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Far Western University</span>
            <span className="block text-yellow-400 drop-shadow-lg">Empowering Minds, Shaping Futures</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Established in 2010, Far Western University is a premier institution in Kanchanpur, Nepal, dedicated to academic excellence, research-based education, and community engagement.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button href="/apply" variant="primary" size="lg" className="text-blue-900 font-bold hover:shadow-lg hover:shadow-yellow-500/20 animate-pulse-subtle">
            Apply Now
          </Button>
          <Button href="/programs" variant="outline" size="lg" className="text-white border-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/20">
            Explore Programs
          </Button>
          <Button href="/about" variant="outline" size="lg" className="text-white border-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/20">
            About Us
          </Button>
        </div>

        {/* Scroll Down Indicator */}
        <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll Down</span>
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Wave with Animation */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            style={{animation: 'moveLeftRight 15s ease-in-out infinite'}}
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