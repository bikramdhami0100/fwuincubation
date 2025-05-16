// components/programs/PastEventsGallerySection.tsx
import SectionTitle from '../shared/SectionTitle';
import GalleryImageCard from './GalleryImageCard';

// Dummy Data - Replace with actual past event images
const pastEventsData = [
  {
    id: 'pe1',
    imageUrl: '/gallery/past-event-1.jpg', // Add to public/gallery/
    altText: 'Participants at Spring Bootcamp 2023',
    caption: 'Spring Bootcamp 2023',
    eventDate: 'March 10-15, 2023',
  },
  {
    id: 'pe2',
    imageUrl: '/gallery/past-event-2.jpg', // Add to public/gallery/
    altText: 'Winners of the Innovation Challenge',
    caption: 'Innovation Challenge Finals',
    eventDate: 'June 5, 2023',
  },
  {
    id: 'pe3',
    imageUrl: '/gallery/past-event-3.jpg', // Add to public/gallery/
    altText: 'Networking session at Demo Day',
    caption: 'Demo Day Fall 2023',
    eventDate: 'September 20, 2023',
  },
  {
    id: 'pe4',
    imageUrl: '/gallery/past-event-4.jpg', // Add to public/gallery/
    altText: 'Coding workshop in progress',
    caption: 'AI Workshop Series',
    eventDate: 'July 2023',
  },
   {
    id: 'pe5',
    imageUrl: '/gallery/past-event-5.jpg', // Add to public/gallery/
    altText: 'Group discussion during hackathon',
    caption: 'HealthTech Hackathon',
    eventDate: 'August 12-13, 2023',
  },
  {
    id: 'pe6',
    imageUrl: '/gallery/past-event-6.jpg', // Add to public/gallery/
    altText: 'Speaker presenting at a seminar',
    caption: 'Entrepreneurship Seminar',
    eventDate: 'October 2, 2023',
  },
];

const PastEventsGallerySection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Moments from Past Events" subtitle="Photo Gallery" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pastEventsData.map((event) => (
            <GalleryImageCard
              key={event.id}
              imageUrl={event.imageUrl}
              altText={event.altText}
              caption={event.caption}
              eventDate={event.eventDate}
            />
          ))}
        </div>
         <div className="text-center mt-12">
            <a
                href="/gallery/all" // Link to a full gallery page
                className="inline-block bg-brand-accent hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors"
            >
                View Full Gallery
            </a>
        </div>
      </div>
    </section>
  );
};

export default PastEventsGallerySection;