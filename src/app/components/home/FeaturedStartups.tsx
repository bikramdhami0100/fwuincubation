// components/home/FeaturedStartups.tsx
import SectionTitle from '../shared/SectionTitle';
import StartupCard, { Startup } from './StartupCard';
import { useEffect, useState, useRef } from 'react';

const startupsData: Startup[] = [
  {
    id: 's1',
    name: 'Faculty of Science & Technology',
    logoUrl: '/startup-logo1.png',
    description: 'Offering cutting-edge programs in Computer Science, Engineering, and Environmental Science.',
    website: 'https://fwu.edu.np/science',
    industry: 'Science & Tech',
  },
  {
    id: 's2',
    name: 'Faculty of Management',
    logoUrl: '/startup-logo2.png',
    description: 'Preparing future business leaders with programs in Business Administration, Finance, and Marketing.',
    website: 'https://fwu.edu.np/management',
    industry: 'Management',
  },
  {
    id: 's3',
    name: 'Faculty of Humanities',
    logoUrl: '/startup-logo3.png',
    description: 'Exploring human culture and society through programs in Literature, Sociology, and Philosophy.',
    website: 'https://fwu.edu.np/humanities',
    industry: 'Humanities',
  },
  {
    id: 's4',
    name: 'Faculty of Education',
    logoUrl: '/startup-logo4.png',
    description: 'Training the next generation of educators with innovative teaching methodologies and practices.',
    website: 'https://fwu.edu.np/education',
    industry: 'Education',
  },
];

const FeaturedStartups = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  // Auto-rotate active card
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % startupsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #4a90e2 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle title="Our Academic Faculties" subtitle="Excellence in Education" />
        </div>

        <div className="relative mt-12">
          {/* Animated highlight circle that moves between cards */}
          <div
            className="absolute w-full h-full transition-all duration-500 ease-in-out pointer-events-none"
            style={{
              clipPath: 'circle(15% at 0% 0%)',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 70%)',
              transform: `translate(${25 * activeIndex}%, 0)`,
            }}
          ></div>

          {/* Faculty Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {startupsData.map((startup, index) => (
              <div
                key={startup.id}
                className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  transform: activeIndex === index ? 'scale(1.03)' : 'scale(1)',
                  zIndex: activeIndex === index ? 10 : 1,
                }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <StartupCard startup={startup} />
              </div>
            ))}
          </div>
        </div>

        {/*
        // Example with Swiper.js (install swiper and its modules first)
        // You'll need to style navigation/pagination or use default ones.
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="!pb-12" // Adjust padding for pagination
        >
          {startupsData.map((startup) => (
            <SwiperSlide key={startup.id} className="h-auto">
              <StartupCard startup={startup} />
            </SwiperSlide>
          ))}
        </Swiper>
        */}
      </div>
    </section>
  );
};

export default FeaturedStartups;