"use client"
import { ProposalFormData } from '../MultiStepForm';
import { FiPlus, FiTrash2 } from 'react-icons/fi';

interface TeamInfoStepProps {
  formData: ProposalFormData;
  updateFormData: (data: Partial<ProposalFormData>) => void;
  errors: Record<string, string>;
}

const TeamInfoStep: React.FC<TeamInfoStepProps> = ({ formData, updateFormData, errors }) => {
  const addTeamMember = () => {
    updateFormData({
      teamMembers: [...formData.teamMembers, { name: '', role: '', expertise: '' }]
    });
  };

  const removeTeamMember = (index: number) => {
    const updatedMembers = [...formData.teamMembers];
    updatedMembers.splice(index, 1);
    updateFormData({ teamMembers: updatedMembers });
  };

  const updateTeamMember = (index: number, field: string, value: string) => {
    const updatedMembers = [...formData.teamMembers];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    updateFormData({ teamMembers: updatedMembers });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Information</h2>
      <p className="text-gray-600 mb-8">
        Please provide details about the team members who will be working on this project.
      </p>
      
      <div className="space-y-8">
        {/* Team Lead Information */}
        <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Team Lead / Principal Investigator</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Team Lead Name */}
            <div>
              <label htmlFor="teamLeadName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="teamLeadName"
                value={formData.teamLeadName}
                onChange={(e) => updateFormData({ teamLeadName: e.target.value })}
                className={`w-full px-4 py-2 border ${errors.teamLeadName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                placeholder="Enter your full name"
              />
              {errors.teamLeadName && (
                <p className="mt-1 text-sm text-red-500">{errors.teamLeadName}</p>
              )}
            </div>
            
            {/* Team Lead Email */}
            <div>
              <label htmlFor="teamLeadEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="teamLeadEmail"
                value={formData.teamLeadEmail}
                onChange={(e) => updateFormData({ teamLeadEmail: e.target.value })}
                className={`w-full px-4 py-2 border ${errors.teamLeadEmail ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                placeholder="Enter your email address"
              />
              {errors.teamLeadEmail && (
                <p className="mt-1 text-sm text-red-500">{errors.teamLeadEmail}</p>
              )}
            </div>
            
            {/* Team Lead Phone */}
            <div>
              <label htmlFor="teamLeadPhone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="teamLeadPhone"
                value={formData.teamLeadPhone}
                onChange={(e) => updateFormData({ teamLeadPhone: e.target.value })}
                className={`w-full px-4 py-2 border ${errors.teamLeadPhone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                placeholder="Enter your phone number"
              />
              {errors.teamLeadPhone && (
                <p className="mt-1 text-sm text-red-500">{errors.teamLeadPhone}</p>
              )}
            </div>
            
            {/* Team Lead Affiliation */}
            <div>
              <label htmlFor="teamLeadAffiliation" className="block text-sm font-medium text-gray-700 mb-1">
                Affiliation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="teamLeadAffiliation"
                value={formData.teamLeadAffiliation}
                onChange={(e) => updateFormData({ teamLeadAffiliation: e.target.value })}
                className={`w-full px-4 py-2 border ${errors.teamLeadAffiliation ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                placeholder="University, Department, or Organization"
              />
              {errors.teamLeadAffiliation && (
                <p className="mt-1 text-sm text-red-500">{errors.teamLeadAffiliation}</p>
              )}
            </div>
          </div>
        </div>
        
        {/* Team Members */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Team Members</h3>
            <button
              type="button"
              onClick={addTeamMember}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center text-sm"
            >
              <FiPlus className="mr-2" /> Add Team Member
            </button>
          </div>
          
          {formData.teamMembers.map((member, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium text-gray-700">Team Member {index + 1}</h4>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeTeamMember(index)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <FiTrash2 size={18} />
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Member Name */}
                <div>
                  <label htmlFor={`memberName${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id={`memberName${index}`}
                    value={member.name}
                    onChange={(e) => updateTeamMember(index, 'name', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Enter full name"
                  />
                </div>
                
                {/* Member Role */}
                <div>
                  <label htmlFor={`memberRole${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Role in Project
                  </label>
                  <input
                    type="text"
                    id={`memberRole${index}`}
                    value={member.role}
                    onChange={(e) => updateTeamMember(index, 'role', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="e.g., Researcher, Developer"
                  />
                </div>
                
                {/* Member Expertise */}
                <div>
                  <label htmlFor={`memberExpertise${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Area of Expertise
                  </label>
                  <input
                    type="text"
                    id={`memberExpertise${index}`}
                    value={member.expertise}
                    onChange={(e) => updateTeamMember(index, 'expertise', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="e.g., Software Development, Agriculture"
                  />
                </div>
              </div>
              
              {errors[`teamMember${index}`] && (
                <p className="mt-2 text-sm text-red-500">{errors[`teamMember${index}`]}</p>
              )}
            </div>
          ))}
          
          {formData.teamMembers.length === 0 && (
            <p className="text-gray-500 italic">No team members added yet.</p>
          )}
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Team lead information is required. Additional team members are optional but recommended for collaborative projects.
        </p>
      </div>
    </div>
  );
};

export default TeamInfoStep;
