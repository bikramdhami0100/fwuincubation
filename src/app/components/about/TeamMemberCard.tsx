// components/about/TeamMemberCard.tsx
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Optional social links

export interface Member {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio?: string; // Optional short bio
  linkedin?: string;
  twitter?: string;
  email?: string;
}

interface TeamMemberCardProps {
  member: Member;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-center">
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden border-4 border-brand-secondary shadow-md">
        <Image src={member.imageUrl} alt={member.name} layout="fill" objectFit="cover" />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-brand-dark mb-1">{member.name}</h3>
      <p className="text-brand-primary font-medium mb-3">{member.role}</p>
      {member.bio && (
        <p className="text-sm text-gray-600 mb-4 px-2 flex-grow">{member.bio}</p>
      )}
      {(member.linkedin || member.twitter || member.email) && (
        <div className="flex space-x-3 mt-auto pt-3 border-t border-gray-200 w-full justify-center">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-primary">
              <FaLinkedin size={20} />
            </a>
          )}
          {member.twitter && (
            <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-primary">
              <FaTwitter size={20} />
            </a>
          )}
          {member.email && (
            <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-brand-primary">
              <FaEnvelope size={20} />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;