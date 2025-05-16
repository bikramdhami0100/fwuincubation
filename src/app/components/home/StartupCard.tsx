// components/home/StartupCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FiLink } from 'react-icons/fi';

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
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:shadow-2xl transition-shadow duration-300 h-full">
      <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-brand-light shadow-md">
        <Image src={startup.logoUrl} alt={`${startup.name} logo`} layout="fill" objectFit="contain" />
      </div>
      <h3 className="text-xl font-semibold text-brand-dark mb-1">{startup.name}</h3>
      <p className="text-xs text-brand-primary font-medium uppercase tracking-wider mb-3">{startup.industry}</p>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{startup.description}</p>
      <Link
        href={startup.website}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center text-brand-accent hover:text-yellow-600 font-medium transition-colors"
      >
        Visit Website <FiLink className="ml-2" />
      </Link>
    </div>
  );
};

export default StartupCard;