// components/home/StartupCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FiLink, FiArrowRight } from 'react-icons/fi';

export interface Startup {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  website: string;
  industry: string;
}

interface StartupCardProps {
  startup: Startup;
}

const StartupCard: React.FC<StartupCardProps> = ({ startup }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:shadow-2xl transition-all duration-300 h-full hover:border-blue-200 border border-transparent">
      {/* Logo with glow effect on hover */}
      <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-blue-50 shadow-md group-hover:shadow-blue-200 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <Image
          src={startup.logoUrl}
          alt={`${startup.name} logo`}
          width={96}
          height={96}
          className="relative z-10 object-contain p-2"
        />
        <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
      </div>

      {/* Faculty name with gradient text on hover */}
      <h3 className="text-xl font-semibold text-blue-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-blue-500 transition-all duration-300">
        {startup.name}
      </h3>

      {/* Category tag */}
      <div className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block">
        {startup.industry}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 flex-grow">{startup.description}</p>

      {/* Link with hover effect */}
      <Link
        href={startup.website}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
      >
        <span>Learn More</span>
        <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
      </Link>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
        <div className="absolute transform rotate-45 bg-yellow-400 text-white w-16 h-3 -top-2 -right-8"></div>
      </div>
    </div>
  );
};

export default StartupCard;