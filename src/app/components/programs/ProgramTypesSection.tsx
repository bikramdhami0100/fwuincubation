// components/programs/ProgramTypesSection.tsx
import SectionTitle from '../shared/SectionTitle';
import ProgramTypeCard from './ProgramTypeCard';
import { FaLaptopCode, FaUsers, FaRocket, FaChalkboardTeacher } from 'react-icons/fa'; // Example Icons

const programTypes = [
  {
    id: 'bootcamp',
    icon: <FaLaptopCode />,
    title: 'Intensive Bootcamps',
    description: 'Deep-dive, skill-based training programs designed to rapidly accelerate your knowledge in specific tech and business domains. Perfect for skill acquisition and project development.',
    link: '/programs/bootcamps',
    bgColorClass: 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'
  },
  {
    id: 'hackathon',
    icon: <FaUsers />,
    title: 'Innovation Hackathons',
    description: 'High-energy, collaborative events where participants team up to solve real-world challenges and build innovative prototypes within a limited timeframe. Fuel creativity and teamwork.',
    link: '/programs/hackathons',
    bgColorClass: 'bg-gradient-to-br from-teal-50 via-white to-cyan-50'
  },
  {
    id: 'demoday',
    icon: <FaRocket />,
    title: 'Startup Demo Days',
    description: 'An exclusive platform for our incubated startups to pitch their ventures to investors, industry leaders, and potential partners. Showcase your progress and secure opportunities.',
    link: '/programs/demo-days',
    bgColorClass: 'bg-gradient-to-br from-amber-50 via-white to-orange-50'
  },
  {
    id: 'workshops',
    icon: <FaChalkboardTeacher />,
    title: 'Expert Workshops',
    description: 'Focused sessions led by industry experts on crucial topics like marketing, finance, legal aspects, and technology trends to refine your startup strategy.',
    link: '/programs/workshops',
    bgColorClass: 'bg-gradient-to-br from-pink-50 via-white to-rose-50'
  },
];

const ProgramTypesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Core Program Offerings" subtitle="Explore & Engage" />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Adjusted for better text flow with more description */}
          {programTypes.map((program) => (
            <ProgramTypeCard
              key={program.id}
              icon={program.icon}
              title={program.title}
              description={program.description}
              link={program.link}
              bgColorClass={program.bgColorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramTypesSection;