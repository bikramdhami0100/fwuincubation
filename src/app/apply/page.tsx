// pages/apply.tsx

import ApplicationForm from '../../app/components/apply/ApplicationForm';

export default function ApplyPage() {
  return (
    <>

        {/* Page Hero */}
        <div className="bg-gradient-to-r from-green-500 to-brand-secondary text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Ready to Launch Your Venture?
            </h1>
            <p className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto">
              Complete the application below to join the FWU Incubation Center and turn your innovative idea into reality.
            </p>
          </div>
        </div>

        {/* Application Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
              <h2 className="text-3xl font-bold text-brand-dark mb-2 text-center">
                Application Form
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Please fill out all fields carefully. We look forward to reviewing your application!
              </p>
              <ApplicationForm />
            </div>
          </div>
        </section>
    
    </>
  );
}