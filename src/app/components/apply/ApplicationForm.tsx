"use client"
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Path } from 'react-hook-form';
import FormField from './FormField';
import { FiCheckCircle, FiAlertCircle, FiUploadCloud, FiPlusCircle, FiTrash2 } from 'react-icons/fi';

// Define the structure of your form data
interface FormValues {
  applicantName: string;
  email: string;
  phone: string;
  teamMembers: { name: string; role: string }[];
  startupIdea: string;
  proposalFile?: FileList; // FileList for file input
}

const ApplicationForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState<string | null>(null);
  const [teamMemberCount, setTeamMemberCount] = useState(1); // Start with one team member field

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
    reset, // To reset the form
    watch // To watch field values, e.g., for file input
  } = useForm<FormValues>({
    defaultValues: {
      applicantName: '',
      email: '',
      phone: '',
      teamMembers: [{ name: '', role: '' }],
      startupIdea: '',
    },
    // Form configuration
    mode: 'onBlur',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    shouldUnregister: false,
    shouldFocusError: true,
  });

  // Register fields with validation rules
  useEffect(() => {
    // Register fields with validation
    register("applicantName", { required: "Full name is required." });
    register("email", {
      required: "Email is required.",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address."
      }
    });
    register("phone", {
      required: "Phone number is required.",
      pattern: {
        value: /^[0-9+-]{10,15}$/,
        message: "Invalid phone number format."
      }
    });
    register("startupIdea", {
      required: "Startup idea summary is required.",
      maxLength: {
        value: 3000,
        message: "Summary should be less than 3000 characters (approx 500 words)."
      }
    });
    register("proposalFile", {
      required: "Proposal PDF is required.",
      validate: {
        lessThan5MB: (files: FileList | undefined) =>
          !files || !files[0] || files[0].size < 5 * 1024 * 1024 || 'File must be less than 5MB.',
        isPDF: (files: FileList | undefined) =>
          !files || !files[0] || files[0].type === "application/pdf" || 'Only PDF files are accepted.',
      }
    });

    // Register team members fields
    for (let i = 0; i < 5; i++) {
      register(`teamMembers.${i}.name` as Path<FormValues>, {
        required: i === 0 ? "First team member's name is required." : false
      });
      register(`teamMembers.${i}.role` as Path<FormValues>, {
        required: i === 0 ? "First team member's role is required." : false
      });
    }
  }, [register]);

  // Watch the file input to update the displayed file name
  const proposalFile = watch("proposalFile");
  useEffect(() => {
    if (proposalFile && proposalFile.length > 0) {
      setFileName(proposalFile[0].name);
    } else {
      setFileName(null);
    }
  }, [proposalFile]);

  const addTeamMember = () => {
    if (teamMemberCount < 5) { // Limit max team members
      setTeamMemberCount(prevCount => prevCount + 1);
      // Note: react-hook-form's `useFieldArray` is better for dynamic fields.
      // This is a simpler approach for a fixed max number.
      // For truly dynamic, consider `useFieldArray`.
    }
  };

  const removeTeamMember = (_index: number) => {
    console.log(_index)
    if (teamMemberCount > 1) {
      // This is tricky to do correctly without useFieldArray when just incrementing count
      // For now, we'll just reduce the count, but data for removed fields will persist
      // until submission unless explicitly cleared.
      // A real implementation would use useFieldArray for proper removal.
      setTeamMemberCount(prevCount => prevCount - 1);
      // To actually clear data with setValue, we would need to:
      // setValue(`teamMembers.${_index}.name`, '');
      // setValue(`teamMembers.${_index}.role`, '');
    }
  };


  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmissionStatus('submitting');
    console.log("Form Data:", data);
    if (data.proposalFile && data.proposalFile.length > 0) {
      console.log("Proposal File:", data.proposalFile[0]);
    }

    // --- SIMULATE API CALL ---
    // In a real app, you would use FormData to send the file
    // const formData = new FormData();
    // Object.keys(data).forEach(key => {
    //   if (key === 'proposalFile' && data.proposalFile && data.proposalFile[0]) {
    //     formData.append(key, data.proposalFile[0]);
    //   } else if (key === 'teamMembers') {
    //      formData.append(key, JSON.stringify(data.teamMembers));
    //   }
    //   else {
    //     formData.append(key, (data as any)[key]);
    //   }
    // });
    // try {
    //   const response = await fetch('/api/apply', { method: 'POST', body: formData });
    //   if (!response.ok) throw new Error('Submission failed');
    //   setSubmissionStatus('success');
    //   reset(); // Reset form on success
    //   setFileName(null);
    //   setTeamMemberCount(1);
    // } catch (error) {
    //   setSubmissionStatus('error');
    //   console.error("Submission error:", error);
    // }
    // --- END SIMULATION ---

    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Randomly succeed or fail for demo
    if (Math.random() > 0.2) {
      setSubmissionStatus('success');
      reset();
      setFileName(null);
      setTeamMemberCount(1);
    } else {
      setSubmissionStatus('error');
    }
  };

  if (submissionStatus === 'success') {
    return (
      <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
          <FiCheckCircle className="text-green-500 text-4xl" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Application Submitted!</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
          Thank you for applying to the FWU Incubation Center. We have received your application and will
          be in touch soon regarding the next steps.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm text-gray-500 mb-2">
            You will receive a confirmation email shortly.
          </p>
          <button
            onClick={() => setSubmissionStatus('idle')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105 transform"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10" noValidate>
      {/* Applicant Details */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-blue-50 px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 flex items-center">
            <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full text-blue-600 mr-3 text-sm">1</span>
            Applicant Details
          </h3>
        </div>
        <div className="p-6">
          <FormField
            type="text"
            name="applicantName"
            label="Full Name"
            register={register}
            error={errors.applicantName}
            placeholder="e.g., Fatima Ahmed"
            isRequired
          />
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              type="email"
              name="email"
              label="Email Address"
              register={register}
              error={errors.email}
              placeholder="you@example.com"
              isRequired
            />
            <FormField
              type="tel"
              name="phone"
              label="Phone Number"
              register={register}
              error={errors.phone}
              placeholder="e.g., 0300-1234567"
              isRequired
            />
          </div>
        </div>
      </div>

      {/* Team Member Details */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-blue-50 px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 flex items-center">
            <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full text-blue-600 mr-3 text-sm">2</span>
            Team Details
          </h3>
        </div>
        <div className="p-6">
          {Array.from({ length: teamMemberCount }).map((_, index) => (
            <div
              key={index}
              className="mb-6 p-6 bg-gray-50 rounded-xl relative border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-md font-bold text-gray-800 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center mr-2">
                    {index + 1}
                  </span>
                  Team Member {index + 1}
                </h4>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeTeamMember(index)}
                    className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded-full transition-colors"
                    aria-label="Remove Team Member"
                  >
                    <FiTrash2 size={18} />
                  </button>
                )}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  type="text"
                  name={`teamMembers.${index}.name` as Path<FormValues>}
                  label="Member Name"
                  register={register}
                  error={errors.teamMembers?.[index]?.name}
                  placeholder="e.g., Ali Khan"
                  isRequired={index === 0}
                />
                <FormField
                  type="text"
                  name={`teamMembers.${index}.role` as Path<FormValues>}
                  label="Role in Startup"
                  register={register}
                  error={errors.teamMembers?.[index]?.role}
                  placeholder="e.g., CTO, Marketing Lead"
                  isRequired={index === 0}
                />
              </div>
            </div>
          ))}
          {teamMemberCount < 5 && (
            <button
              type="button"
              onClick={addTeamMember}
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium py-2 px-4 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
            >
              <FiPlusCircle className="mr-2" /> Add Another Team Member (Max 5)
            </button>
          )}
        </div>
      </div>

      {/* Startup Idea */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-blue-50 px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 flex items-center">
            <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full text-blue-600 mr-3 text-sm">3</span>
            Startup Idea
          </h3>
        </div>
        <div className="p-6">
          <FormField
            as="textarea"
            type="textarea"
            name="startupIdea"
            label="Startup Idea Summary"
            register={register}
            error={errors.startupIdea}
            placeholder="Briefly describe your startup idea, the problem it solves, and your proposed solution (max 500 words)."
            rows={6}
            isRequired
          />
        </div>
      </div>

      {/* Proposal Upload */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-blue-50 px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 flex items-center">
            <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full text-blue-600 mr-3 text-sm">4</span>
            Proposal Document
          </h3>
        </div>
        <div className="p-6">
          <label htmlFor="proposalFile" className="block text-sm font-medium text-gray-700 mb-2">
            Upload Proposal (PDF, max 5MB) <span className="text-red-500">*</span>
          </label>
          <div
            className={`mt-1 flex justify-center px-6 pt-6 pb-8 border-2 ${
              errors.proposalFile ? 'border-red-400 bg-red-50' : 'border-blue-200 bg-blue-50'
            } border-dashed rounded-xl hover:bg-blue-100 transition-colors cursor-pointer`}
          >
            <div className="space-y-2 text-center">
              <div className="mx-auto h-16 w-16 text-blue-500 bg-white rounded-full flex items-center justify-center shadow-sm">
                <FiUploadCloud className="h-8 w-8" />
              </div>
              <div className="flex flex-col text-sm text-gray-600">
                <label
                  htmlFor="proposalFile"
                  className="relative cursor-pointer font-medium text-blue-600 hover:text-blue-700"
                >
                  <span>Click to upload a file</span>
                  <input
                    id="proposalFile"
                    type="file"
                    className="sr-only"
                    accept=".pdf"
                    {...register("proposalFile")}
                  />
                </label>
                <p className="text-gray-500">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF up to 5MB</p>
            </div>
          </div>
          {fileName && (
            <div className="mt-3 flex items-center text-sm text-gray-700 bg-blue-50 p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Selected file: <span className="font-medium ml-1">{fileName}</span>
            </div>
          )}
          {errors.proposalFile && <p className="mt-2 text-sm text-red-600">{errors.proposalFile.message}</p>}
        </div>
      </div>

      {/* Submission Button & Error Message */}
      {submissionStatus === 'error' && (
        <div className="flex items-center p-5 text-sm text-red-700 bg-red-100 rounded-xl border border-red-200" role="alert">
          <FiAlertCircle className="text-xl mr-3 text-red-500" />
          <div>
            <p className="font-bold">Submission Failed</p>
            <p>Please check your input and try again. If the problem persists, contact our support team.</p>
          </div>
        </div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting || submissionStatus === 'submitting'}
          className="w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all duration-300 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting || submissionStatus === 'submitting' ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting Application...
            </>
          ) : (
            'Submit Application'
          )}
        </button>
        <p className="text-center text-gray-500 text-sm mt-4">
          By submitting this application, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
        </p>
      </div>
    </form>
  );
};

export default ApplicationForm;