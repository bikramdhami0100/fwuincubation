"use client"
import { ProposalFormData } from '../MultiStepForm';
import { FiCheck, FiFile } from 'react-icons/fi';

interface ReviewStepProps {
  formData: ProposalFormData;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ formData }) => {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Your Proposal</h2>
      <p className="text-gray-600 mb-8">
        Please review all the information before submitting your proposal. You can go back to make changes if needed.
      </p>
      
      <div className="space-y-8">
        {/* Project Details Review */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-purple-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-purple-800">Project Details</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Project Title</p>
                <p className="text-gray-800">{formData.projectTitle}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Category</p>
                <p className="text-gray-800">{formData.projectCategory}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Estimated Duration</p>
                <p className="text-gray-800">{formData.projectDuration}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Estimated Budget</p>
                <p className="text-gray-800">{formData.projectBudget}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Project Summary</p>
              <p className="text-gray-800 whitespace-pre-line">{formData.projectSummary}</p>
            </div>
          </div>
        </div>
        
        {/* Team Information Review */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-purple-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-purple-800">Team Information</h3>
          </div>
          <div className="p-6 space-y-6">
            {/* Team Lead */}
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Team Lead / Principal Investigator</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Name</p>
                  <p className="text-gray-800">{formData.teamLeadName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-gray-800">{formData.teamLeadEmail}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-gray-800">{formData.teamLeadPhone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Affiliation</p>
                  <p className="text-gray-800">{formData.teamLeadAffiliation}</p>
                </div>
              </div>
            </div>
            
            {/* Team Members */}
            {formData.teamMembers.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Team Members</h4>
                <div className="space-y-4">
                  {formData.teamMembers.map((member, index) => (
                    member.name && (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div>
                            <p className="text-sm font-medium text-gray-500">Name</p>
                            <p className="text-gray-800">{member.name}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Role</p>
                            <p className="text-gray-800">{member.role}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Expertise</p>
                            <p className="text-gray-800">{member.expertise}</p>
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Documents Review */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-purple-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-purple-800">Uploaded Documents</h3>
          </div>
          <div className="p-6 space-y-4">
            {/* Main Proposal */}
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Project Proposal Document</h4>
              {formData.proposalFile ? (
                <div className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <FiFile className="text-purple-500 mr-3" size={20} />
                  <div>
                    <p className="font-medium text-gray-800">{formData.proposalFile.name}</p>
                    <p className="text-sm text-gray-500">{formatFileSize(formData.proposalFile.size)}</p>
                  </div>
                </div>
              ) : (
                <p className="text-red-500">No proposal document uploaded</p>
              )}
            </div>
            
            {/* Additional Documents */}
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Additional Documents</h4>
              {formData.additionalDocuments.length > 0 ? (
                <div className="space-y-2">
                  {formData.additionalDocuments.map((file, index) => (
                    <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <FiFile className="text-gray-500 mr-3" size={20} />
                      <div>
                        <p className="font-medium text-gray-800">{file.name}</p>
                        <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No additional documents uploaded</p>
              )}
            </div>
          </div>
        </div>
        
        {/* Terms Agreement */}
        <div className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200">
          <FiCheck className="text-green-500 mr-3" size={20} />
          <p className="text-green-800">
            You have agreed to the terms and conditions for submitting this proposal.
          </p>
        </div>
        
        {/* Final Confirmation */}
        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-yellow-800">
            <strong>Important:</strong> Once submitted, you will receive a confirmation email with a copy of your proposal. You can make changes to your submission by contacting the FWU Incubation Center directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
