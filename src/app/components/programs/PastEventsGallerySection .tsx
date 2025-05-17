"use client"
import SectionTitle from '../shared/SectionTitle';
import GalleryImageCard from './GalleryImageCard';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Gallery images data with Unsplash images
const pastEventsData = [
  {
    id: 'pe1',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    altText: 'Incubation Center Planning Meeting',
    caption: 'Incubation Center Planning Meeting',
    eventDate: 'March 15, 2025',
  },
  {
    id: 'pe2',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    altText: 'Startup Mentorship Session',
    caption: 'Startup Mentorship Session',
    eventDate: 'March 20, 2025',
  },
  {
    id: 'pe3',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    altText: 'Entrepreneurship Skills Development',
    caption: 'Entrepreneurship Skills Development',
    eventDate: 'January 25, 2025',
  },
  {
    id: 'pe4',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    altText: 'International Conference on Innovation',
    caption: 'International Conference on Innovation',
    eventDate: 'February 15, 2025',
  },
  {
    id: 'pe5',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    altText: 'Innovation Hackathon',
    caption: 'Innovation Hackathon',
    eventDate: 'April 12-13, 2025',
  },
  {
    id: 'pe6',
    imageUrl: 'https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=800&auto=format&fit=crop',
    altText: 'MOU Signing with Industry Partners',
    caption: 'MOU Signing with Industry Partners',
    eventDate: 'December 10, 2024',
  },
];

const PastEventsGallerySection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate image loading
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="FWU Incubation Center Gallery" subtitle="Moments & Memories" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {pastEventsData.map((event, index) => (
            <div
              key={event.id}
              className="opacity-0 animate-fadeIn"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <GalleryImageCard
                imageUrl={event.imageUrl}
                altText={event.altText}
                caption={event.caption}
                eventDate={event.eventDate}
                isLoaded={isLoaded}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 opacity-0 animate-fadeIn animation-delay-1000" style={{ animationFillMode: 'forwards' }}>
          <Link
            href="/gallery"
            className="inline-block bg-brand-primary hover:bg-brand-primary-dark border border-blue-400 font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105 transform"
          >
            View Full Gallery
          </Link>
          <p className="text-gray-600 mt-2">
            Explore more photos from our events, workshops, and partnerships
          </p>
        </div>
      </div>
    </section>
  );
};

export default PastEventsGallerySection;