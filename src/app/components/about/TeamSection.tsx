// components/about/TeamSection.tsx
import SectionTitle from '../shared/SectionTitle';
import TeamMemberCard, { Member } from './TeamMemberCard';

// Dummy Data - Replace with actual team members
const teamMembersData: Member[] = [
  {
    id: 'tm1',
    name: 'Dr. Saima Hamid',
    role: 'Director, Incubation Center',
    imageUrl: '/team/saima-hamid.jpg', // Add to public/team/
    bio: 'Overseeing strategic direction and fostering partnerships.',
    linkedin: 'https://linkedin.com/in/saimahamid',
    email: 's.hamid@fwu.edu.pk'
  },
  {
    id: 'tm2',
    name: 'Mr. Usman Ghani',
    role: 'Program Manager',
    imageUrl: '/team/usman-ghani.jpg', // Add to public/team/
    bio: 'Manages incubation programs, workshops, and cohort activities.',
    linkedin: 'https://linkedin.com/in/usmanghani',
  },
  {
    id: 'tm3',
    name: 'Ms. Ayesha Siddiqa',
    role: 'Mentorship Coordinator',
    imageUrl: '/team/ayesha-siddiqa.jpg', // Add to public/team/
    bio: 'Connects startups with industry mentors and experts.',
    twitter: 'https://twitter.com/ayeshasiddiqa',
  },
  {
    id: 'tm4',
    name: 'Mr. Bilal Khan',
    role: 'Community & Outreach Lead',
    imageUrl: '/team/bilal-khan.jpg', // Add to public/team/
    bio: 'Builds community engagement and manages external relations.',
    email: 'b.khan@fwu.edu.pk'
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Meet Our Dedicated Team" subtitle="The Driving Force" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembersData.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;