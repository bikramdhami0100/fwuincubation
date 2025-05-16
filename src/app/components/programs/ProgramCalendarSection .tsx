// components/programs/ProgramCalendarSection.tsx
import SectionTitle from '../shared/SectionTitle';
import UpcomingEventCard, { UpcomingEvent } from './UpcomingEventCard';

// Dummy Data - Replace with actual events, ideally fetched and sorted
const upcomingEventsData: UpcomingEvent[] = [
  {
    id: 'ue1',
    date: 'NOV 15',
    fullDate: 'November 15, 2024',
    time: '09:00 AM - 05:00 PM',
    title: 'Design Thinking Workshop for Innovators',
    type: 'Workshop',
    location: 'FWU Incubation Hall A',
    description: 'Learn human-centered design principles to create impactful solutions.',
    color: 'bg-purple-500'
  },
  {
    id: 'ue2',
    date: 'NOV 28',
    fullDate: 'November 28, 2024',
    title: 'Application Deadline: Winter Cohort 2025',
    type: 'Deadline',
    description: 'Submit your startup applications for the upcoming winter incubation program.',
    color: 'bg-red-500'
  },
  {
    id: 'ue3',
    date: 'DEC 05',
    fullDate: 'December 05, 2024',
    time: '02:00 PM - 04:00 PM',
    title: 'Investor Connect: Meet & Greet',
    type: 'Networking',
    location: 'Online (Zoom)',
    description: 'An opportunity for selected startups to interact with potential investors.',
    color: 'bg-teal-500'
  },
  {
    id: 'ue4',
    date: 'DEC 12',
    fullDate: 'December 12-14, 2024',
    title: 'FinTech Hackathon Challenge',
    type: 'Hackathon',
    location: 'FWU Main Auditorium',
    description: 'Develop innovative solutions for the financial technology sector and win prizes.',
    color: 'bg-blue-600'
  },
];

// Helper to sort events by fullDate (simplistic, assumes "Month Day, Year" format)
const sortEvents = (events: UpcomingEvent[]): UpcomingEvent[] => {
  return events.sort((a, b) => new Date(a.fullDate).getTime() - new Date(b.fullDate).getTime());
};


const ProgramCalendarSection = () => {
  const sortedEvents = sortEvents(upcomingEventsData);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Upcoming Programs Calendar" subtitle="Stay Informed" />
        {sortedEvents.length > 0 ? (
          <div className="space-y-8">
            {sortedEvents.map((event) => (
              <UpcomingEventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No upcoming events scheduled at the moment. Please check back soon!
          </p>
        )}
         <div className="text-center mt-12">
            <a
                href="/subscribe-calendar" // Link to iCal feed or subscription page
                className="inline-block bg-brand-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors"
            >
                Subscribe to Calendar
            </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramCalendarSection;