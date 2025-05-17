"use client"
import { useState, useEffect } from 'react';
import ProjectDetailsStep from './steps/ProjectDetailsStep';
import TeamInfoStep from './steps/TeamInfoStep';
import ProposalUploadStep from './steps/ProposalUploadStep';
import ReviewStep from './steps/ReviewStep';
import SuccessStep from './steps/SuccessStep';
import { FiChevronRight, FiChevronLeft, FiCheck } from 'react-icons/fi';

// Form data interface
export interface ProposalFormData {
  // Project Details
  projectTitle: string;
  projectCategory: string;
  projectSummary: string;
  projectDuration: string;
  projectBudget: string;
  
  // Team Information
  teamLeadName: string;
  teamLeadEmail: string;
  teamLeadPhone: string;
  teamLeadAffiliation: string;
  teamMembers: {
    name: string;
    role: string;
    expertise: string;
  }[];
  
  // Proposal Upload
  proposalFile: File | null;
  additionalDocuments: File[];
  agreementChecked: boolean;
}

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<ProposalFormData>({
    // Project Details
    projectTitle: '',
    projectCategory: '',
    projectSummary: '',
    projectDuration: '',
    projectBudget: '',
    
    // Team Information
    teamLeadName: '',
    teamLeadEmail: '',
    teamLeadPhone: '',
    teamLeadAffiliation: '',
    teamMembers: [{ name: '', role: '', expertise: '' }],
    
    // Proposal Upload
    proposalFile: null,
    additionalDocuments: [],
    agreementChecked: false,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (step === 1) {
      // Validate Project Details
      if (!formData.projectTitle.trim()) newErrors.projectTitle = 'Project title is required';
      if (!formData.projectCategory) newErrors.projectCategory = 'Please select a category';
      if (!formData.projectSummary.trim()) newErrors.projectSummary = 'Project summary is required';
      if (!formData.projectDuration) newErrors.projectDuration = 'Project duration is required';
      if (!formData.projectBudget) newErrors.projectBudget = 'Estimated budget is required';
    } else if (step === 2) {
      // Validate Team Information
      if (!formData.teamLeadName.trim()) newErrors.teamLeadName = 'Team lead name is required';
      if (!formData.teamLeadEmail.trim()) newErrors.teamLeadEmail = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.teamLeadEmail)) newErrors.teamLeadEmail = 'Email is invalid';
      if (!formData.teamLeadPhone.trim()) newErrors.teamLeadPhone = 'Phone number is required';
      if (!formData.teamLeadAffiliation.trim()) newErrors.teamLeadAffiliation = 'Affiliation is required';
      
      // Validate team members
      formData.teamMembers.forEach((member, index) => {
        if (member.name.trim() && (!member.role.trim() || !member.expertise.trim())) {
          newErrors[`teamMember${index}`] = 'All team member fields are required';
        }
      });
    } else if (step === 3) {
      // Validate Proposal Upload
      if (!formData.proposalFile) newErrors.proposalFile = 'Proposal document is required';
      if (!formData.agreementChecked) newErrors.agreementChecked = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async () => {
    if (validateStep(currentStep)) {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setCurrentStep(5); // Move to success step
      window.scrollTo(0, 0);
    }
  };

  const updateFormData = (newData: Partial<ProposalFormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 2:
        return <TeamInfoStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 3:
        return <ProposalUploadStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 4:
        return <ReviewStep formData={formData} />;
      case 5:
        return <SuccessStep />;
      default:
        return null;
    }
  };

  const steps = [
    { number: 1, name: 'Project Details' },
    { number: 2, name: 'Team Information' },
    { number: 3, name: 'Upload Documents' },
    { number: 4, name: 'Review & Submit' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Progress Steps */}
          {currentStep < 5 && (
            <div className="mb-12">
              <div className="flex justify-between items-center">
                {steps.map((step) => (
                  <div key={step.number} className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                        currentStep === step.number 
                          ? 'bg-purple-600' 
                          : currentStep > step.number 
                            ? 'bg-green-500' 
                            : 'bg-gray-300'
                      }`}
                    >
                      {currentStep > step.number ? <FiCheck size={20} /> : step.number}
                    </div>
                    <span className={`text-sm mt-2 ${currentStep === step.number ? 'text-purple-600 font-medium' : 'text-gray-500'}`}>
                      {step.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative mt-4">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-full"></div>
                <div 
                  className="absolute top-0 left-0 h-1 bg-purple-600 rounded-full transition-all duration-500"
                  style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
          
          {/* Form Steps */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            {renderStep()}
            
            {/* Navigation Buttons */}
            {currentStep < 5 && (
              <div className="mt-8 flex justify-between">
                {currentStep > 1 ? (
                  <button
                    onClick={handlePrevious}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center"
                  >
                    <FiChevronLeft className="mr-2" /> Previous
                  </button>
                ) : (
                  <div></div> // Empty div to maintain flex spacing
                )}
                
                {currentStep < 4 ? (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
                  >
                    Next <FiChevronRight className="ml-2" />
                  </button>
                ) : currentStep === 4 ? (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>Submit Proposal</>
                    )}
                  </button>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiStepForm;
