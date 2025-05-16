// components/layout/Footer.tsx
import Link from 'next/link';
import Logo from '../common/Logo';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const quickLinks = [
  { name: 'Apply Now', href: '/apply' },
  { name: 'Our Team', href: '/team' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

const socialLinks = [
  { icon: <FaFacebook />, href: 'https://facebook.com/fwuincubation', label: 'Facebook' },
  { icon: <FaTwitter />, href: 'https://twitter.com/fwuincubation', label: 'Twitter' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/company/fwuincubation', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: 'https://instagram.com/fwuincubation', label: 'Instagram' },
];

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <Logo /> {/* We can style Logo to accept a theme prop (e.g., dark) or override styles here */}
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering the next generation of innovators and entrepreneurs at Frontier Women University.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-brand-secondary mt-1 mr-3 flex-shrink-0" />
                <span>Frontier Women University, Peshawar, KPK, Pakistan</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-brand-secondary mr-3" />
                <a href="tel:+92000000000" className="hover:text-brand-secondary transition-colors">+92 (000) 000-0000</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-brand-secondary mr-3" />
                <a href="mailto:info@fwuincubation.edu.pk" className="hover:text-brand-secondary transition-colors">info@fwuincubation.edu.pk</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-brand-secondary transition-colors text-2xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
             <p className="text-sm text-gray-400 mt-6">
                Stay updated with our latest news and events.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} FWU Incubation Center. All Rights Reserved.</p>
          <p className="mt-1">
            Designed with <span className="text-red-500">♥</span> by Innovators for Innovators.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;