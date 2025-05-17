"use client"
import { ProposalFormData } from '../MultiStepForm';
import { useState } from 'react';
import { FiUpload, FiFile, FiX, FiDownload } from 'react-icons/fi';

interface ProposalUploadStepProps {
  formData: ProposalFormData;
  updateFormData: (data: Partial<ProposalFormData>) => void;
  errors: Record<string, string>;
}

const ProposalUploadStep: React.FC<ProposalUploadStepProps> = ({ formData, updateFormData, errors }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleMainFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      updateFormData({ proposalFile: file });
    }
  };

  const handleMainFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      updateFormData({ proposalFile: file });
    }
  };

  const handleAdditionalFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      updateFormData({ additionalDocuments: [...formData.additionalDocuments, ...newFiles] });
    }
  };

  const removeAdditionalFile = (index: number) => {
    const updatedFiles = [...formData.additionalDocuments];
    updatedFiles.splice(index, 1);
    updateFormData({ additionalDocuments: updatedFiles });
  };

  const removeMainFile = () => {
    updateFormData({ proposalFile: null });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Documents</h2>
      <p className="text-gray-600 mb-8">
        Please upload your detailed project proposal and any supporting documents.
      </p>
      
      <div className="space-y-8">
        {/* Main Proposal Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Proposal Document <span className="text-red-500">*</span>
          </label>
          <div 
            className={`border-2 border-dashed rounded-lg p-6 ${
              dragActive ? 'border-purple-500 bg-purple-50' : errors.proposalFile ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-gray-50'
            } transition-colors text-center cursor-pointer`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleMainFileDrop}
            onClick={() => document.getElementById('proposalFile')?.click()}
          >
            <input
              type="file"
              id="proposalFile"
              onChange={handleMainFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx"
            />
            
            {formData.proposalFile ? (
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <FiFile className="text-purple-500 mr-3" size={24} />
                  <div className="text-left">
                    <p className="font-medium text-gray-800">{formData.proposalFile.name}</p>
                    <p className="text-sm text-gray-500">{formatFileSize(formData.proposalFile.size)}</p>
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={(e) => {
                    e.stopPropagation();
                    removeMainFile();
                  }}
                  className="p-1 bg-red-100 text-red-500 rounded-full hover:bg-red-200 transition-colors"
                >
                  <FiX size={18} />
                </button>
              </div>
            ) : (
              <div>
                <FiUpload className="mx-auto text-gray-400 mb-3" size={36} />
                <p className="text-gray-600 mb-1">Drag and drop your file here, or click to browse</p>
                <p className="text-sm text-gray-500">Supported formats: PDF, DOC, DOCX (Max 10MB)</p>
              </div>
            )}
          </div>
          {errors.proposalFile && (
            <p className="mt-1 text-sm text-red-500">{errors.proposalFile}</p>
          )}
        </div>
        
        {/* Additional Documents */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Supporting Documents (Optional)
          </label>
          <div className="border rounded-lg p-6 bg-gray-50">
            <div className="flex items-center justify-center mb-4">
              <label htmlFor="additionalFiles" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center cursor-pointer">
                <FiUpload className="mr-2" />
                Select Files
                <input
                  type="file"
                  id="additionalFiles"
                  onChange={handleAdditionalFileChange}
                  className="hidden"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.xlsx,.xls"
                />
              </label>
            </div>
            
            {formData.additionalDocuments.length > 0 ? (
              <div className="space-y-2">
                {formData.additionalDocuments.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <FiFile className="text-gray-500 mr-3" size={20} />
                      <div className="text-left">
                        <p className="font-medium text-gray-800">{file.name}</p>
                        <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => removeAdditionalFile(index)}
                      className="p-1 bg-red-100 text-red-500 rounded-full hover:bg-red-200 transition-colors"
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 italic">No additional documents uploaded</p>
            )}
          </div>
        </div>
        
        {/* Download Template */}
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start">
            <FiDownload className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-medium text-blue-800 mb-1">Need a proposal template?</h3>
              <p className="text-sm text-blue-700 mb-2">
                Download our standard proposal template to ensure your submission includes all required information.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Download Template <FiDownload className="ml-1" size={14} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Terms Agreement */}
        <div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="agreementChecked"
                type="checkbox"
                checked={formData.agreementChecked}
                onChange={(e) => updateFormData({ agreementChecked: e.target.checked })}
                className={`h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 ${errors.agreementChecked ? 'border-red-500' : ''}`}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="agreementChecked" className="font-medium text-gray-700">
                I agree to the terms and conditions <span className="text-red-500">*</span>
              </label>
              <p className="text-gray-500">
                By submitting this proposal, I confirm that all information provided is accurate and that I have the authority to submit this proposal on behalf of the team.
              </p>
              {errors.agreementChecked && (
                <p className="mt-1 text-sm text-red-500">{errors.agreementChecked}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalUploadStep;
