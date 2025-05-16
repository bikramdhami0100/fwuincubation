// components/home/TestimonialCard.tsx
import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-xl relative h-full flex flex-col border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:border-blue-200">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400 rounded-t-xl"></div>

      {/* Quote icon with gradient background */}
      <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
        <FaQuoteLeft className="text-white text-sm" />
      </div>

      {/* Rating stars */}
      <div className="flex mb-4 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="mr-1" />
        ))}
      </div>

      {/* Quote text */}
      <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow italic">
        &quot;{testimonial.quote}&quot;
      </p>

      {/* Author info */}
      <div className="flex items-center mt-auto pt-6 border-t border-gray-100">
        {testimonial.avatarUrl && (
          <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-50 shadow-md group-hover:border-blue-200 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
            <Image
              src={testimonial.avatarUrl}
              alt={testimonial.author}
              width={64}
              height={64}
              className="relative z-10 object-cover"
            />
            <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}
        <div>
          <p className="font-semibold text-blue-900">{testimonial.author}</p>
          <p className="text-sm text-blue-600">{testimonial.role}</p>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden opacity-10">
        <div className="absolute transform rotate-45 bg-blue-400 w-16 h-16 -bottom-8 -right-8"></div>
      </div>
    </div>
  );
};

export default TestimonialCard;