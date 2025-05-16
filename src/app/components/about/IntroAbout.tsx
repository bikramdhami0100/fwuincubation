// components/about/IntroAbout.tsx
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import { FaBullseye, FaLightbulb } from 'react-icons/fa'; // Example icons

const IntroAbout = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div>
            <SectionTitle title="Our Genesis" subtitle="FWU & The Incubation Hub" align="left" />
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Frontier Women University (FWU), a pioneer in women&#39;s education in Khyber Pakhtunkhwa,
                has always been committed to academic excellence and empowering women. Recognizing the
                transformative power of entrepreneurship, FWU established its Incubation Center to
                provide a dedicated platform for nurturing innovation and supporting aspiring female
                entrepreneurs.
              </p>
              <p>
                The FWU Incubation Center acts as a catalyst, bridging the gap between academic learning
                and real-world business application. We aim to cultivate an entrepreneurial mindset
                among students, faculty, and the wider community, fostering a culture of creativity,
                problem-solving, and economic self-reliance.
              </p>
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-xl shadow-2xl overflow-hidden group">
            <Image
              src="/fwu-campus.jpg" // Replace with an image of FWU or relevant building
              alt="Frontier Women University Campus"
              layout="fill"
              objectFit="cover"
              className="transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent"></div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <SectionTitle title="Our Guiding Principles" subtitle="Mission & Vision" />
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Mission Card */}
          <div className="bg-brand-light p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-brand-accent text-white p-3 rounded-full mr-4">
                <FaBullseye size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-brand-dark">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To empower and support aspiring entrepreneurs, especially women, by providing comprehensive resources,
              expert mentorship, and a collaborative environment to transform innovative ideas into sustainable
              and impactful businesses.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-brand-light p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-brand-secondary text-white p-3 rounded-full mr-4">
                <FaLightbulb size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-brand-dark">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be a leading incubation center recognized for fostering a vibrant entrepreneurial ecosystem
              that drives economic growth, innovation, and social development, particularly through the
              empowerment of women in business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroAbout;