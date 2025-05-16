// components/about/AdvisoryBoardSection.tsx
import SectionTitle from '../shared/SectionTitle';
import TeamMemberCard, { Member } from './TeamMemberCard'; // Reusing the card

// Dummy Data - Replace with actual advisory board members
const advisoryBoardData: Member[] = [
  {
    id: 'ab1',
    name: 'Prof. Dr. Rubina Yasmin',
    role: 'Vice Chancellor, FWU',
    imageUrl: '/advisors/rubina-yasmin.jpg', // Add to public/advisors/
    bio: 'Provides strategic oversight from the university leadership.',
  },
  {
    id: 'ab2',
    name: 'Mr. Ali Rehman',
    role: 'CEO, TechSolutions Inc.',
    imageUrl: '/advisors/ali-rehman.jpg', // Add to public/advisors/
    bio: 'Industry expert in technology and startup scaling.',
    linkedin: 'https://linkedin.com/in/alirehman'
  },
  {
    id: 'ab3',
    name: 'Ms. Nadia Jamil',
    role: 'Investor & Philanthropist',
    imageUrl: '/advisors/nadia-jamil.jpg', // Add to public/advisors/
    bio: 'Offers insights on investment readiness and social impact.',
  },
];

const AdvisoryBoardSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Esteemed Advisory Board" subtitle="Guidance & Expertise" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisoryBoardData.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoardSection;