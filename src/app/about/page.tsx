// pages/about.tsx


import AdvisoryBoardSection from '../components/about/AdvisoryBoardSection';
import IntroAbout from '../components/about/IntroAbout';
import TeamSection from '../components/about/TeamSection';

export default function AboutPage() {
  return (
    <>

      <main>
        {/* Optional: A subtle hero or banner for the About page */}
        <div className="bg-gradient-to-b from-brand-primary/10 to-brand-light py-16 md:py-24 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-4">
              About FWU Incubation Center
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Driving innovation and empowering the next generation of entrepreneurs.
            </p>
          </div>
        </div>
        <IntroAbout />
        <TeamSection />
        <AdvisoryBoardSection />
      </main>

    </>
  );
}