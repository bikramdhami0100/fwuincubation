import PastEventsGallerySection from "../components/programs/PastEventsGallerySection ";
import ProgramCalendarSection from "../components/programs/ProgramCalendarSection ";
import ProgramTypesSection from "../components/programs/ProgramTypesSection";


export default function ProgramsPage() {
  return (
    <>
        {/* Page Hero/Banner */}
        <div className="bg-gradient-to-r from-brand-secondary to-brand-primary text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Empowering Through Programs
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto">
              Discover a range of initiatives designed to equip you with the skills, knowledge, and network to succeed.
            </p>
          </div>
        </div>

        <ProgramTypesSection/>
        <ProgramCalendarSection />
        <PastEventsGallerySection />
    </>
  );
}