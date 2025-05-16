"use client"
import HeroBanner from './components/home/HeroBanner';
import IntroSection from './components/home/IntroSection';
import FeaturedStartups from './components/home/FeaturedStartups';
import Testimonials from './components/home/Testimonials';
import UpcomingPrograms from './components/home/UpcomingPrograms';


export default function HomePage() {
  return (
    <>

      <main>
        <HeroBanner />
        <IntroSection />
        <UpcomingPrograms />
        <FeaturedStartups/>
        <Testimonials />
      </main>

    </>
  );
}