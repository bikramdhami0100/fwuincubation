// components/startups/StartupListItem.tsx
import { StartupData } from '@/app/startups/page';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiBriefcase } from 'react-icons/fi';

interface StartupListItemProps {
  startup: StartupData;
}

const StartupListItem: React.FC<StartupListItemProps> = ({ startup }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:shadow-xl transition-shadow duration-300 group flex flex-col sm:flex-row items-start sm:items-center">
      <div className="relative w-full sm:w-32 h-32 sm:h-full bg-gray-100 flex-shrink-0 flex items-center justify-center p-4">
        <Image src={startup.logoUrl} alt={`${startup.name} Logo`} width={100} height={40} objectFit="contain" />
      </div>
      <div className="p-6 flex-grow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{startup.name}</h3>
          {startup.status && (
            <span className={`mt-2 sm:mt-0 text-xs font-semibold px-2.5 py-1 rounded-full text-white
            ${startup.status === 'Active' ? 'bg-green-500' : startup.status === 'Graduated' ? 'bg-blue-500' : 'bg-yellow-500'}`}
            >
              {startup.status}
            </span>
          )}
        </div>
        <div className="flex items-center text-sm text-brand-accent font-medium mb-3">
          <FiBriefcase className="mr-1.5" /> {startup.domain}
        </div>
        <p className="text-gray-600 text-sm mb-4">{startup.shortDescription}</p>

        {startup.tags && startup.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {startup.tags.map(tag => (
              <span key={tag} className="text-xs bg-brand-light text-brand-primary px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link
          href={startup.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-brand-primary hover:text-brand-accent font-medium transition-colors"
        >
          Visit Website <FiExternalLink className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default StartupListItem;