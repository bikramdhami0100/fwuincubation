// components/home/HeroBanner.tsx
import Button from '../common/Button';

const HeroBanner = () => {
  return (
    <div
      className="relative bg-gradient-to-br from-brand-primary to-indigo-700 text-white py-32 md:py-48 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center"
      // Optional: if you have a background image
      // style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Optional: Dark overlay for better text readability if using an image */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="block">Ignite Your Ideas.</span>
          <span className="block text-brand-secondary">Launch Your Future.</span>
        </h1>
        <p className="text-lg sm:text-xl text-indigo-100 mb-10 max-w-xl mx-auto">
          FWU Incubation Center: Where innovation meets opportunity. We empower aspiring entrepreneurs to transform their visions into thriving businesses.
        </p>
        <Button href="/apply" variant="primary" size="lg" className="text-brand-dark font-bold">
          Apply Now
        </Button>
      </div>
       {/* Subtle decorative elements */}
       <div className="absolute top-10 left-10 w-20 h-20 bg-brand-secondary/20 rounded-full animate-pulse"></div>
       <div className="absolute bottom-10 right-10 w-16 h-16 bg-brand-accent/20 rounded-lg animate-ping"></div>
    </div>
  );
};

export default HeroBanner;