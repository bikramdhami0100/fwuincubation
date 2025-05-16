// components/home/IntroSection.tsx
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';
import { useEffect, useState, useRef } from 'react';

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100 rounded-full opacity-30 translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle title="Welcome to Far Western University" subtitle="Our Mission" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 text-gray-700 transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-lg leading-relaxed">
              Far Western University is a premier institution established in 2010 by the Act of Parliament as a government-funded national university. Located in Kanchanpur, Mahendranagar, Katan-5, Nepal, we function as a prime academic institution in terms of academic excellence, research-based education, and community engagement.
            </p>
            <p className="text-lg leading-relaxed">
              Our strategic location gives access to local people for higher education and provides an opportunity for the overall development of the Far West Province. We are committed to making higher education accessible through our constituent campuses in nine districts of the region.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">What We Offer</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Six diverse faculties',
                  'Undergraduate & graduate programs',
                  'Research opportunities',
                  'MPhil and PhD degrees',
                  'Modern facilities',
                  'Expert faculty members'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 transition-all"
                    style={{
                      transitionDelay: `${300 + index * 100}ms`,
                      animation: isVisible ? `fadeSlideIn 0.5s ease-out forwards ${300 + index * 100}ms` : 'none',
                      opacity: 0,
                      transform: 'translateY(10px)'
                    }}
                  >
                    <div className="mt-1 bg-yellow-400/20 p-1 rounded-full text-yellow-500">
                      <FiCheck className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`relative h-80 md:h-[500px] rounded-xl shadow-2xl overflow-hidden group transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Image
              src="/images/innovation-hub.jpg"
              alt="Far Western University campus"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700/40 to-transparent"></div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 bg-white/90 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              University Campus
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-lg font-semibold drop-shadow-md">Shaping the future of Nepal</p>
            </div>

            {/* Floating dots decoration */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
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