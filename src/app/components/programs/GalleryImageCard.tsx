"use client"
import Image from 'next/image';
import Link from 'next/link';

export interface GalleryImageCardProps {
  imageUrl: string;
  altText: string;
  caption?: string;
  eventDate?: string;
  isLoaded?: boolean;
}

const GalleryImageCard: React.FC<GalleryImageCardProps> = ({
  imageUrl,
  altText,
  caption,
  eventDate,
  isLoaded = true
}) => {
  return (
    <Link href="/gallery" className="block">
      <div className="relative group rounded-lg overflow-hidden shadow-lg h-64 transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gray-200">
        <div className="w-full h-full relative">
          {isLoaded && (
            <Image
              src={imageUrl}
              alt={altText}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              onError={(e) => {
                // Fallback to a placeholder on error
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/800x600/e2e8f0/475569?text=FWU+Incubation";
              }}
            />
          )}
        </div>
        {(caption || eventDate) && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            {caption && <h4 className="text-white text-lg font-semibold">{caption}</h4>}
            {eventDate && <p className="text-gray-300 text-sm">{eventDate}</p>}
          </div>
        )}
      </div>
    </Link>
  );
};

export default GalleryImageCard;