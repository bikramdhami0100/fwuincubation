import { IconType } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

interface ProgramTypeCardProps {
  icon: React.ReactElement<IconType>;
  title: string;
  description: string;
  linkText?: string;
  bgColorClass?: string; // For varied card backgrounds
  slug: string;
}

const ProgramTypeCard: React.FC<ProgramTypeCardProps> = ({
  icon,
  title,
  description,
  linkText = "Learn More",
  bgColorClass = "bg-white",
  slug
}) => {
  return (
    <div className={`${bgColorClass} rounded-2xl border border-gray-100 shadow-lg p-8 flex flex-col h-full relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

      {/* Icon with animated background */}
      <div className="relative mb-8">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-2 group-hover:bg-blue-100 transition-colors duration-300">
          <div className="text-blue-600 text-3xl">
            {icon}
          </div>
        </div>
        <div className="w-8 h-1 bg-blue-200 rounded-full"></div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{description}</p>

      <Link
        href={`/programs/${slug}`}
        className="mt-auto flex items-center"
      >
        <span className="mr-3 font-semibold text-blue-600">{linkText}</span>
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
            <FiArrowRight className="text-blue-600" />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProgramTypeCard;