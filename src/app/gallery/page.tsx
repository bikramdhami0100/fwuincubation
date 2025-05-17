"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Gallery data with Unsplash images
const galleryData = [
  {
    id: 'incubation-1',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    altText: 'Incubation Center Planning Meeting',
    caption: 'Incubation Center Planning Meeting',
    eventDate: 'March 15, 2025',
    category: 'incubation'
  },
  {
    id: 'incubation-2',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    altText: 'Startup Mentorship Session',
    caption: 'Startup Mentorship Session',
    eventDate: 'March 20, 2025',
    category: 'incubation'
  },
  {
    id: 'incubation-3',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    altText: 'Entrepreneurship Workshop',
    caption: 'Entrepreneurship Workshop',
    eventDate: 'April 5, 2025',
    category: 'incubation'
  },
  {
    id: 'incubation-4',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    altText: 'Innovation Hackathon',
    caption: 'Innovation Hackathon',
    eventDate: 'April 12-13, 2025',
    category: 'incubation'
  },
  {
    id: 'incubation-5',
    imageUrl: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop',
    altText: 'Pitch Practice Session',
    caption: 'Pitch Practice Session',
    eventDate: 'April 25, 2025',
    category: 'incubation'
  },
  {
    id: 'incubation-6',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
    altText: 'Investor Networking Event',
    caption: 'Investor Networking Event',
    eventDate: 'May 10, 2025',
    category: 'incubation'
  },
  {
    id: 'conference-1',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    altText: 'International Conference on Innovation',
    caption: 'International Conference on Innovation',
    eventDate: 'February 15, 2025',
    category: 'conference'
  },
  {
    id: 'conference-2',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop',
    altText: 'Research Presentation',
    caption: 'Research Presentation',
    eventDate: 'February 16, 2025',
    category: 'conference'
  },
  {
    id: 'workshop-1',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    altText: 'Faculty Capacity Enhancement Workshop',
    caption: 'Faculty Capacity Enhancement Workshop',
    eventDate: 'January 20, 2025',
    category: 'workshop'
  },
  {
    id: 'workshop-2',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    altText: 'Entrepreneurship Skills Development',
    caption: 'Entrepreneurship Skills Development',
    eventDate: 'January 25, 2025',
    category: 'workshop'
  },
  {
    id: 'mou-1',
    imageUrl: 'https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=800&auto=format&fit=crop',
    altText: 'MOU Signing with Industry Partners',
    caption: 'MOU Signing with Industry Partners',
    eventDate: 'December 10, 2024',
    category: 'mou'
  },
  {
    id: 'mou-2',
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
    altText: 'Partnership with Technology Companies',
    caption: 'Partnership with Technology Companies',
    eventDate: 'December 15, 2024',
    category: 'mou'
  }
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'incubation', name: 'Incubation Center' },
  { id: 'conference', name: 'Conferences' },
  { id: 'workshop', name: 'Workshops' },
  { id: 'mou', name: 'Partnerships & MOUs' }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter gallery items based on category and search term
  const filteredGallery = galleryData.filter(item =>
    (selectedCategory === 'all' || item.category === selectedCategory) &&
    (item.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.eventDate.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? filteredGallery.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === filteredGallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-xl text-white/90">
              Explore moments from our incubation center events, workshops, and partnerships
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 md:gap-3 flex-grow">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-brand-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredGallery.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className="opacity-0 animate-fadeIn cursor-pointer"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                onClick={() => openLightbox(index)}
              >
                <div className="relative group rounded-lg overflow-hidden shadow-lg aspect-w-4 aspect-h-3 bg-gray-200">
                  <div className="w-full h-64 relative">
                    <Image
                      src={item.imageUrl}
                      alt={item.altText}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h4 className="text-white text-lg font-semibold">{item.caption}</h4>
                    <p className="text-gray-300 text-sm">{item.eventDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-md">
            <div className="text-5xl text-gray-300 mb-4 flex justify-center">
              <FiSearch />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Images Found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              No images match your current search criteria. Try adjusting your filters or search term.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && filteredGallery.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-colors"
            >
              <FiX size={24} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-colors"
            >
              <FiChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-colors"
            >
              <FiChevronRight size={24} />
            </button>

            {/* Image */}
            <div className="relative h-[80vh] bg-black rounded-lg overflow-hidden">
              <Image
                src={filteredGallery[currentImageIndex].imageUrl}
                alt={filteredGallery[currentImageIndex].altText}
                fill
                className="object-contain"
              />
            </div>

            {/* Caption */}
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-semibold">{filteredGallery[currentImageIndex].caption}</h3>
              <p className="text-gray-300">{filteredGallery[currentImageIndex].eventDate}</p>
            </div>
          </div>
        </div>
      )}

      {/* Back to Programs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <Link
          href="/programs"
          className="inline-block bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors"
        >
          Back to Programs
        </Link>
      </div>
    </div>
  );
}
