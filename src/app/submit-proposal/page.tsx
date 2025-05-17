"use client"
import ProposalHero from '../components/proposal/ProposalHero';
import MultiStepForm from '../components/proposal/MultiStepForm';
import { FiArrowRight, FiCheckCircle, FiClock, FiFileText } from 'react-icons/fi';

export default function SubmitProposalPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <ProposalHero />
      
      {/* Process Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proposal Submission Process</h2>
            <p className="text-xl text-gray-600">
              Follow these simple steps to submit your project proposal to the Far Western University Incubation Center.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiFileText className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Complete the Form</h3>
              <p className="text-gray-600">
                Fill out the multi-step form with details about your project and team members.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheckCircle className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Submit Proposal</h3>
              <p className="text-gray-600">
                Upload your detailed proposal document and any supporting materials.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiClock className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Review Process</h3>
              <p className="text-gray-600">
                Our team will review your proposal and contact you within 14 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Multi-step Form */}
      <MultiStepForm />
      
      {/* Eligibility Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-purple-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">Eligibility Criteria</h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-600 mb-6">
                  To be eligible for consideration by the Far Western University Incubation Center, your project proposal should meet the following criteria:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <FiCheckCircle size={14} />
                    </div>
                    <p className="text-gray-700">
                      <strong>Innovation:</strong> The project should demonstrate innovative approaches or solutions to existing problems.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <FiCheckCircle size={14} />
                    </div>
                    <p className="text-gray-700">
                      <strong>Feasibility:</strong> The project should be technically and economically feasible with a clear implementation plan.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <FiCheckCircle size={14} />
                    </div>
                    <p className="text-gray-700">
                      <strong>Impact:</strong> The project should have potential for positive social, economic, or environmental impact, particularly in the Far Western region of Nepal.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <FiCheckCircle size={14} />
                    </div>
                    <p className="text-gray-700">
                      <strong>Team Capability:</strong> The project team should have the necessary skills and commitment to execute the project successfully.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <FiCheckCircle size={14} />
                    </div>
                    <p className="text-gray-700">
                      <strong>Sustainability:</strong> The project should have potential for long-term sustainability beyond the initial funding period.
                    </p>
                  </li>
                </ul>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> Priority will be given to projects that address local challenges and contribute to the development of the Far Western region of Nepal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about the proposal submission process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What types of projects does the FWU Incubation Center support?</h3>
              <p className="text-gray-600">
                We support a wide range of innovative projects across various sectors including technology, agriculture, healthcare, education, and environment. We particularly encourage projects that address local challenges in the Far Western region of Nepal.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long does the review process take?</h3>
              <p className="text-gray-600">
                Our team typically reviews proposals within 14 business days. You will receive a confirmation email immediately after submission, and we will contact you with the review outcome afterward.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What support does the incubation center provide?</h3>
              <p className="text-gray-600">
                Selected projects receive mentorship, workspace, technical resources, networking opportunities, and potential funding support. The specific support package is tailored to each project&apos;s needs.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I submit multiple project proposals?</h3>
              <p className="text-gray-600">
                Yes, you can submit multiple project proposals. However, each proposal should be submitted separately with its own complete set of information and documentation.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              Still have questions about the proposal submission process?
            </p>
            <a 
              href="mailto:incubation@fwu.edu.np" 
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Contact Us <FiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
