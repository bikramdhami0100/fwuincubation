// components/startups/StartupListItem.tsx
import { StartupData } from '@/app/startups/page';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiBriefcase, FiCalendar, FiUsers } from 'react-icons/fi';

interface StartupListItemProps {
  startup: StartupData;
}

const StartupListItem: React.FC<StartupListItemProps> = ({ startup }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col sm:flex-row items-start sm:items-center border border-gray-100">
      {/* Left border accent */}
      <div className="w-full sm:w-2 h-2 sm:h-full bg-gradient-to-r sm:bg-gradient-to-b from-blue-500 to-indigo-600"></div>

      <div className="relative w-full sm:w-32 h-32 sm:h-full bg-gray-50 flex-shrink-0 flex items-center justify-center p-4">
        <Image
          src={startup.logoUrl}
          alt={`${startup.name} Logo`}
          width={100}
          height={40}
          className="object-contain"
          onError={(e) => {
            // Fallback to a placeholder on error
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/100x40/e2e8f0/475569?text=${encodeURIComponent(startup.name)}`;
          }}
        />
      </div>

      <div className="p-6 flex-grow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{startup.name}</h3>
          {startup.status && (
            <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white shadow-sm
              ${startup.status === 'Active' ? 'bg-green-500' : startup.status === 'Graduated' ? 'bg-blue-500' : 'bg-yellow-500'}`}
            >
              {startup.status}
            </span>
          )}
        </div>

        <div className="flex items-center text-sm text-blue-600 font-medium mb-3 bg-blue-50 px-3 py-1 rounded-full self-start">
          <FiBriefcase className="mr-1.5" /> {startup.domain}
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">{startup.shortDescription}</p>

        <div className="flex flex-wrap gap-4 mb-4">
          {startup.foundedYear && (
            <div className="flex items-center text-sm text-gray-600">
              <FiCalendar className="mr-1.5 text-blue-500" /> Founded {startup.foundedYear}
            </div>
          )}
          <div className="flex items-center text-sm text-gray-600">
            <FiUsers className="mr-1.5 text-blue-500" /> Early Stage
          </div>
        </div>

        {startup.tags && startup.tags.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {startup.tags.map(tag => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link
          href={startup.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors"
        >
          Visit Website <FiExternalLink className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default StartupListItem;