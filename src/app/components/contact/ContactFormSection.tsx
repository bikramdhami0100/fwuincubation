// components/contact/ContactFormSection.tsx
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
// Assuming FormField is in a shared location or copy it here if it's specific
// For this example, let's assume a simplified FormField or define inputs directly.

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactFormSection = () => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>();

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setSubmissionStatus('submitting');
    console.log("Contact Form Data:", data);

    // --- SIMULATE API CALL ---
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (Math.random() > 0.2) { // Simulate success
      setSubmissionStatus('success');
      reset();
    } else { // Simulate error
      setSubmissionStatus('error');
    }
    // --- END SIMULATION ---
  };

  if (submissionStatus === 'success') {
    return (
      <div className="bg-white p-8 rounded-xl shadow-xl text-center">
        <FiCheckCircle className="mx-auto text-6xl text-green-500 mb-4" />
        <h3 className="text-2xl font-semibold text-brand-dark mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for contacting us. We will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setSubmissionStatus('idle')}
          className="bg-brand-primary hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-brand-dark mb-2">Send Us a Message</h2>
      <p className="text-gray-600 mb-8">
        Have a question or want to learn more? Fill out the form below.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 ${errors.name ? 'focus:ring-red-300' : 'focus:ring-brand-primary'} focus:border-transparent outline-none transition-colors`}
            placeholder="e.g., John Doe"
            {...register("name", { required: "Full name is required." })}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 ${errors.email ? 'focus:ring-red-300' : 'focus:ring-brand-primary'} focus:border-transparent outline-none transition-colors`}
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address.",
              },
            })}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 ${errors.message ? 'focus:ring-red-300' : 'focus:ring-brand-primary'} focus:border-transparent outline-none transition-colors`}
            placeholder="Write your message here..."
            {...register("message", {
              required: "Message is required.",
              minLength: { value: 10, message: "Message must be at least 10 characters." }
            })}
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
        </div>

        {submissionStatus === 'error' && (
          <div className="flex items-center p-3 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
            <FiAlertCircle className="mr-2 flex-shrink-0" />
            <span><strong>Error:</strong> Could not send message. Please try again.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center bg-brand-accent hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-150 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <FiSend className="mr-2" /> Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactFormSection;