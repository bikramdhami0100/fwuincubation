// components/programs/GalleryImageCard.tsx
import Image from 'next/image';

interface GalleryImageCardProps {
  imageUrl: string;
  altText: string;
  caption?: string;
  eventDate?: string;
}

const GalleryImageCard: React.FC<GalleryImageCardProps> = ({ imageUrl, altText, caption, eventDate }) => {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-lg aspect-w-4 aspect-h-3 transform hover:shadow-2xl transition-shadow duration-300">
      <Image src={imageUrl} alt={altText} layout="fill" objectFit="cover" className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out" />
      {(caption || eventDate) && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          {caption && <h4 className="text-white text-lg font-semibold">{caption}</h4>}
          {eventDate && <p className="text-gray-300 text-sm">{eventDate}</p>}
        </div>
      )}
    </div>
  );
};

export default GalleryImageCard;