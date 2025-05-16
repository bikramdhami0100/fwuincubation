// components/home/TestimonialCard.tsx
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

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
    <div className="bg-gradient-to-br from-brand-primary to-indigo-600 p-8 rounded-xl shadow-xl text-white relative h-full flex flex-col">
      <FaQuoteLeft className="absolute top-6 left-6 text-white/20 text-5xl" />
      <p className="relative text-lg italic mb-6 z-10 flex-grow">&quot;{testimonial.quote}&quot;</p>
      <div className="flex items-center mt-auto pt-6 border-t border-white/20">
        {testimonial.avatarUrl && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-brand-secondary">
            <Image src={testimonial.avatarUrl} alt={testimonial.author} layout="fill" objectFit="cover" />
          </div>
        )}
        <div>
          <p className="font-semibold text-white">{testimonial.author}</p>
          <p className="text-sm text-indigo-200">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;