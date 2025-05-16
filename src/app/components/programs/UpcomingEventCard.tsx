// components/programs/UpcomingEventCard.tsx
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';

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
}

interface UpcomingEventCardProps {
  event: UpcomingEvent;
}

const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({ event }) => {
  const typeColor = event.color || 'bg-brand-accent';
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row group transition-shadow hover:shadow-2xl">
      <div className={`p-6 md:w-1/4 flex flex-col items-center justify-center text-white ${typeColor}`}>
        <div className="text-4xl font-bold">{event.date.split(' ')[1]}</div>
        <div className="text-lg uppercase">{event.date.split(' ')[0]}</div>
      </div>
      <div className="p-6 flex-grow">
        <span className={`inline-block px-3 py-1 text-xs font-semibold text-white ${typeColor} rounded-full mb-2`}>
          {event.type}
        </span>
        <h3 className="text-xl font-semibold text-brand-dark mb-2">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{event.description}</p>
        <div className="text-xs text-gray-500 space-y-1">
          <div className="flex items-center">
            <FiCalendar className="mr-2 text-brand-primary" /> {event.fullDate}
          </div>
          {event.time && (
            <div className="flex items-center">
              <FiClock className="mr-2 text-brand-primary" /> {event.time}
            </div>
          )}
          {event.location && (
            <div className="flex items-center">
              <FiMapPin className="mr-2 text-brand-primary" /> {event.location}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventCard;