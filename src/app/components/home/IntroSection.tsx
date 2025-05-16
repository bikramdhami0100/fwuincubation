// components/home/IntroSection.tsx
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Welcome to FWU Incubation Center" subtitle="Our Mission" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              The FWU Incubation Center is a dynamic hub designed to foster innovation and entrepreneurship
              within the university community and beyond. We provide startups and aspiring entrepreneurs with
              the resources, mentorship, and network they need to succeed.
            </p>
            <p>
              Our goal is to create a vibrant ecosystem where creative ideas can flourish, transform into
              viable products and services, and contribute to economic growth. We believe in empowering
              the next generation of leaders and innovators.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-6">
              <li>State-of-the-art co-working spaces</li>
              <li>Expert mentorship from industry leaders</li>
              <li>Access to funding opportunities and investors</li>
              <li>Workshops and training programs</li>
              <li>A supportive community of like-minded individuals</li>
            </ul>
          </div>
          <div className="relative h-64 md:h-96 rounded-xl shadow-2xl overflow-hidden group">
            <Image
              src="/innovation-hub.jpg" // Replace with a relevant image in public folder
              alt="FWU Incubation Center collaborative space"
              layout="fill"
              objectFit="cover"
              className="transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default IntroSection;