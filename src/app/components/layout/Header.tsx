"use client"
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../common/Logo';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi'; // Using react-icons

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Startups', href: '/startups' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const switchLanguage = (lang: string) => {
    setCurrentLang(lang);
    // Add actual language switching logic here
    console.log(`Language switched to ${lang}`);
  };

  return (
    <header className=" backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-brand-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            {/* Language Switcher - Desktop */}
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-brand-primary font-medium">
                <FiGlobe className="mr-1" /> {currentLang}
              </button>
              <div className="absolute right-0 mt-1 w-24 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <a
                  onClick={() => switchLanguage('EN')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-light cursor-pointer"
                >
                  English
                </a>
                <a
                  onClick={() => switchLanguage('UR')}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-light cursor-pointer"
                >
                  اردو
                </a>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => switchLanguage(currentLang === 'EN' ? 'UR' : 'EN')}
              className="p-2 text-gray-600 hover:text-brand-primary mr-2"
              aria-label="Switch Language"
            >
              <FiGlobe size={20} />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-brand-primary"
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg z-40">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-light transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;