"use client"
import { useState, useEffect } from 'react';
import { ProgramData } from '@/app/programs/page';
import Link from 'next/link';
import { FiCalendar, FiDollarSign, FiFileText, FiCheckCircle, FiAlertCircle, FiDownload, FiArrowRight } from 'react-icons/fi';

interface ProgramApplicationProps {
  program: ProgramData;
}

const ProgramApplication: React.FC<ProgramApplicationProps> = ({ program }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Information</h2>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Application Timeline */}
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <FiCalendar className="mr-2 text-blue-600" />
                  Application Timeline
                </h3>
                
                <div className="space-y-6">
                  {program.applicationTimeline.map((item, index) => (
                    <div 
                      key={index} 
                      className="relative pl-8 pb-6 border-l-2 border-blue-200 last:border-l-0 last:pb-0"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                      <div className="mb-1 flex items-center">
                        <h4 className="font-medium text-gray-900">{item.stage}</h4>
                        <span className="ml-3 text-sm bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Eligibility Requirements */}
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <FiCheckCircle className="mr-2 text-blue-600" />
                  Eligibility Requirements
                </h3>
                
                <ul className="space-y-3">
                  {program.eligibilityRequirements.map((requirement, index) => (
                    <li 
                      key={index} 
                      className="flex items-start"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3 flex-shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Application Process */}
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <FiFileText className="mr-2 text-blue-600" />
                  Application Process
                </h3>
                
                <ol className="space-y-4">
                  {program.applicationProcess.map((step, index) => (
                    <li 
                      key={index} 
                      className="flex"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-gray-700">{step}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              
              {/* Fees and Funding */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <FiDollarSign className="mr-2 text-blue-600" />
                  Fees and Funding
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Tuition Fees</h4>
                    <p className="text-gray-700">{program.tuitionFees}</p>
                  </div>
                  
                  {program.scholarships && program.scholarships.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Scholarships and Financial Aid</h4>
                      <ul className="space-y-2">
                        {program.scholarships.map((scholarship, index) => (
                          <li key={index} className="text-gray-700 flex items-start">
                            <FiAlertCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                            <span>{scholarship}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Application CTA */}
            <div className="mt-8 p-6 bg-blue-600 rounded-xl text-white text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Apply?</h3>
              <p className="mb-6">
                Applications for the {program.nextIntake} intake are now open. Submit your application today!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/submit-application" 
                  className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  Apply Now <FiArrowRight className="ml-2" />
                </Link>
                <button 
                  className="px-6 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
                >
                  Download Application Form <FiDownload className="ml-2" />
                </button>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="mt-8 p-6 bg-gray-100 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Have Questions?</h3>
              <p className="text-gray-700 mb-4">
                For more information about the application process or the program, please contact the admissions office:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:admissions@fwu.edu.np" className="text-blue-600 hover:underline">admissions@fwu.edu.np</a>
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +977-99-521456
                </p>
                <p className="text-gray-700">
                  <strong>Office Hours:</strong> Sunday to Friday, 10:00 AM to 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramApplication;
