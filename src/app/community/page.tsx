"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiUsers, FiCalendar, FiMapPin, FiArrowRight, FiMessageCircle, FiLink, FiGlobe, FiClock } from 'react-icons/fi';

// Community Member Type
interface CommunityMember {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

// Event Type
interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  link: string;
}

// Partner Type
interface Partner {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  website: string;
  type: 'academic' | 'industry' | 'government' | 'investor';
}

// Sample data for community members
const communityMembers: CommunityMember[] = [
  {
    id: 'm1',
    name: 'Dr. Rajesh Sharma',
    role: 'Mentor',
    company: 'Tech Innovations Nepal',
    bio: 'Experienced entrepreneur with over 15 years in technology startups. Specializes in AI and machine learning applications.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      website: 'https://example.com',
    },
  },
  {
    id: 'm2',
    name: 'Priya Adhikari',
    role: 'Startup Founder',
    company: 'EcoHarvest',
    bio: 'Founder of EcoHarvest, focusing on sustainable agricultural solutions for small-scale farmers in Nepal.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 'm3',
    name: 'Anish Thapa',
    role: 'Investor',
    company: 'Nepal Venture Capital',
    bio: 'Angel investor with a portfolio of over 20 startups across South Asia. Passionate about supporting innovative ideas.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      website: 'https://example.com',
    },
  },
  {
    id: 'm4',
    name: 'Sarita Gurung',
    role: 'Academic Advisor',
    company: 'Far Western University',
    bio: 'Professor of Business Administration with expertise in entrepreneurship and innovation management.',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
];

// Sample data for upcoming events
const upcomingEvents: Event[] = [
  {
    id: 'e1',
    title: 'Startup Networking Mixer',
    date: 'June 15, 2024',
    time: '4:00 PM - 7:00 PM',
    location: 'FWU Incubation Center, Mahendranagar',
    description: 'Connect with fellow entrepreneurs, mentors, and investors in a casual networking event. Share ideas and build valuable relationships.',
    imageUrl: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    link: '/events/startup-networking-mixer',
  },
  {
    id: 'e2',
    title: 'Pitch Perfect Workshop',
    date: 'June 22, 2024',
    time: '10:00 AM - 1:00 PM',
    location: 'FWU Incubation Center, Mahendranagar',
    description: 'Learn how to craft and deliver a compelling pitch for your startup. Get feedback from experienced entrepreneurs and investors.',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    link: '/events/pitch-perfect-workshop',
  },
  {
    id: 'e3',
    title: 'Women in Tech Meetup',
    date: 'July 5, 2024',
    time: '3:00 PM - 6:00 PM',
    location: 'FWU Incubation Center, Mahendranagar',
    description: 'A special networking event for women entrepreneurs and tech professionals. Share experiences and build a supportive community.',
    imageUrl: 'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    link: '/events/women-in-tech-meetup',
  },
];

// Sample data for partners
const partners: Partner[] = [
  {
    id: 'p1',
    name: 'Nepal Innovation Lab',
    description: 'Research and development center focused on technological innovation.',
    logoUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    website: 'https://example.com',
    type: 'academic',
  },
  {
    id: 'p2',
    name: 'Himalayan Ventures',
    description: 'Venture capital firm investing in early-stage startups in Nepal.',
    logoUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    website: 'https://example.com',
    type: 'investor',
  },
  {
    id: 'p3',
    name: 'Ministry of Science and Technology',
    description: 'Government body supporting technological advancement and innovation.',
    logoUrl: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    website: 'https://example.com',
    type: 'government',
  },
  {
    id: 'p4',
    name: 'TechStar Nepal',
    description: 'Leading technology company supporting startup ecosystem.',
    logoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    website: 'https://example.com',
    type: 'industry',
  },
];

export default function CommunityPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-indigo-500 opacity-10 animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-500 opacity-10 animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-purple-500 opacity-5 animate-pulse"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 p-2 bg-indigo-800/30 rounded-full">
              <div className="px-4 py-1 bg-indigo-700/50 rounded-full">
                <span className="text-indigo-100 font-medium">FWU Incubation Center</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Community</span>
            </h1>

            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Join a thriving ecosystem of entrepreneurs, mentors, investors, and partners working together to foster innovation and growth.
            </p>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Community Members Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-100 rounded-full mb-4">
                <FiUsers className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Community</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our diverse community of entrepreneurs, mentors, investors, and partners forms the backbone of our incubation center.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityMembers.map((member, index) => (
              <div
                key={member.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-indigo-100/20 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold text-lg">{member.name}</p>
                    <p className="text-indigo-200 text-sm">{member.role} at {member.company}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.socialLinks.linkedin && (
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    )}
                    {member.socialLinks.website && (
                      <a href={member.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 transition-colors">
                        <FiGlobe size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/community/members"
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              View All Members
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100 rounded-full opacity-30 blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full opacity-30 blur-3xl translate-x-1/4 translate-y-1/4"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(#4338ca 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-100 rounded-full mb-4">
                <FiCalendar className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Join us for workshops, networking events, and learning opportunities to grow your startup and connect with the community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-indigo-100/20 group transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <FiClock className="mr-2 text-indigo-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <FiMapPin className="mr-2 text-indigo-500" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm">{event.description}</p>
                  <Link
                    href={event.link}
                    className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group"
                  >
                    Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/events"
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              View All Events
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-100 rounded-full mb-4">
                <FiLink className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We collaborate with academic institutions, industry leaders, government bodies, and investors to create a thriving ecosystem.
            </p>
          </div>

          {/* Partner type tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            <button className="px-6 py-2 rounded-full bg-indigo-600 text-white font-medium">
              All Partners
            </button>
            <button className="px-6 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-indigo-50 transition-colors">
              Academic
            </button>
            <button className="px-6 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-indigo-50 transition-colors">
              Industry
            </button>
            <button className="px-6 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-indigo-50 transition-colors">
              Government
            </button>
            <button className="px-6 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-indigo-50 transition-colors">
              Investors
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-indigo-100/20 flex flex-col items-center text-center transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden bg-indigo-50 p-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white rounded-full"></div>
                  <div className="relative h-full w-full flex items-center justify-center">
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                <div className="mb-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    partner.type === 'academic' ? 'bg-blue-100 text-blue-700' :
                    partner.type === 'industry' ? 'bg-purple-100 text-purple-700' :
                    partner.type === 'government' ? 'bg-green-100 text-green-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {partner.type.charAt(0).toUpperCase() + partner.type.slice(1)}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 text-sm flex-grow">{partner.description}</p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group"
                >
                  Visit Website <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/partners"
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              View All Partners
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Join Community CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-blue-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-indigo-500 opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500 opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community Today</h2>
            <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
              Become part of our vibrant community of innovators and entrepreneurs. Connect, collaborate, and grow your startup with the support of like-minded individuals.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/apply"
                className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 transform"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 transform"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
