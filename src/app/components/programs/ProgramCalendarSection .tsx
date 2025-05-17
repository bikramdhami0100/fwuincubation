"use client"
import UpcomingEventCard, { UpcomingEvent } from './UpcomingEventCard';
import { FiCalendar, FiFilter, FiSearch } from 'react-icons/fi';
import { useState } from 'react';

// Enhanced Dummy Data with more details
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
    color: 'bg-purple-500',
    detailedDescription: 'This full-day workshop will introduce participants to the core principles of design thinking and how to apply them to solve complex problems. Led by industry experts, you will learn techniques for empathizing with users, defining problems, ideating solutions, prototyping, and testing. By the end of the workshop, you will have a practical toolkit for approaching innovation challenges with a human-centered mindset.',
    registrationLink: '/register/design-thinking-workshop'
  },
  {
    id: 'ue2',
    date: 'NOV 28',
    fullDate: 'November 28, 2024',
    title: 'Application Deadline: Winter Cohort 2025',
    type: 'Deadline',
    description: 'Submit your startup applications for the upcoming winter incubation program.',
    color: 'bg-red-500',
    detailedDescription: 'The Winter Cohort 2025 is our flagship 12-week incubation program designed for early-stage startups ready to accelerate their growth. Selected startups will receive mentorship, workspace, seed funding opportunities, and access to our network of investors and industry partners. Applications must include your business plan, team information, current traction, and growth strategy.',
    registrationLink: '/apply/winter-cohort-2025'
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
    color: 'bg-teal-500',
    detailedDescription: 'This exclusive virtual networking event brings together promising startups and potential investors in a structured yet casual format. Each startup will have the opportunity to introduce their venture in a brief pitch, followed by breakout rooms for more in-depth conversations with interested investors. This is not a formal pitching event but rather a chance to build relationships that could lead to future investment opportunities.',
    registrationLink: '/register/investor-connect'
  },
  {
    id: 'ue4',
    date: 'DEC 12',
    fullDate: 'December 12-14, 2024',
    title: 'FinTech Hackathon Challenge',
    type: 'Hackathon',
    location: 'FWU Main Auditorium',
    description: 'Develop innovative solutions for the financial technology sector and win prizes.',
    color: 'bg-blue-600',
    detailedDescription: 'Join us for an intensive 48-hour hackathon focused on developing innovative solutions for the financial technology sector. Participants will form teams to tackle real-world challenges provided by our industry partners. Cash prizes totaling $10,000 will be awarded to the top three teams, with the first-place team also receiving incubation support to develop their solution further. All skill levels are welcome, and mentors will be available throughout the event.',
    registrationLink: '/register/fintech-hackathon'
  },
  {
    id: 'ue5',
    date: 'JAN 10',
    fullDate: 'January 10, 2025',
    time: '10:00 AM - 12:00 PM',
    title: 'Funding Strategies for Early-Stage Startups',
    type: 'Workshop',
    location: 'FWU Incubation Center',
    description: 'Learn about different funding options and how to approach investors effectively.',
    color: 'bg-purple-500',
    detailedDescription: 'This workshop will cover various funding strategies available to early-stage startups, including bootstrapping, angel investment, venture capital, grants, and crowdfunding. Our expert speakers will share insights on when to pursue each option, how to prepare your startup for investment, and tactics for successful fundraising. The session will include case studies of successful funding journeys and common pitfalls to avoid.',
    registrationLink: '/register/funding-strategies-workshop'
  },
];

// Helper to sort events by fullDate (simplistic, assumes "Month Day, Year" format)
const sortEvents = (events: UpcomingEvent[]): UpcomingEvent[] => {
  return events.sort((a, b) => new Date(a.fullDate).getTime() - new Date(b.fullDate).getTime());
};

// Get unique event types for filtering
const getUniqueEventTypes = (events: UpcomingEvent[]): string[] => {
  return Array.from(new Set(events.map(event => event.type))).sort();
};

const ProgramCalendarSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const eventTypes = getUniqueEventTypes(upcomingEventsData);

  // Filter events based on search term and selected type
  const filteredEvents = upcomingEventsData
    .filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(event =>
      selectedType ? event.type === selectedType : true
    );

  const sortedEvents = sortEvents(filteredEvents);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with decorative elements */}
        <div className="relative mb-16">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-blue-200 rounded-full"></div>
          <div className="text-center">
            <p className="text-blue-600 font-semibold mb-2">Stay Informed</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Upcoming Events at FWU Incubation Center</h2>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12 mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiSearch className="text-blue-500" />
              </div>
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
              />
            </div>

            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiFilter className="text-blue-500" />
              </div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="block w-full md:w-56 pl-12 pr-10 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors appearance-none bg-no-repeat bg-right"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundSize: "1.5em 1.5em", backgroundPosition: "right 0.75rem center" }}
              >
                <option value="">All Event Types</option>
                {eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Events List */}
        {sortedEvents.length > 0 ? (
          <div className="space-y-10">
            {sortedEvents.map((event, index) => (
              <div
                key={event.id}
                className="opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <UpcomingEventCard event={event} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 animate-fadeIn">
            <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <FiCalendar className="text-blue-500 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No Events Found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {searchTerm || selectedType
                ? "No events match your current search criteria. Try adjusting your filters."
                : "No upcoming events scheduled at the moment. Please check back soon!"}
            </p>
          </div>
        )}

        {/* Calendar Subscription */}
        <div className="mt-20 opacity-0 animate-fadeIn animation-delay-500" style={{ animationFillMode: 'forwards' }}>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 text-center">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
              <FiCalendar className="text-blue-600 text-2xl" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">Stay Updated with Our Events</h3>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Subscribe to our calendar to receive automatic updates about upcoming events, workshops,
              and programs at the FWU Incubation Center.
            </p>

            <a
              href="/subscribe-calendar" // Link to iCal feed or subscription page
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105 transform"
            >
              <FiCalendar className="mr-2" />
              Subscribe to Calendar
            </a>
            <p className="text-sm text-gray-600 mt-4">
              Never miss an event! Add our calendar to your preferred calendar app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramCalendarSection;