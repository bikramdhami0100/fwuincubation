// components/home/Testimonials.tsx
import SectionTitle from '../shared/SectionTitle';
import TestimonialCard, { Testimonial } from './TestimonialCard';

const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    quote: "The incubation center provided invaluable mentorship and resources that helped us secure our first round of funding. Truly a game-changer!",
    author: 'Aisha Khan',
    role: 'Founder, EduSpark',
    avatarUrl: '/student-avatar1.jpg', // Add to public
  },
  {
    id: 't2',
    quote: "Being part of this community was inspiring. The workshops were practical, and the networking opportunities were fantastic.",
    author: 'Bilal Ahmed',
    role: 'Student Entrepreneur, GreenShift Co-founder',
    avatarUrl: '/student-avatar2.jpg', // Add to public
  },
  {
    id: 't3',
    quote: "From a raw idea to a market-ready product, the FWU Incubation Center guided us every step of the way. Highly recommended!",
    author: 'Fatima Zahra',
    role: 'CEO, HealthAI',
    avatarUrl: '/student-avatar3.jpg', // Add to public
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="What Our Innovators Say" subtitle="Testimonials" />
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;