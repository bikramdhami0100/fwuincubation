// components/programs/ProgramTypeCard.tsx
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';

interface ProgramTypeCardProps {
  icon: React.ReactElement<IconType>;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  bgColorClass?: string; // For varied card backgrounds
}

const ProgramTypeCard: React.FC<ProgramTypeCardProps> = ({
  icon,
  title,
  description,
  link,
  linkText = "Learn More",
  bgColorClass = "bg-white"
}) => {
  return (
    <div className={`${bgColorClass} rounded-xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 group flex flex-col h-full`}>
      <div className="text-brand-accent mb-6 text-5xl flex justify-center md:justify-start">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-brand-dark mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link href={link} className="mt-auto inline-flex items-center text-brand-primary font-semibold group-hover:text-brand-accent transition-colors">
          {linkText} <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ProgramTypeCard;