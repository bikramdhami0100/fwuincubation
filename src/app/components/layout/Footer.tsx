"use client"
import Link from 'next/link';
import Logo from '../common/Logo';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronUp, FaGraduationCap, FaBook, FaUniversity, FaUsers } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const quickLinks = [
  { name: 'Apply Now', href: '/apply', icon: <FaGraduationCap className="text-yellow-400" /> },
  { name: 'Academic Programs', href: '/programs', icon: <FaBook className="text-yellow-400" /> },
  { name: 'Campus Life', href: '/campus', icon: <FaUniversity className="text-yellow-400" /> },
  { name: 'Our Faculty', href: '/faculty', icon: <FaUsers className="text-yellow-400" /> },
  { name: 'Research', href: '/research', icon: <FaBook className="text-yellow-400" /> },
];

const socialLinks = [
  { icon: <FaFacebook />, href: 'https://facebook.com/fwu', label: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700' },
  { icon: <FaTwitter />, href: 'https://twitter.com/fwu', label: 'Twitter', color: 'bg-sky-500 hover:bg-sky-600' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/company/fwu', label: 'LinkedIn', color: 'bg-blue-700 hover:bg-blue-800' },
  { icon: <FaInstagram />, href: 'https://instagram.com/fwu', label: 'Instagram', color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500' },
];

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Fade in animation on load
    setIsVisible(true);

    // Show/hide scroll to top button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Wave Top Divider */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-white"></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className={`bg-gradient-to-b from-blue-800 to-blue-900 pt-24 pb-8 relative transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Animated Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full"
             style={{filter: 'blur(70px)', animation: 'pulse 8s infinite alternate'}}></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full"
             style={{filter: 'blur(70px)', animation: 'float 10s infinite alternate'}}></div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `moveUpSlow ${Math.random() * 15 + 15}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Logo & About */}
            <div className="space-y-6 transform transition-all duration-700" style={{animationDelay: '0ms'}}>
              <div className="transform transition-transform duration-300 hover:scale-105">
                <Logo variant="dark" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering the next generation of innovators and entrepreneurs at Far Western University, Nepal.
              </p>

              {/* Newsletter Signup */}
              <div className="pt-4">
                <h4 className="text-white text-sm font-semibold mb-3">Subscribe to our newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-blue-900/50 border border-blue-700 rounded-l-md px-4 py-2 text-sm text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-teal-400 w-full"
                  />
                  <button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-blue-900 font-bold px-4 py-2 rounded-r-md transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="transform transition-all duration-700" style={{animationDelay: '200ms'}}>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name} className="transform hover:-translate-x-2 transition-transform duration-300">
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-8 h-8 bg-blue-800/50 rounded-md flex items-center justify-center mr-3 group-hover:bg-blue-700/70 transition-colors">
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="transform transition-all duration-700" style={{animationDelay: '400ms'}}>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="w-8 h-8 bg-blue-800/50 rounded-md flex items-center justify-center mr-3 text-teal-400 group-hover:bg-blue-700/70 transition-colors">
                    <FaMapMarkerAlt />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    Far Western University, Kanchanpur, Mahendranagar, Katan-5, Nepal
                  </span>
                </li>
                <li className="flex items-center group">
                  <div className="w-8 h-8 bg-blue-800/50 rounded-md flex items-center justify-center mr-3 text-teal-400 group-hover:bg-blue-700/70 transition-colors">
                    <FaPhone />
                  </div>
                  <a href="tel:+97799000000" className="text-gray-300 group-hover:text-white transition-colors">
                    +977 99-000000
                  </a>
                </li>
                <li className="flex items-center group">
                  <div className="w-8 h-8 bg-blue-800/50 rounded-md flex items-center justify-center mr-3 text-teal-400 group-hover:bg-blue-700/70 transition-colors">
                    <FaEnvelope />
                  </div>
                  <a href="mailto:info@fwu.edu.np" className="text-gray-300 group-hover:text-white transition-colors">
                    info@fwu.edu.np
                  </a>
                </li>
              </ul>

              {/* Google Maps */}
              <div className="mt-6 rounded-lg overflow-hidden shadow-lg border-2 border-blue-700/50 hover:border-teal-400/50 transition-colors duration-300">
                <div className="bg-blue-800/50 text-xs text-center py-1 text-gray-300">Campus Location</div>
                <div className="h-32 bg-blue-900/50 flex items-center justify-center">
                  <span className="text-teal-400 text-sm">Interactive Map</span>
                </div>
              </div>
            </div>

            {/* Column 4: Social Media */}
            <div className="transform transition-all duration-700" style={{animationDelay: '600ms'}}>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Connect With Us
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></span>
              </h3>

              {/* Social Media Icons */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`${social.color} rounded-lg p-3 flex items-center text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group`}
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center mr-3 group-hover:bg-white/20 transition-colors">
                      {social.icon}
                    </div>
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>

              {/* Working Hours */}
              <div className="bg-blue-800/30 rounded-lg p-4 border border-blue-700/30">
                <h4 className="text-white text-sm font-semibold mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Office Hours
                </h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-teal-400">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-teal-400">9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-yellow-400">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-blue-700/50 pt-8 mt-8">
            {/* Copyright & Credits */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Far Western University, Nepal. All Rights Reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Established by the Act of Parliament, 2010
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">•</span>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Use
                </Link>
                <span className="text-gray-600">•</span>
                <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>

            {/* Credits */}
            <div className="text-center mt-6">
              <p className="text-gray-500 text-xs flex items-center justify-center">
                Designed with <span className="text-red-500 mx-1">♥</span> by Innovators for Innovators
              </p>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white flex items-center justify-center shadow-lg transform transition-all duration-300 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <FaChevronUp />
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes moveUpSlow {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-1000px); opacity: 0; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;