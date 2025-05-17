"use client"
import { FiCalendar, FiClock, FiMapPin, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

export interface UpcomingEvent {
  id: string;
  date: string; // e.g., "Oct 25"
  fullDate: string; // e.g., "October 25, 2024"
  time?: string; // e.g., "10:00 AM - 04:00 PM"
  title: string;
  type: string; // e.g., "Workshop", "Deadline", "Networking"
  location?: string; // e.g., "Online" or "FWU Auditorium"
  description: string;
  color?: string; // Tailwind color class e.g. 'bg-blue-500'
  detailedDescription?: string; // More details for expanded view
  registrationLink?: string; // Link to register for the event
}

interface UpcomingEventCardProps {
  event: UpcomingEvent;
}

const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const typeColor = event.color || 'bg-brand-accent';

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col group opacity-0 animate-fadeIn hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        {/* Date Column */}
        <div
          className={`p-8 md:w-1/4 flex flex-col items-center justify-center text-white ${typeColor} transition-transform duration-300 relative overflow-hidden`}
        >
          {/* Background pattern - using CSS pattern instead of image */}
          <div className="absolute inset-0 opacity-20"
               style={{
                 backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                 backgroundSize: '10px 10px'
               }}>
          </div>

          <div className="relative">
            <div className="text-5xl font-bold mb-1">{event.date.split(' ')[1]}</div>
            <div className="text-lg uppercase font-medium">{event.date.split(' ')[0]}</div>
          </div>
        </div>

        {/* Content Column */}
        <div className="p-8 flex-grow">
          <div className="flex justify-between items-start mb-4">
            <span className={`inline-block px-4 py-1 text-xs font-semibold text-white ${typeColor} rounded-full`}>
              {event.type}
            </span>
            <button
              onClick={toggleExpand}
              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full focus:outline-none transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
            >
              <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'rotate-0'}`}>
                <FiChevronRight size={18} />
              </div>
            </button>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {event.title}
          </h3>

          <p className="text-gray-600 mb-5 leading-relaxed">{event.description}</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
              <FiCalendar className="mr-2 text-blue-500" /> {event.fullDate}
            </div>
            {event.time && (
              <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                <FiClock className="mr-2 text-blue-500" /> {event.time}
              </div>
            )}
            {event.location && (
              <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                <FiMapPin className="mr-2 text-blue-500" /> {event.location}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Expandable Details Section */}
      <div
        className={`px-8 pb-8 pt-0 border-t border-gray-100 mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-6 text-gray-700 leading-relaxed">
          <p>{event.detailedDescription || "More details about this event will be announced soon. Stay tuned for updates!"}</p>
        </div>

        {event.registrationLink && (
          <div className="mt-6 flex">
            <a
              href={event.registrationLink}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Register Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEventCard;