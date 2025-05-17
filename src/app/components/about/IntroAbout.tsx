"use client"
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import { FaBullseye, FaLightbulb, FaGraduationCap, FaUniversity, FaBook, FaUsers, FaHandshake, FaBalanceScale } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

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

    // Store current ref value in a variable to use in cleanup
    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Use the stored ref value in cleanup
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100 rounded-full opacity-20 blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full opacity-20 blur-3xl translate-x-1/4 translate-y-1/4"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#4338ca 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Introduction Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <SectionTitle
              title="Our University"
              subtitle="Excellence in Education"
              align="left"
              accentColor="indigo"
            />
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                Far Western University (FWU) was established in 2010 by the Act of Parliament as a government-funded
                national university to function as a prime academic institution in the country in terms of academic excellence,
                research-based education, community engagement and partnership.
              </p>
              <p className="text-lg leading-relaxed">
                The central office of the university is located at Bhimdatta Municipality of Kanchanpur district, Far West Province, Nepal.
                The strategic location gives access to local people for higher education and provides an opportunity
                for the overall development of the region.
              </p>
              <p className="text-lg leading-relaxed">
                FWU has been fulfilling its responsibility of making higher education accessible through its constituent campuses
                in nine districts of Far West Province, offering diverse educational programs at both undergraduate and graduate levels.
              </p>

              <div className="pt-4">
                <Link
                  href="/faculty"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Explore Our Faculties
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className={`relative h-80 md:h-[500px] rounded-2xl shadow-2xl overflow-hidden group transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Image
              src="https://www.fwu.edu.np/assets/uploads/about/1743995959-about-image.jpg"
              alt="Far Western University Campus"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 bg-white/90 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
              Est. 2010
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg font-semibold drop-shadow-md">Bheemdatta Municipality-18, Mahendranagar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className={`transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionTitle
            title="Our Guiding Principles"
            subtitle="Mission & Vision"
            accentColor="indigo"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Vision Card */}
          <div
            className={`bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-indigo-100 hover:border-indigo-300 relative overflow-hidden transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            style={{ transitionDelay: '300ms' }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>

            <div className="flex items-center mb-6 relative z-10">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-4 rounded-xl mr-5 shadow-lg">
                <FaLightbulb size={28} className="animate-pulse-subtle" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed relative z-10 text-lg">
              To gain recognition as a prime university committed to providing quality education, and enhancing research
              and innovation to meet the needs of society.
            </p>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute transform rotate-45 bg-indigo-400 text-white w-24 h-3 -top-2 -right-8"></div>
            </div>
          </div>

          {/* Mission Card */}
          <div
            className={`bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-indigo-100 hover:border-indigo-300 relative overflow-hidden transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            style={{ transitionDelay: '500ms' }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>

            <div className="flex items-center mb-6 relative z-10">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl mr-5 shadow-lg">
                <FaBullseye size={28} className="animate-pulse-subtle" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed relative z-10 text-lg">
              To provide professional and scholarly environment by developing institutional structures and mechanisms
              that enable faculty, students and staff, devising academic programs that contribute towards the advancement
              of knowledge and thereby cultivating active citizenship through teaching, research, collaboration and
              community engagement.
            </p>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute transform rotate-45 bg-blue-400 text-white w-24 h-3 -top-2 -right-8"></div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-20">
          <div className={`transition-all duration-700 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionTitle
              title="Our Core Values"
              subtitle="Guiding Principles"
              accentColor="indigo"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: <FaGraduationCap size={24} />,
                title: "Academic Excellence",
                description: "To provide the best possible education considering all aspects of students' academic development by adopting dynamic teaching-learning environment.",
                color: "from-indigo-600 to-indigo-700",
                delay: 700
              },
              {
                icon: <FaBook size={24} />,
                title: "Lifelong Learning",
                description: "To develop and impart positive attitude through continuous learning to act cautiously even in adverse situation.",
                color: "from-blue-600 to-blue-700",
                delay: 800
              },
              {
                icon: <FaBalanceScale size={24} />,
                title: "Accountability",
                description: "To encourage sense of responsibility on the processes and outcomes of every action.",
                color: "from-purple-600 to-purple-700",
                delay: 900
              },
              {
                icon: <FaHandshake size={24} />,
                title: "Sustainability",
                description: "To consider sustainability in all aspects of its operations including research and education.",
                color: "from-green-600 to-green-700",
                delay: 1000
              },
              {
                icon: <FaUniversity size={24} />,
                title: "Integrity",
                description: "To develop the culture of trust, honesty and fairness in all actions and words.",
                color: "from-teal-600 to-teal-700",
                delay: 1100
              },
              {
                icon: <FaUsers size={24} />,
                title: "Respect",
                description: "To foster the culture of accepting differences in community cultures, values, beliefs and respecting individual rights and diversity.",
                color: "from-indigo-600 to-indigo-700",
                delay: 1200
              }
            ].map((value, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group hover:-translate-y-1`}
                style={{ transitionDelay: `${value.delay}ms` }}
              >
                <div className={`bg-gradient-to-r ${value.color} text-white p-3 rounded-xl mb-4 w-14 h-14 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Goals Section */}
        <div className="mt-20">
          <div className={`transition-all duration-700 delay-800 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <SectionTitle
              title="Our Strategic Goals"
              subtitle="Driving Excellence"
              accentColor="indigo"
            />
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl shadow-lg border border-indigo-100 mt-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-4">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">1</div>
                </div>
                <p className="text-lg text-gray-700">
                  To provide quality education and equip students with knowledge, skills, positive attitude and values.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-4">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">2</div>
                </div>
                <p className="text-lg text-gray-700">
                  To create opportunities and support for research by enhancing the public engagement.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-4">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">3</div>
                </div>
                <p className="text-lg text-gray-700">
                  To ensure the financial and environmental sustainability of the University.
                </p>
              </div>
            </div>
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