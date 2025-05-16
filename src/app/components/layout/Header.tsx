"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '../common/Logo';
import { FiMenu, FiX, FiGlobe, FiChevronDown } from 'react-icons/fi';
import { FaGraduationCap, FaRocket, FaUsers, FaEnvelope, FaHome } from 'react-icons/fa';

const menuItems = [
  { name: 'Home', href: '/', icon: <FaHome className="mr-2" /> },
  { name: 'About Us', href: '/about', icon: <FaUsers className="mr-2" /> },
  { name: 'Programs', href: '/programs', icon: <FaGraduationCap className="mr-2" /> },
  { name: 'Startups', href: '/startups', icon: <FaRocket className="mr-2" /> },
  { name: 'Contact', href: '/contact', icon: <FaEnvelope className="mr-2" /> },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('/');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Set active menu item based on current path
    if (typeof window !== 'undefined') {
      setActiveItem(window.location.pathname);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const switchLanguage = (lang: string) => {
    setCurrentLang(lang);
    // Add actual language switching logic here
    console.log(`Language switched to ${lang}`);
  };

  return (
    <header className={`sticky top-0 z-50 text-white transition-all duration-300 ${scrolled ? 'bg-blue-800/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-r from-blue-900 to-blue-700'}`}>
      {/* Animated top border */}
      <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-teal-400 to-blue-500" style={{
        backgroundSize: '200% 100%',
        animation: 'gradientMove 8s linear infinite'
      }}></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 right-1/4 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-8 left-1/3 w-24 h-24 bg-teal-400/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo with hover effect */}
          <div className="transform transition-transform duration-300 hover:scale-105">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-2">
              {menuItems.map((item) => {
                const isActive = activeItem === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-md text-white font-medium transition-all duration-300 relative group overflow-hidden ${
                      isActive ? 'bg-blue-600/50 text-white' : 'hover:bg-blue-600/30'
                    }`}
                  >
                    {/* Hover effect */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>

                    {/* Text with icon on hover */}
                    <span className="flex items-center">
                      <span className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 absolute left-2">
                        {item.icon}
                      </span>
                      <span className="group-hover:translate-x-6 transition-transform duration-300">{item.name}</span>
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Apply Button with enhanced animation */}
            <Link
              href="/apply"
              className="ml-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-2.5 rounded-lg font-bold shadow-md hover:shadow-yellow-400/20 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative flex items-center justify-center">
                Apply Now
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </Link>

            {/* Language Switcher - Desktop with enhanced dropdown */}
            <div className="relative group ml-4">
              <button className="flex items-center text-white font-medium bg-blue-800/50 hover:bg-blue-700 px-3 py-2.5 rounded-md transition-all duration-300 border border-blue-600/30 hover:border-blue-500">
                <FiGlobe className="mr-1.5" /> {currentLang}
                <FiChevronDown className="ml-1 transform group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute right-0 mt-1 w-36 bg-white/95 backdrop-blur-md rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-blue-100 overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-teal-400"></div>
                <a
                  onClick={() => switchLanguage('EN')}
                  className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 cursor-pointer transition-colors duration-300 border-b border-gray-100"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 text-blue-600">EN</span>
                  English
                </a>
                <a
                  onClick={() => switchLanguage('UR')}
                  className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 cursor-pointer transition-colors duration-300"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 text-blue-600">NE</span>
                  नेपाली
                </a>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link
              href="/apply"
              className="mr-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-3 py-2 rounded-md text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
            >
              Apply
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </Link>
            <button
              onClick={() => switchLanguage(currentLang === 'EN' ? 'UR' : 'EN')}
              className="p-2 text-white hover:text-yellow-300 mr-2 bg-blue-800/70 hover:bg-blue-700 rounded-md transition-all duration-300 border border-blue-600/30"
              aria-label="Switch Language"
            >
              <FiGlobe size={18} />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-white hover:text-yellow-300 bg-blue-800/70 hover:bg-blue-700 rounded-md transition-all duration-300 border border-blue-600/30"
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-gradient-to-b from-blue-800 to-blue-900 shadow-lg z-40 border-b border-blue-700 transform transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <nav className="px-4 pt-2 pb-4 space-y-1">
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center px-4 py-3 rounded-md text-base font-medium text-white hover:text-yellow-300 hover:bg-blue-700/50 transition-all duration-300 border-b border-blue-700/30 last:border-0"
              style={{
                transitionDelay: `${index * 50}ms`,
                animation: isMobileMenuOpen ? `fadeSlideIn 0.3s ease-out forwards ${index * 50}ms` : 'none'
              }}
            >
              <span className="bg-blue-700/50 p-2 rounded-md mr-3 text-yellow-400">
                {item.icon}
              </span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Header;