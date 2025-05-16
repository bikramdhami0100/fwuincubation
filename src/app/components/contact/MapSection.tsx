// components/contact/MapSection.tsx
interface MapSectionProps {
  embedUrl: string;
  address: string;
}

const MapSection: React.FC<MapSectionProps> = ({ embedUrl, address }) => {
  return (
    <div className="bg-white p-2 rounded-xl shadow-xl">
      {/* Google Map Iframe */}
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"> {/* Requires @tailwindcss/aspect-ratio */}
        <iframe
          src={embedUrl}
          width="100%"
          height="100%" // For aspect ratio, height is controlled by padding
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${address}`}
        ></iframe>
      </div>
       {/* Optional: Display address below map if not in ContactInfoSection */}
       {/* <p className="mt-4 text-center text-sm text-gray-600">{address}</p> */}
    </div>
  );
};

export default MapSection;