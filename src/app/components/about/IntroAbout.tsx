"use client"
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import { FaBullseye, FaLightbulb, FaGraduationCap, FaUniversity, FaBook, FaUsers } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';

const IntroAbout = () => {
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
        {/* Introduction Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <SectionTitle title="Our University" subtitle="Excellence in Education" align="left" />
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Far Western University (FWU) was established in 2010 by the Act of Parliament as a government-funded
                national university. Located in Kanchanpur, Mahendranagar, Nepal, we function as a prime academic
                institution in terms of academic excellence, research-based education, and community engagement.
              </p>
              <p>
                Our strategic location gives access to local people for higher education and provides an opportunity
                for the overall development of the Far West Province. We are committed to making higher education
                accessible through our constituent campuses in nine districts of the region.
              </p>
              <p>
                With a diverse range of faculties including Science, Humanities, Education, Management, Law,
                Engineering, Agriculture, Health Sciences, and Natural Resource Management, we offer comprehensive
                educational opportunities to students from all backgrounds.
              </p>
            </div>
          </div>
          <div className={`relative h-80 md:h-[500px] rounded-xl shadow-2xl overflow-hidden group transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Image
              src="/images/campus-main.jpg"
              alt="Far Western University Campus"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700/40 to-transparent"></div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 bg-white/90 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              Est. 2010
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-lg font-semibold drop-shadow-md">Bheemdatta Municipality-18, Mahendranagar</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className={`transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle title="Our Guiding Principles" subtitle="Mission & Vision" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Vision Card */}
          <div
            className={`bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-300 relative overflow-hidden transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            style={{ transitionDelay: '300ms' }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, #4a90e2 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>

            <div className="flex items-center mb-6 relative z-10">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-lg mr-5 shadow-lg">
                <FaLightbulb size={28} className="animate-pulse-subtle" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed relative z-10 text-lg">
              To gain recognition as a prime university committed to providing quality education, and enhancing research
              and innovation to meet the needs of society.
            </p>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute transform rotate-45 bg-yellow-400 text-white w-24 h-3 -top-2 -right-8"></div>
            </div>
          </div>

          {/* Mission Card */}
          <div
            className={`bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-300 relative overflow-hidden transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            style={{ transitionDelay: '500ms' }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, #4a90e2 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>

            <div className="flex items-center mb-6 relative z-10">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 rounded-lg mr-5 shadow-lg">
                <FaBullseye size={28} className="animate-pulse-subtle" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed relative z-10 text-lg">
              To provide professional and scholarly environment by developing institutional structures and mechanisms
              that enable faculty, students and staff, devising academic programs that contribute towards the advancement
              of knowledge and thereby cultivating active citizenship through teaching, research, collaboration and
              community engagement.
            </p>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute transform rotate-45 bg-teal-400 text-white w-24 h-3 -top-2 -right-8"></div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16">
          <div className={`transition-all duration-700 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionTitle title="Our Core Values" subtitle="Guiding Principles" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              {
                icon: <FaGraduationCap size={24} />,
                title: "Academic Excellence",
                description: "Providing the best possible education considering all aspects of students' academic development.",
                color: "from-blue-600 to-blue-700",
                delay: 700
              },
              {
                icon: <FaBook size={24} />,
                title: "Lifelong Learning",
                description: "Developing positive attitudes through continuous learning to act cautiously even in adverse situations.",
                color: "from-teal-500 to-teal-600",
                delay: 800
              },
              {
                icon: <FaUniversity size={24} />,
                title: "Integrity",
                description: "Developing the culture of trust, honesty and fairness in all actions and words.",
                color: "from-yellow-500 to-yellow-600",
                delay: 900
              },
              {
                icon: <FaUsers size={24} />,
                title: "Respect",
                description: "Fostering the culture of accepting differences in community cultures, values, and beliefs.",
                color: "from-indigo-500 to-indigo-600",
                delay: 1000
              }
            ].map((value, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${value.delay}ms` }}
              >
                <div className={`bg-gradient-to-r ${value.color} text-white p-3 rounded-lg mb-4 w-12 h-12 flex items-center justify-center shadow-md`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default IntroAbout;