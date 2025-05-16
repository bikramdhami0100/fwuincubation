"use client"
import FaqSection from "../components/faq/FaqSection";

export default function FaqPage() {
    const faqData = [
  {
    id: 'faq1',
    question: 'What is the FWU Incubation Center?',
    answer: 'The FWU Incubation Center is a dedicated hub at Frontier Women University designed to foster innovation and entrepreneurship. We provide resources, mentorship, and a supportive environment for startups and aspiring entrepreneurs to develop their ideas into viable businesses.',
    category: 'General',
  },
  {
    id: 'faq2',
    question: 'Who can apply to the incubation programs?',
    answer: 'Our programs are primarily open to students, alumnae, and faculty of Frontier Women University. However, we also consider applications from external individuals or teams, especially women entrepreneurs, with innovative ideas that align with our mission. Specific eligibility criteria may vary per program.',
    category: 'Eligibility',
  },
  {
    id: 'faq3',
    question: 'What kind of support does the center offer?',
    answer: 'We offer a comprehensive range of support, including: co-working space, mentorship from industry experts, business development training, workshops on various topics (e.g., finance, marketing, legal), networking opportunities, and assistance with accessing funding.',
    category: 'Services',
  },
  {
    id: 'faq4',
    question: 'Is there a fee to join the incubation program?',
    answer: 'Most of our core incubation programs have nominal or no upfront fees. Some specialized workshops or advanced programs might have a cost, which will be clearly communicated. We aim to make our resources accessible.',
    category: 'Fees & Funding',
  },
  {
    id: 'faq5',
    question: 'How long is the incubation program?',
    answer: 'The duration of our incubation programs typically ranges from 6 months to 1 year, depending on the program structure and the startup\'s stage. We also offer shorter bootcamps and workshops.',
    category: 'Program Details',
  },
  {
    id: 'faq6',
    question: 'Do I need to have a fully developed business plan to apply?',
    answer: 'While a detailed business plan is helpful, it\'s not always a strict requirement for initial application. We look for a clear idea, a passionate team, and a basic understanding of the problem you\'re trying to solve. We help you develop your business plan during the incubation period.',
    category: 'Application Process',
  },
  {
    id: 'faq7',
    question: 'Does the incubation center take equity in startups?',
    answer: 'Our standard incubation programs generally do not take equity. However, if specific funding is provided directly by the center or through associated investment arms, equity terms might be discussed on a case-by-case basis and will be transparently communicated.',
    category: 'Fees & Funding',
  },
];

  return (
    <main className="bg-brand-light"> {/* Or bg-white depending on your global layout's body color */}
      {/* Page Hero/Title */}
      <div className="bg-gradient-to-r from-purple-600 to-brand-primary text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto">
            Find answers to common questions about the FWU Incubation Center, our programs, and the application process.
          </p>
        </div>
      </div>

      <FaqSection faqs={faqData} />
    </main>
  );
}