// components/home/Testimonials.tsx
import SectionTitle from '../shared/SectionTitle';
import TestimonialCard, { Testimonial } from './TestimonialCard';
import { useEffect, useState, useRef } from 'react';

const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    quote: "Far Western University provided me with exceptional education and opportunities. The faculty's dedication and the practical approach to learning prepared me well for my career.",
    author: 'Aisha Sharma',
    role: 'Computer Science Graduate, 2022',
    avatarUrl: '/images/testimonials/testimonial1.jpg',
  },
  {
    id: 't2',
    quote: "The research facilities and mentorship at FWU are outstanding. I was able to publish my first academic paper during my undergraduate studies thanks to the support I received.",
    author: 'Rajesh Bhatta',
    role: 'Environmental Science Graduate, 2021',
    avatarUrl: '/images/testimonials/testimonial2.jpg',
  },
  {
    id: 't3',
    quote: "As an international student, I found FWU to be welcoming and inclusive. The cultural diversity and global perspective in education made my learning experience truly enriching.",
    author: 'Nirmala Joshi',
    role: 'Business Administration Graduate, 2023',
    avatarUrl: '/images/testimonials/testimonial3.jpg',
  },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  // Intersection Observer for section visibility
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

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-blue-50">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-80 z-0"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%234a90e2\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34h4v1h-4v-1zm0-2h1v4h-1v-4zm2-2h1v1h-1v-1zm-2 2h1v1h-1v-1zm-2-2h1v1h-1v-1zm2-2h1v1h-1v-1zm-2 2h1v1h-1v-1zm-2-2h1v1h-1v-1z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }}></div>

      {/* Large quote marks */}
      <div className="absolute top-10 left-10 text-blue-200 opacity-20 text-9xl font-serif">"</div>
      <div className="absolute bottom-10 right-10 text-blue-200 opacity-20 text-9xl font-serif">"</div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle title="What Our Students Say" subtitle="Testimonials" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-32 h-32 bg-yellow-400/10 rounded-full" style={{filter: 'blur(40px)'}}></div>
        <div className="absolute bottom-20 right-0 w-40 h-40 bg-blue-500/10 rounded-full" style={{filter: 'blur(50px)'}}></div>

        {/* Testimonial Cards with Animation */}
        <div className="mt-16 relative">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transform transition-all duration-700 w-full lg:w-1/3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{
                  transitionDelay: `${300 + index * 200}ms`,
                  transform: activeIndex === index ? 'scale(1.05)' : 'scale(0.95)',
                  opacity: activeIndex === index ? 1 : 0.7,
                  zIndex: activeIndex === index ? 10 : 1,
                }}
              >
                <div
                  className="cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-blue-600 w-6' : 'bg-blue-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;