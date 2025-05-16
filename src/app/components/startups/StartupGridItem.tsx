// components/startups/StartupGridItem.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiBriefcase} from 'react-icons/fi';
import { StartupData } from '@/app/startups/page';

interface StartupGridItemProps {
  startup: StartupData;
}

const StartupGridItem: React.FC<StartupGridItemProps> = ({ startup }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
      <div className="relative w-full h-40 bg-gray-100 flex items-center justify-center p-4">
        <Image src={startup.logoUrl} alt={`${startup.name} Logo`} width={150} height={60} objectFit="contain" />
        {startup.status && (
          <span className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full text-white
            ${startup.status === 'Active' ? 'bg-green-500' : startup.status === 'Graduated' ? 'bg-blue-500' : 'bg-yellow-500'}`}
          >
            {startup.status}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors">{startup.name}</h3>
        <div className="flex items-center text-sm text-brand-accent font-medium mb-3">
          <FiBriefcase className="mr-1.5" /> {startup.domain}
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{startup.shortDescription}</p>

        {startup.tags && startup.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {startup.tags.slice(0, 3).map(tag => ( // Show max 3 tags
              <span key={tag} className="text-xs bg-brand-light text-brand-primary px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-gray-200">
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
    </div>
  );
};

export default StartupGridItem;