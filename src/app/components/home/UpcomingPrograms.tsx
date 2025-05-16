// components/home/UpcomingPrograms.tsx
import SectionTitle from '../shared/SectionTitle';
import ProgramCard, { Program } from './ProgramCard';

const programsData: Program[] = [
  {
    id: '1',
    title: 'InnovateHER: Women in Tech Bootcamp',
    date: 'October 15-20, 2024',
    description: 'An intensive bootcamp designed to empower women with tech skills and entrepreneurial mindset.',
    category: 'Bootcamp',
    imageUrl: '/program-women-tech.jpg', // Add this image to public folder
    link: '/programs/innovate-her',
  },
  {
    id: '2',
    title: 'Seed Funding Pitch Day',
    date: 'November 5, 2024',
    description: 'Showcase your startup to a panel of investors and compete for seed funding.',
    category: 'Pitch Event',
    imageUrl: '/program-pitch-day.jpg', // Add this image to public folder
    link: '/events/pitch-day',
  },
  {
    id: '3',
    title: 'AI & Machine Learning Workshop',
    date: 'December 1-3, 2024',
    description: 'Dive deep into the world of AI and ML with hands-on sessions from industry experts.',
    category: 'Workshop',
    imageUrl: '/program-ai-ml.jpg', // Add this image to public folder
    link: '/workshops/ai-ml',
  },
];

const UpcomingPrograms = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Upcoming Programs & Events" subtitle="Don't Miss Out" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingPrograms;