// components/home/FeaturedStartups.tsx
import SectionTitle from '../shared/SectionTitle';
import StartupCard, { Startup } from './StartupCard';
// If using a carousel library:
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules';

const startupsData: Startup[] = [
  {
    id: 's1',
    name: 'EduSpark',
    logoUrl: '/startup-logo1.png', // Add to public
    description: 'Revolutionizing online learning with AI-powered personalized study plans.',
    website: 'https://eduspark.example.com',
    industry: 'EdTech',
  },
  {
    id: 's2',
    name: 'GreenShift',
    logoUrl: '/startup-logo2.png', // Add to public
    description: 'Sustainable solutions for urban waste management and recycling.',
    website: 'https://greenshift.example.com',
    industry: 'Sustainability',
  },
  {
    id: 's3',
    name: 'HealthAI',
    logoUrl: '/startup-logo3.png', // Add to public
    description: 'AI-driven diagnostics for early disease detection.',
    website: 'https://healthai.example.com',
    industry: 'HealthTech',
  },
    {
    id: 's4',
    name: 'ConnectSphere',
    logoUrl: '/startup-logo4.png', // Add to public
    description: 'A decentralized social platform focused on privacy and user data ownership.',
    website: 'https://connectsphere.example.com',
    industry: 'Social Tech',
  },
];

const FeaturedStartups = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Featured Startups" subtitle="Success Stories" />
        {/* Simple Grid Implementation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {startupsData.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>

        {/* 
        // Example with Swiper.js (install swiper and its modules first)
        // You'll need to style navigation/pagination or use default ones.
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="!pb-12" // Adjust padding for pagination
        >
          {startupsData.map((startup) => (
            <SwiperSlide key={startup.id} className="h-auto">
              <StartupCard startup={startup} />
            </SwiperSlide>
          ))}
        </Swiper>
        */}
      </div>
    </section>
  );
};

export default FeaturedStartups;