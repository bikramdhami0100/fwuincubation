// components/contact/ContactInfoSection.tsx
import { FiPhone, FiMail, FiClock, FiMapPin, FiBriefcase } from 'react-icons/fi';

interface ContactDetails {
  phone: string;
  email: string;
  incubationEmail: string;
  address: string;
  officeHours: { day: string; hours: string }[];
}

interface ContactInfoSectionProps {
  details: ContactDetails;
}

const ContactInfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string; href?: string }> = ({ icon, label, value, href }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{label}</h4>
      {href ? (
        <a href={href} className="text-md text-brand-dark hover:text-brand-primary transition-colors break-words">
          {value}
        </a>
      ) : (
        <p className="text-md text-brand-dark break-words">{value}</p>
      )}
    </div>
  </div>
);


const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ details }) => {
  return (
    <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl space-y-8">
      <h2 className="text-3xl font-bold text-brand-dark mb-0">Contact Information</h2>
      <div className="space-y-6">
        <ContactInfoItem
          icon={<FiMapPin size={20} />}
          label="Our Address"
          value={details.address}
        />
        <ContactInfoItem
          icon={<FiPhone size={20} />}
          label="Phone Number"
          value={details.phone}
          href={`tel:${details.phone.replace(/\s+/g, '')}`}
        />
        <ContactInfoItem
          icon={<FiMail size={20} />}
          label="General Inquiries"
          value={details.email}
          href={`mailto:${details.email}`}
        />
         <ContactInfoItem
          icon={<FiBriefcase size={20} />} // Using briefcase for incubation-specific
          label="Incubation Center"
          value={details.incubationEmail}
          href={`mailto:${details.incubationEmail}`}
        />
        <div>
          <div className="flex items-start space-x-4">
             <div className="flex-shrink-0 w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center">
                <FiClock size={20} />
             </div>
             <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Office Hours</h4>
                {details.officeHours.map((oh, index) => (
                  <p key={index} className="text-md text-brand-dark">
                    <span className="font-medium">{oh.day}:</span> {oh.hours}
                  </p>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;