"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '../common/Logo';
import { FiMenu, FiX, FiGlobe, FiChevronDown } from 'react-icons/fi';
import { 
  FaRocket, 
  FaUsers, 
  FaEnvelope, 
  FaHome, 
  FaRegLightbulb, 
  FaBook, 
  FaBriefcase, 
  FaLightbulb, 
  FaGraduationCap, 
  FaHandshake
} from 'react-icons/fa';

const menuItems: { 
  name: string; 
  href: string; 
  icon: React.ReactNode; 
  isHighlighted?: boolean;
  isNew?: boolean;
  description?: string;
}[] = [
  { 
    name: 'Home', 
    href: '/', 
    icon: <FaHome className="w-4 h-4" />,
    description: 'Welcome to our homepage'
  },
  { 
    name: 'About', 
    href: '/about', 
    icon: <FaUsers className="w-4 h-4" />,
    description: 'Learn about our university'
  },
  { 
    name: 'Programs', 
    href: '/programs', 
    icon: <FaGraduationCap className="w-4 h-4" />, 
    isHighlighted: true,
    description: 'Explore our academic programs'
  },
  { 
    name: 'Research', 
    href: '/research', 
    icon: <FaBook className="w-4 h-4" />,
    description: 'Discover our research initiatives'
  },
  { 
    name: 'Proposals', 
    href: '/submit-proposal', 
    icon: <FaRocket className="w-4 h-4" />,
    description: 'Submit your research proposals'
  },
  { 
    name: 'Projects', 
    href: '/projects', 
    icon: <FaRegLightbulb className="w-4 h-4" />,
    description: 'View our ongoing projects'
  },
  { 
    name: 'Careers', 
    href: '/careers', 
    icon: <FaBriefcase className="w-4 h-4" />,
    isNew: true,
    description: 'Explore job opportunities'
  },
  { 
    name: 'Startups', 
    href: '/startups', 
    icon: <FaLightbulb className="w-4 h-4" />,
    isNew: true,
    description: 'University startup initiatives'
  },
  { 
    name: 'Faculty', 
    href: '/faculty', 
    icon: <FaUsers className="w-4 h-4" />,
    description: 'Meet our faculty members'
  },
  {
         name:"Community",
         href:"/community",
         icon: <FaHandshake className="w-4 h-4" />,
         description: 'Join our community'
  },

  { 
    name: 'News', 
    href: '/news', 
    icon: <FaRegLightbulb className="w-4 h-4" />,
    description: 'Latest university news'
  },

  { 
    name: 'Contact', 
    href: '/contact', 
    icon: <FaEnvelope className="w-4 h-4" />,
    description: 'Get in touch with us'
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('#mobile-menu') && !target.closest('#mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleLangDropdown = () => setIsLangDropdownOpen(!isLangDropdownOpen);

  const switchLanguage = (lang: string) => {
    setCurrentLang(lang);
    setIsLangDropdownOpen(false);
    // Add actual language switching logic here
    console.log(`Language switched to ${lang}`);
  };

  return (
    <header className="sticky top-0 z-50 text-white">
      {/* Animated top border */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" style={{
        backgroundSize: '200% 100%',
        animation: 'gradientMove 8s linear infinite'
      }}></div>

      {/* Main header background with glass effect */}
      <div className={`relative transition-all duration-500 ${
        scrolled
          ? 'bg-indigo-900/90 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-indigo-900 to-blue-900'
      }`}>
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>

          {/* Animated dots */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo with hover effect */}
            <div className="relative z-10 transform transition-transform duration-300 hover:scale-105">
              <Logo />
            </div>

            {/* Desktop Menu - Responsive Scrollable */}
            <div className="hidden lg:flex items-center overflow-x-auto max-w-4xl scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-transparent">
              <nav className="flex items-center space-x-1 py-1 px-2">
                {menuItems.slice(0, 7).map((item) => {
                  const isActive = activeItem === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2.5 rounded-lg text-white font-medium transition-all duration-300 relative group whitespace-nowrap ${
                        isActive
                          ? 'bg-white/10 text-white before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-indigo-400'
                          : item.isHighlighted
                            ? 'bg-blue-600/30 hover:bg-blue-600/40 border border-blue-500/30'
                            : 'hover:bg-white/5'
                      }`}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        item.isHighlighted ? 'animate-pulse' : ''
                      }`}></div>

                      <span className="relative flex items-center">
                        <span className={`flex items-center justify-center w-6 h-6 rounded-full mr-2 transition-colors duration-300 ${
                          item.isHighlighted
                            ? 'bg-blue-500/30 group-hover:bg-blue-500/40 text-blue-100'
                            : 'bg-indigo-500/10 group-hover:bg-indigo-500/20'
                        }`}>
                          {item.icon}
                        </span>
                        {item.name}
                        {(item.isHighlighted || item.isNew) && (
                          <span className={`ml-2 px-1.5 py-0.5 text-[10px] font-bold ${item.isNew ? 'bg-green-500' : 'bg-blue-500'} text-white rounded-sm`}>
                            {item.isNew ? 'NEW' : 'FEATURED'}
                          </span>
                        )}
                      </span>

                      {/* Tooltip */}
                      {hoveredItem === item.name && item.description && (
                        <div className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-1 top-full w-48 p-2 bg-white/95 backdrop-blur-sm text-gray-800 text-xs rounded-lg shadow-lg border border-indigo-100 opacity-0 animate-fadeInFast">
                          {item.description}
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                        </div>
                      )}

                      {/* Bottom border animation */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Link>
                  );
                })}

                {/* "More" dropdown for additional menu items */}
                <div className="relative group">
                  <button
                    className="px-3 py-2.5 rounded-lg text-white font-medium transition-all duration-300 relative hover:bg-white/5 whitespace-nowrap"
                  >
                    <span className="relative flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full mr-2 transition-colors duration-300 bg-indigo-500/10 group-hover:bg-indigo-500/20">
                        <FiMenu className="w-4 h-4" />
                      </span>
                      More
                      <FiChevronDown className="ml-1" />
                    </span>
                    
                    {/* Bottom border animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-400 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </button>
                  
                  {/* Dropdown menu */}
                  <div className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl z-10 border border-indigo-100 overflow-hidden invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-blue-500"></div>
                    {menuItems.slice(7).map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-300 border-b border-gray-100 last:border-0"
                      >
                        <span className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center mr-2 text-indigo-600">
                          {item.icon}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-xs text-gray-500">{item.description}</span>
                        </div>
                        {item.isNew && (
                          <span className="ml-auto px-1.5 py-0.5 text-[10px] font-bold bg-green-500 text-white rounded-sm">
                            NEW
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>

              {/* Apply Button - Desktop */}
              <div className="ml-4 flex items-center">
                <Link
                  href="/apply"
                  className="relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center px-5 py-2.5 rounded-lg font-bold bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 shadow-md transition-all duration-300">
                    Apply Now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/40 to-purple-600/40 blur-md group-hover:blur-lg transition-all duration-300 -z-10"></span>
                  </span>
                </Link>

                {/* Language Switcher - Desktop */}
                <div className="relative ml-3">
                  <button
                    onClick={toggleLangDropdown}
                    className="flex items-center text-white font-medium bg-white/10 hover:bg-white/15 px-3 py-2.5 rounded-lg transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <FiGlobe className="mr-1.5" />
                    <span>{currentLang}</span>
                    <FiChevronDown className={`ml-1 transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isLangDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white/95 backdrop-blur-md rounded-xl shadow-xl z-10 border border-indigo-100 overflow-hidden transition-all duration-300 animate-fadeIn">
                      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-blue-500"></div>
                      <button
                        onClick={() => switchLanguage('EN')}
                        className="flex w-full items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 cursor-pointer transition-colors duration-300 border-b border-gray-100"
                      >
                        <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2 text-indigo-600">EN</span>
                        English
                      </button>
                      <button
                        onClick={() => switchLanguage('NE')}
                        className="flex w-full items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 cursor-pointer transition-colors duration-300"
                      >
                        <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2 text-indigo-600">NE</span>
                        नेपाली
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <Link
                href="/apply"
                className="relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center px-4 py-2 rounded-lg font-bold bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 shadow-md transition-all duration-300">
                  Apply
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
              </Link>

              <button
                onClick={() => switchLanguage(currentLang === 'EN' ? 'NE' : 'EN')}
                className="p-2.5 text-white bg-white/10 hover:bg-white/15 rounded-lg transition-all duration-300 border border-white/10 hover:border-white/20"
                aria-label="Switch Language"
              >
                <FiGlobe size={20} />
              </button>

              <button
                id="mobile-menu-button"
                onClick={toggleMobileMenu}
                className="p-2.5 text-white bg-white/10 hover:bg-white/15 rounded-lg transition-all duration-300 border border-white/10 hover:border-white/20"
                aria-label="Open menu"
              >
                {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Left Side Mobile Menu with animation */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-indigo-900/80 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu panel - Left side */}
        <div
          className={`absolute top-0 left-0 bottom-0 w-full max-w-xs bg-gradient-to-b from-indigo-800 to-indigo-900 shadow-2xl transform transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Menu header */}
          <div className="flex items-center justify-between p-6 border-b border-indigo-700/50">
            <div>
              <h3 className="text-xl font-bold text-white">Menu</h3>
              <p className="text-indigo-200 text-sm">Far Western University</p>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full bg-indigo-700/50 text-white hover:bg-indigo-700"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Menu items - Scrollable */}
          <div className="h-[calc(100%-160px)] overflow-y-auto p-2 custom-scrollbar">
            <nav className="py-2">
              <div className="space-y-1  mb-10">
                {menuItems.map((item, index) => {
                  const isActive = activeItem === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-indigo-700/50 text-white'
                          : item.isHighlighted
                            ? 'bg-blue-700/30 text-white border border-blue-600/30'
                            : 'text-indigo-100 hover:bg-indigo-700/30 hover:text-white'
                      }`}
                      style={{
                        transitionDelay: `${100 + index * 50}ms`,
                        animation: isMobileMenuOpen ? `fadeSlideIn 0.4s ease-out forwards ${100 + index * 50}ms` : 'none'
                      }}
                    >
                      <span className={`p-2.5 rounded-lg mr-3 text-white ${
                        item.isHighlighted
                          ? 'bg-blue-600/70'
                          : item.isNew
                            ? 'bg-green-600/70 animate-pulse'
                            : 'bg-indigo-600/50'
                      }`}>
                        {item.icon}
                      </span>
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <div>{item.name}</div>
                          <div className="text-xs text-indigo-300">{item.description}</div>
                        </div>
                        {(item.isHighlighted || item.isNew) && (
                          <span className={`ml-2 px-1.5 py-0.5 text-[10px] font-bold ${item.isNew ? 'bg-green-500' : 'bg-blue-500'} text-white rounded-sm whitespace-nowrap`}>
                            {item.isNew ? 'NEW' : 'FEATURED'}
                          </span>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* Additional mobile menu items */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-indigo-700/30">
            <div className="mb-4">
              <p className="text-xs uppercase tracking-wider text-indigo-300 mb-2">Language</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => switchLanguage('EN')}
                  className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    currentLang === 'EN'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-800/50 text-indigo-200 hover:bg-indigo-700'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => switchLanguage('NE')}
                  className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    currentLang === 'NE'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-800/50 text-indigo-200 hover:bg-indigo-700'
                  }`}
                >
                  नेपाली
                </button>
              </div>
            </div>
            <p className="text-indigo-200 text-xs text-center">© 2024 Far Western University</p>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.2); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInFast {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Custom scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(75, 85, 150, 0.2);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.6);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.8);
        }
        
        /* For Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(99, 102, 241, 0.6) rgba(75, 85, 150, 0.2);
        }
        
        /* Desktop horizontal scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          height: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.6);
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.8);
        }
      `}</style>
    </header>
  );
};

export default Header;