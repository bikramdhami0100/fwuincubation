"use client"
import { ProposalFormData } from '../MultiStepForm';

interface ProjectDetailsStepProps {
  formData: ProposalFormData;
  updateFormData: (data: Partial<ProposalFormData>) => void;
  errors: Record<string, string>;
}

const ProjectDetailsStep: React.FC<ProjectDetailsStepProps> = ({ formData, updateFormData, errors }) => {
  const projectCategories = [
    'Technology',
    'Agriculture',
    'Healthcare',
    'Education',
    'Environment',
    'Social Enterprise',
    'Other'
  ];

  const projectDurations = [
    '3-6 months',
    '6-12 months',
    '1-2 years',
    'More than 2 years'
  ];

  const budgetRanges = [
    'Less than NPR 100,000',
    'NPR 100,000 - 500,000',
    'NPR 500,000 - 1,000,000',
    'NPR 1,000,000 - 5,000,000',
    'More than NPR 5,000,000'
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h2>
      <p className="text-gray-600 mb-8">
        Please provide detailed information about your project proposal. This will help us understand your idea better.
      </p>
      
      <div className="space-y-6">
        {/* Project Title */}
        <div>
          <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700 mb-1">
            Project Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="projectTitle"
            value={formData.projectTitle}
            onChange={(e) => updateFormData({ projectTitle: e.target.value })}
            className={`w-full px-4 py-2 border ${errors.projectTitle ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
            placeholder="Enter a descriptive title for your project"
          />
          {errors.projectTitle && (
            <p className="mt-1 text-sm text-red-500">{errors.projectTitle}</p>
          )}
        </div>
        
        {/* Project Category */}
        <div>
          <label htmlFor="projectCategory" className="block text-sm font-medium text-gray-700 mb-1">
            Project Category <span className="text-red-500">*</span>
          </label>
          <select
            id="projectCategory"
            value={formData.projectCategory}
            onChange={(e) => updateFormData({ projectCategory: e.target.value })}
            className={`w-full px-4 py-2 border ${errors.projectCategory ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
          >
            <option value="">Select a category</option>
            {projectCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          {errors.projectCategory && (
            <p className="mt-1 text-sm text-red-500">{errors.projectCategory}</p>
          )}
        </div>
        
        {/* Project Summary */}
        <div>
          <label htmlFor="projectSummary" className="block text-sm font-medium text-gray-700 mb-1">
            Project Summary <span className="text-red-500">*</span>
          </label>
          <textarea
            id="projectSummary"
            value={formData.projectSummary}
            onChange={(e) => updateFormData({ projectSummary: e.target.value })}
            rows={5}
            className={`w-full px-4 py-2 border ${errors.projectSummary ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
            placeholder="Provide a brief summary of your project (max 500 words)"
          ></textarea>
          {errors.projectSummary && (
            <p className="mt-1 text-sm text-red-500">{errors.projectSummary}</p>
          )}
          <p className="mt-1 text-sm text-gray-500">
            {formData.projectSummary.length > 0 ? `${formData.projectSummary.split(' ').length} words` : '0 words'}
          </p>
        </div>
        
        {/* Project Duration */}
        <div>
          <label htmlFor="projectDuration" className="block text-sm font-medium text-gray-700 mb-1">
            Estimated Project Duration <span className="text-red-500">*</span>
          </label>
          <select
            id="projectDuration"
            value={formData.projectDuration}
            onChange={(e) => updateFormData({ projectDuration: e.target.value })}
            className={`w-full px-4 py-2 border ${errors.projectDuration ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
          >
            <option value="">Select duration</option>
            {projectDurations.map((duration) => (
              <option key={duration} value={duration}>{duration}</option>
            ))}
          </select>
          {errors.projectDuration && (
            <p className="mt-1 text-sm text-red-500">{errors.projectDuration}</p>
          )}
        </div>
        
        {/* Project Budget */}
        <div>
          <label htmlFor="projectBudget" className="block text-sm font-medium text-gray-700 mb-1">
            Estimated Budget <span className="text-red-500">*</span>
          </label>
          <select
            id="projectBudget"
            value={formData.projectBudget}
            onChange={(e) => updateFormData({ projectBudget: e.target.value })}
            className={`w-full px-4 py-2 border ${errors.projectBudget ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
          >
            <option value="">Select budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
          {errors.projectBudget && (
            <p className="mt-1 text-sm text-red-500">{errors.projectBudget}</p>
          )}
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> All fields marked with an asterisk (*) are required. Please provide accurate information to help us evaluate your proposal effectively.
        </p>
      </div>
    </div>
  );
};

export default ProjectDetailsStep;
