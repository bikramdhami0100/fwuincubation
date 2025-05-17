"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiCheckCircle, FiArrowRight, FiMail, FiCalendar, FiClock } from 'react-icons/fi';

const SuccessStep: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Generate a random proposal ID
  const proposalId = `FWU-${Math.floor(10000 + Math.random() * 90000)}`;
  
  // Current date + 14 days for review period
  const reviewDate = new Date();
  reviewDate.setDate(reviewDate.getDate() + 14);
  const formattedReviewDate = reviewDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
        <FiCheckCircle className="text-green-500" size={40} />
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Proposal Submitted Successfully!</h2>
      <p className="text-xl text-gray-600 mb-8">
        Thank you for submitting your project proposal to the Far Western University Incubation Center.
      </p>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 max-w-md mx-auto">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Proposal ID</p>
            <p className="text-lg font-bold text-purple-600">{proposalId}</p>
          </div>
          
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center">
              <FiCalendar className="text-purple-500 mr-2" />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-500">Submission Date</p>
                <p className="text-gray-800">{new Date().toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <FiClock className="text-purple-500 mr-2" />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-500">Review By</p>
                <p className="text-gray-800">{formattedReviewDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 flex items-start max-w-md mx-auto">
        <FiMail className="text-blue-500 mt-1 mr-4 flex-shrink-0" size={24} />
        <div className="text-left">
          <h3 className="font-medium text-blue-800 mb-1">Check Your Email</h3>
          <p className="text-blue-700 text-sm">
            We&apos;ve sent a confirmation email with your proposal details. Please keep this for your records.
          </p>
        </div>
      </div>
      
      <p className="text-gray-600 mb-8">
        Our team will review your proposal and get back to you within 14 business days.
        If you have any questions, please contact us at <a href="mailto:incubation@fwu.edu.np" className="text-purple-600 hover:text-purple-800 transition-colors">incubation@fwu.edu.np</a>.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link 
          href="/projects" 
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
        >
          Explore Projects <FiArrowRight className="ml-2" />
        </Link>
        
        <Link 
          href="/" 
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessStep;
