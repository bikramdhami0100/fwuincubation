// pages/apply.tsx
"use client"
import ApplicationForm from '../../app/components/apply/ApplicationForm';
import { FiArrowRight, FiCheckCircle, FiUsers, FiLayers, FiTrendingUp } from 'react-icons/fi';

export default function ApplyPage() {
  return (
    <>
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-10 animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-indigo-500 opacity-10 animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-purple-500 opacity-5 animate-pulse"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          ></div>
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 p-2 bg-blue-800/30 rounded-full">
              <div className="px-4 py-1 bg-blue-700/50 rounded-full">
                <span className="text-blue-100 font-medium">FWU Incubation Center</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Launch</span> Your Venture?
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Join the FWU Incubation Center and transform your innovative idea into a successful business reality.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span className="text-white text-sm">Mentorship & Guidance</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                <span className="text-white text-sm">Funding Opportunities</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <span className="text-white text-sm">Networking Events</span>
              </div>
            </div>

            <a
              href="#application-form"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 transform"
            >
              Apply Now <FiArrowRight className="ml-2" />
            </a>
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Our Incubation Center?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FWU Incubation Center provides the resources, mentorship, and environment you need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-blue-50 rounded-xl p-8 shadow-sm border border-blue-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FiUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Mentorship</h3>
              <p className="text-gray-600 leading-relaxed">
                Get guidance from industry experts, successful entrepreneurs, and academic professionals who will help navigate your startup journey.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-xl p-8 shadow-sm border border-indigo-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <FiLayers className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resources & Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">
                Access workspace, technology resources, meeting rooms, and other facilities needed to develop and grow your startup.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 shadow-sm border border-purple-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <FiTrendingUp className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Funding Opportunities</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with potential investors, learn about grants, and explore various funding avenues to fuel your startup&apos;s growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to join our incubation program
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start mb-12">
              <div className="flex-shrink-0 bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-6 md:mt-0 mt-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Submit Application</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the application form below with details about your startup idea, team, and vision. Be thorough and specific about your concept.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start mb-12">
              <div className="flex-shrink-0 bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-6 md:mt-0 mt-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Initial Review</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team will review your application and evaluate its potential, innovation, and alignment with our incubation program&apos;s focus areas.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start mb-12">
              <div className="flex-shrink-0 bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-6 md:mt-0 mt-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interview & Presentation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Shortlisted applicants will be invited for an interview and asked to present their ideas to our selection committee.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-6 md:mt-0 mt-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Final Selection & Onboarding</h3>
                <p className="text-gray-600 leading-relaxed">
                  Selected startups will receive an acceptance letter and begin the onboarding process to join our incubation program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-8 px-8 md:px-12">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Application Form
                </h2>
                <p className="text-blue-100">
                  Please fill out all fields carefully. We look forward to reviewing your application!
                </p>
              </div>

              <div className="p-8 md:p-12">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
                  <div className="flex items-center mb-4">
                    <FiCheckCircle className="text-green-500 mr-3 text-xl" />
                    <p className="text-gray-700 font-medium">
                      Applications are currently open for the 2025 cohort
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-3 text-xl" />
                    <p className="text-gray-700 font-medium">
                      Next application deadline: December 15, 2024
                    </p>
                  </div>
                </div>

                <ApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}