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
      <div className="text-center py-10">
        <FiCheckCircle className="mx-auto text-6xl text-green-500 mb-4" />
        <h3 className="text-2xl font-semibold text-brand-dark mb-2">Application Submitted!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for applying to the FWU Incubation Center. We have received your application and will
          be in touch soon regarding the next steps.
        </p>
        <button
          onClick={() => setSubmissionStatus('idle')}
          className="bg-brand-primary hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      {/* Applicant Details */}
      <fieldset className="border border-gray-300 p-6 rounded-lg">
        <legend className="text-lg font-semibold text-brand-dark px-2">Applicant Details</legend>
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
      </fieldset>

      {/* Team Member Details */}
      <fieldset className="border border-gray-300 p-6 rounded-lg">
        <legend className="text-lg font-semibold text-brand-dark px-2">Team Details</legend>
        {Array.from({ length: teamMemberCount }).map((_, index) => (
          <div key={index} className="mb-4 p-4 border border-dashed border-gray-200 rounded-md relative">
            <h4 className="text-md font-medium text-gray-700 mb-2">Team Member {index + 1}</h4>
            {index > 0 && ( // Allow removing only if not the first member
              <button
                type="button"
                onClick={() => removeTeamMember(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 p-1"
                aria-label="Remove Team Member"
              >
                <FiTrash2 size={18} />
              </button>
            )}
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
            className="mt-2 flex items-center text-sm text-brand-primary hover:text-brand-accent font-medium"
          >
            <FiPlusCircle className="mr-2" /> Add Another Member (Max 5)
          </button>
        )}
      </fieldset>


      {/* Startup Idea */}
      <fieldset className="border border-gray-300 p-6 rounded-lg">
        <legend className="text-lg font-semibold text-brand-dark px-2">Startup Idea</legend>
        <FormField
          as="textarea" // Use 'as' prop here
          type="textarea" // type still needed for FormField's generic constraint
          name="startupIdea"
          label="Startup Idea Summary"
          register={register}
          error={errors.startupIdea}
          placeholder="Briefly describe your startup idea, the problem it solves, and your proposed solution (max 500 words)."
          rows={6}
          isRequired
        />
      </fieldset>

      {/* Proposal Upload */}
      <fieldset className="border border-gray-300 p-6 rounded-lg">
        <legend className="text-lg font-semibold text-brand-dark px-2">Proposal Document</legend>
        <label htmlFor="proposalFile" className="block text-sm font-medium text-gray-700 mb-1">
          Upload Proposal (PDF, max 5MB) <span className="text-red-500">*</span>
        </label>
        <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 ${errors.proposalFile ? 'border-red-400' : 'border-gray-300'} border-dashed rounded-md`}>
          <div className="space-y-1 text-center">
            <FiUploadCloud className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="proposalFile"
                className="relative cursor-pointer bg-white rounded-md font-medium text-brand-primary hover:text-brand-accent focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-primary"
              >
                <span>Upload a file</span>
                <input
                  id="proposalFile"
                  type="file"
                  className="sr-only"
                  accept=".pdf"
                  {...register("proposalFile")}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PDF up to 5MB</p>
          </div>
        </div>
        {fileName && <p className="mt-2 text-sm text-gray-700">Selected file: {fileName}</p>}
        {errors.proposalFile && <p className="mt-1 text-xs text-red-500">{errors.proposalFile.message}</p>}
      </fieldset>

      {/* Submission Button & Error Message */}
      {submissionStatus === 'error' && (
        <div className="flex items-center p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
          <FiAlertCircle className="mr-2" />
          <span><strong>Error:</strong> Submission failed. Please check your input and try again.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || submissionStatus === 'submitting'}
        className="w-full flex justify-center items-center bg-brand-accent hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-colors duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting || submissionStatus === 'submitting' ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </>
        ) : (
          'Submit Application'
        )}
      </button>
    </form>
  );
};

export default ApplicationForm;