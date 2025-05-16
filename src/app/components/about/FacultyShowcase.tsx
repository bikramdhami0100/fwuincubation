// components/about/FacultyShowcase.tsx
import SectionTitle from '../shared/SectionTitle';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const faculties = [
  {
    id: 'science',
    name: 'Faculty of Science & Technology',
    description: 'Offering programs in Physics, Chemistry, Mathematics, Computer Science, and Environmental Science.',
    image: '/images/faculty-science.jpg',
    color: 'from-blue-600 to-blue-700'
  },
  {
    id: 'humanities',
    name: 'Faculty of Humanities',
    description: 'Exploring human culture and society through programs in Literature, Sociology, and Philosophy.',
    image: '/images/faculty-humanities.jpg',
    color: 'from-purple-600 to-purple-700'
  },
  {
    id: 'education',
    name: 'Faculty of Education',
    description: 'Training the next generation of educators with innovative teaching methodologies and practices.',
    image: '/images/faculty-education.jpg',
    color: 'from-green-600 to-green-700'
  },
  {
    id: 'management',
    name: 'Faculty of Management',
    description: 'Preparing future business leaders with programs in Business Administration, Finance, and Marketing.',
    image: '/images/faculty-management.jpg',
    color: 'from-yellow-600 to-yellow-700'
  },
  {
    id: 'law',
    name: 'Faculty of Law',
    description: 'Providing comprehensive legal education to develop skilled legal professionals.',
    image: '/images/faculty-law.jpg',
    color: 'from-red-600 to-red-700'
  },
  {
    id: 'engineering',
    name: 'Faculty of Engineering',
    description: 'Developing technical expertise through programs in Civil, Electrical, and Computer Engineering.',
    image: '/images/faculty-engineering.jpg',
    color: 'from-teal-600 to-teal-700'
  },
  {
    id: 'agriculture',
    name: 'Faculty of Agriculture',
    description: 'Advancing agricultural knowledge and practices through research and education.',
    image: '/images/faculty-agriculture.jpg',
    color: 'from-green-700 to-green-800'
  },
  {
    id: 'health',
    name: 'Faculty of Health Sciences',
    description: 'Preparing healthcare professionals through programs in Nursing, Public Health, and more.',
    image: '/images/faculty-health.jpg',
    color: 'from-blue-700 to-blue-800'
  },
  {
    id: 'nrm',
    name: 'Faculty of Natural Resource Management',
    description: 'Focusing on sustainable management of natural resources and environmental conservation.',
    image: '/images/faculty-nrm.jpg',
    color: 'from-emerald-600 to-emerald-700'
  }
];

const FacultyShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Auto-rotate faculties
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % faculties.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100 rounded-full opacity-30 translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle title="Our Academic Faculties" subtitle="Excellence in Diversity" />
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Far Western University offers a diverse range of academic programs through nine specialized faculties, 
            providing comprehensive educational opportunities to students from all backgrounds.
          </p>
        </div>
        
        {/* Faculty Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculties.map((faculty, index) => (
            <div 
              key={faculty.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} ${activeIndex === index ? 'scale-105 shadow-xl z-10 border-blue-300' : 'scale-100'}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Faculty Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${faculty.color} opacity-60`}></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{faculty.name}</h3>
                </div>
              </div>
              
              {/* Faculty Description */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{faculty.description}</p>
                <Link 
                  href={`/faculties/${faculty.id}`} 
                  className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${faculty.color} text-white py-2 px-4 rounded-md hover:shadow-md transition-all duration-300`}
                >
                  Learn More <FaArrowRight className="ml-2" />
                </Link>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className={`absolute transform rotate-45 bg-gradient-to-r ${faculty.color} w-16 h-3 -top-2 -right-8 opacity-80`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyShowcase;
