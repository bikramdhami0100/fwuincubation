// components/home/ProgramCard.tsx
import Link from 'next/link';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

export interface Program {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  imageUrl?: string; // Optional image for the program
  link: string;
}

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 group flex flex-col h-full">
      {program.imageUrl && (
        <div className="relative h-48 w-full">
          <img src={program.imageUrl} alt={program.title} className="w-full h-full object-cover" />
           <div className="absolute top-2 right-2 bg-brand-accent text-white text-xs font-semibold px-2 py-1 rounded">
            {program.category}
          </div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-brand-dark mb-2">{program.title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <FiCalendar className="mr-2 text-brand-primary" />
          <span>{program.date}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{program.description}</p>
        <Link
          href={program.link}
          className="mt-auto inline-flex items-center text-brand-primary font-medium group-hover:text-brand-accent transition-colors"
        >
          Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;