// components/startups/StartupGridItem.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiBriefcase, FiCalendar, FiUsers } from 'react-icons/fi';
import { StartupData } from '@/app/startups/page';

interface StartupGridItemProps {
  startup: StartupData;
}

const StartupGridItem: React.FC<StartupGridItemProps> = ({ startup }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col h-full">
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

      {/* Logo/Image Area */}
      <div className="relative w-full h-40 bg-gray-50 flex items-center justify-center p-4">
        <Image
          src={startup.logoUrl}
          alt={`${startup.name} Logo`}
          width={150}
          height={60}
          className="object-contain"
          onError={(e) => {
            // Fallback to a placeholder on error
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/150x60/e2e8f0/475569?text=${encodeURIComponent(startup.name)}`;
          }}
        />
        {startup.status && (
          <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full text-white shadow-sm
            ${startup.status === 'Active' ? 'bg-green-500' : startup.status === 'Graduated' ? 'bg-blue-500' : 'bg-yellow-500'}`}
          >
            {startup.status}
          </span>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{startup.name}</h3>
        <div className="flex items-center text-sm text-blue-600 font-medium mb-3 bg-blue-50 px-3 py-1 rounded-full self-start">
          <FiBriefcase className="mr-1.5" /> {startup.domain}
        </div>
        <p className="text-gray-600 mb-5 flex-grow leading-relaxed">{startup.shortDescription}</p>

        {startup.tags && startup.tags.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {startup.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Additional info */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-5">
          {startup.foundedYear && (
            <div className="flex items-center">
              <FiCalendar className="mr-1.5 text-blue-500" />
              <span>Founded {startup.foundedYear}</span>
            </div>
          )}
          <div className="flex items-center">
            <FiUsers className="mr-1.5 text-blue-500" />
            <span>{'Early Stage'}</span> {/* Replace with actual stage data */}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-200">
          <Link
            href={startup.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors"
          >
            Visit Website <FiExternalLink className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartupGridItem;