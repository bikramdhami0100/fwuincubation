
import ProgramTypeCard from './ProgramTypeCard';
import { programsData } from '../../../data/programsData';

const ProgramTypesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with decorative elements */}
        <div className="relative mb-16">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-blue-200 rounded-full"></div>
          <div className="text-center">
            <p className="text-blue-600 font-semibold mb-2">Innovate & Grow</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FWU Incubation Center Programs</h2>
          </div>
        </div>

        {/* Intro text with decorative elements */}
        <div className="max-w-3xl mx-auto text-center mb-16 relative">
          <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-blue-100 opacity-50"></div>
          <div className="absolute -right-4 bottom-0 w-12 h-12 rounded-full bg-indigo-100 opacity-50"></div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The Far Western University Incubation Center is a hub for innovation, entrepreneurship, and technology transfer.
            We provide resources, mentorship, and networking opportunities to help transform ideas into successful ventures.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Explore our specialized programs designed to support entrepreneurs at every stage of their journey.
            Click on any program to learn more about its details, benefits, and how to apply.
          </p>
        </div>

        {/* Program cards with staggered animation on scroll */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 mt-8">
          {programsData.map((program, index) => (
            <div
              key={program.id}
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <ProgramTypeCard
                icon={program.icon}
                title={program.title}
                description={program.description}
                bgColorClass="bg-white"
                slug={program.slug}
              />
            </div>
          ))}
        </div>

        {/* Additional info with improved design */}
        <div className="mt-24 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-50"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-50 rounded-full opacity-50"></div>

          <div className="relative bg-white border border-gray-100 rounded-2xl shadow-xl p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-30"></div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-10 md:mb-0 md:pr-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Join the FWU Innovation Community</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Far Western University Incubation Center welcomes students, faculty, alumni, and external entrepreneurs
                  with innovative ideas and a passion for solving real-world problems.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Don&apos;t see what you&apos;re looking for? We also offer customized programs tailored to specific industries,
                  technologies, or business needs. Contact our team to discuss how we can support your entrepreneurial journey.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Expert Mentorship</span>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Funding Opportunities</span>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Workspace Access</span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 flex flex-col items-center">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">Ready to Join?</h4>
                  <a
                    href="/contact"
                    className="w-full inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 transform text-center mb-4"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/apply"
                    className="w-full inline-block bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 transform text-center"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramTypesSection;