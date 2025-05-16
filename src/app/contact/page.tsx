"use client"
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactInfoSection from "../components/contact/ContactInfoSection";
import MapSection from "../components/contact/MapSection";

// Dummy data for contact info, can be moved to a config file or CMS
const contactDetails = {
  phone: '+92 (91) 922-2279',
  email: 'info@fwu.edu.pk', // General FWU email, replace with incubation specific if available
  incubationEmail: 'incubation@fwu.edu.pk',
  address: 'Frontier Women University, Kalaan, Mardan Road, Peshawar, Khyber Pakhtunkhwa, Pakistan',
  officeHours: [
    { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday - Sunday', hours: 'Closed' },
  ],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.975066865838!2d71.49995867628789!3d33.99290097318075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d910e3f7a26a97%3A0x2c08ea6f7b9a6a6d!2sFrontier%20Women%20University!5e0!3m2!1sen!2s!4v1700000000000" // Replace with actual FWU Katan Campus embed URL
};

export default function ContactPage() {
  return (
    <main className="bg-brand-light"> {/* Or bg-white depending on your global layout's body color */}
      {/* Page Hero/Title (Optional, can be part of a global layout or specific here) */}
      <div className="bg-gradient-to-r from-brand-secondary to-teal-600 text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-teal-100 max-w-2xl mx-auto">
            We&apos;re here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Contact Form */}
            <ContactFormSection />

            {/* Right Column: Contact Info & Map */}
            <div className="space-y-12">
              <ContactInfoSection details={contactDetails} />
              <MapSection embedUrl={"https://maps.app.goo.gl/Ehu1U2FZzjRUsGEB6"} address={contactDetails.address} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}