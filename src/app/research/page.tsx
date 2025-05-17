"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiExternalLink, FiSearch } from 'react-icons/fi';
import { FaFlask, FaBook, FaUniversity, FaGraduationCap, FaHandshake, FaUser } from 'react-icons/fa';

// Research Project Type
interface ResearchProject {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  researchers: string[];
  status: 'ongoing' | 'completed';
  year: string;
}

// Publication Type
interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: string;
  abstract: string;
  link: string;
  imageUrl: string;
}

// Research Center Type
interface ResearchCenter {
  id: string;
  name: string;
  description: string;
  focus: string[];
  imageUrl: string;
  contact: string;
}

export default function ResearchPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Sample Research Projects Data
  const researchProjects: ResearchProject[] = [
    {
      id: 'rp1',
      title: 'Sustainable Agricultural Practices in Far Western Nepal',
      description: 'This research project focuses on developing sustainable agricultural practices suitable for the unique geographical and climatic conditions of Far Western Nepal. The project aims to improve crop yields, reduce environmental impact, and enhance the livelihoods of local farmers.',
      category: 'Agriculture',
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      researchers: ['Dr. Rajendra Sharma', 'Dr. Anita Poudel', 'Prof. Binod Thapa'],
      status: 'ongoing',
      year: '2024'
    },
    {
      id: 'rp2',
      title: 'Biodiversity Conservation in Shuklaphanta National Park',
      description: 'This project studies the biodiversity of Shuklaphanta National Park and develops conservation strategies for endangered species. The research includes wildlife monitoring, habitat assessment, and community-based conservation approaches.',
      category: 'Environmental Science',
      imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      researchers: ['Dr. Sarita Joshi', 'Prof. Kamal Thapa', 'Dr. Nirmala Bhatta'],
      status: 'ongoing',
      year: '2023'
    },
    {
      id: 'rp3',
      title: 'Renewable Energy Solutions for Rural Communities',
      description: 'This research explores affordable and sustainable renewable energy solutions for rural communities in Far Western Nepal. The project focuses on solar, micro-hydro, and biomass energy technologies adapted to local conditions and needs.',
      category: 'Engineering',
      imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      researchers: ['Prof. Ramesh Bhatt', 'Dr. Sunita Chaudhary', 'Dr. Prakash Joshi'],
      status: 'ongoing',
      year: '2024'
    },
    {
      id: 'rp4',
      title: 'Traditional Knowledge and Medicinal Plants of Far Western Nepal',
      description: 'This project documents and studies the traditional knowledge of medicinal plants used by indigenous communities in Far Western Nepal. The research aims to preserve this knowledge and explore potential applications in modern medicine.',
      category: 'Health Sciences',
      imageUrl: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      researchers: ['Dr. Meena Bhandari', 'Prof. Hari Prasad Sharma', 'Dr. Laxmi Rawat'],
      status: 'completed',
      year: '2022'
    },
    {
      id: 'rp5',
      title: 'Climate Change Adaptation Strategies for Local Communities',
      description: 'This research develops and evaluates climate change adaptation strategies for vulnerable communities in Far Western Nepal. The project focuses on water resource management, agricultural adaptations, and disaster risk reduction.',
      category: 'Environmental Science',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      researchers: ['Prof. Dipak Bhatta', 'Dr. Sabita Ranabhat', 'Dr. Mohan Singh Dhami'],
      status: 'completed',
      year: '2023'
    },
    {
      id: 'rp6',
      title: 'Educational Technology for Remote Learning in Rural Areas',
      description: 'This project develops and tests educational technology solutions for remote learning in rural areas of Far Western Nepal. The research addresses challenges such as limited internet connectivity, power supply, and digital literacy.',
      category: 'Education',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      researchers: ['Dr. Bhawana Joshi', 'Prof. Narendra Joshi', 'Dr. Prabha Sharma'],
      status: 'ongoing',
      year: '2024'
    }
  ];

  // Sample Publications Data
  const publications: Publication[] = [
    {
      id: 'pub1',
      title: 'Biodiversity Status and Conservation Challenges in Shuklaphanta National Park, Nepal',
      authors: ['Joshi, S.', 'Thapa, K.', 'Bhatta, N.'],
      journal: 'Journal of Biodiversity Conservation',
      year: '2023',
      abstract: 'This paper presents a comprehensive assessment of biodiversity status in Shuklaphanta National Park, Nepal, and discusses the challenges and strategies for conservation. The study includes surveys of flora and fauna, analysis of threats, and evaluation of current conservation measures.',
      link: '#',
      imageUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
    },
    {
      id: 'pub2',
      title: 'Traditional Medicinal Plants Used by Indigenous Communities in Far Western Nepal',
      authors: ['Bhandari, M.', 'Sharma, H. P.', 'Rawat, L.'],
      journal: 'Journal of Ethnopharmacology',
      year: '2022',
      abstract: 'This study documents the traditional medicinal plants used by indigenous communities in Far Western Nepal. The research identifies 120 plant species used for various medicinal purposes and analyzes their pharmacological properties, conservation status, and potential applications in modern medicine.',
      link: '#',
      imageUrl: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
    },
    {
      id: 'pub3',
      title: 'Renewable Energy Potential and Implementation Challenges in Rural Nepal',
      authors: ['Bhatt, R.', 'Chaudhary, S.', 'Joshi, P.'],
      journal: 'Renewable Energy',
      year: '2024',
      abstract: 'This paper assesses the potential for renewable energy development in rural areas of Nepal, with a focus on solar, micro-hydro, and biomass technologies. The study analyzes technical, economic, and social factors affecting implementation and proposes strategies to overcome challenges.',
      link: '#',
      imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
    },
    {
      id: 'pub4',
      title: 'Climate Change Impacts on Water Resources in Far Western Nepal',
      authors: ['Bhatta, D.', 'Ranabhat, S.', 'Dhami, M. S.'],
      journal: 'Journal of Hydrology',
      year: '2023',
      abstract: 'This research investigates the impacts of climate change on water resources in Far Western Nepal. The study analyzes historical climate data, models future scenarios, and assesses implications for water availability, agriculture, and community livelihoods.',
      link: '#',
      imageUrl: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
    }
  ];

  // Sample Research Centers Data
  const researchCenters: ResearchCenter[] = [
    {
      id: 'rc1',
      name: 'Center for Environmental Research and Conservation',
      description: 'The Center for Environmental Research and Conservation focuses on biodiversity conservation, ecosystem management, and environmental sustainability in Far Western Nepal. The center conducts research, provides training, and engages with local communities to address environmental challenges.',
      focus: ['Biodiversity Conservation', 'Ecosystem Management', 'Climate Change Adaptation'],
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      contact: 'cerc@fwu.edu.np'
    },
    {
      id: 'rc2',
      name: 'Agricultural Innovation and Development Center',
      description: 'The Agricultural Innovation and Development Center conducts research on sustainable agriculture, crop improvement, and agricultural technology. The center works with farmers, agricultural extension services, and industry partners to develop and disseminate innovative solutions.',
      focus: ['Sustainable Agriculture', 'Crop Improvement', 'Agricultural Technology'],
      imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      contact: 'aidc@fwu.edu.np'
    },
    {
      id: 'rc3',
      name: 'Center for Renewable Energy Research',
      description: 'The Center for Renewable Energy Research focuses on developing and adapting renewable energy technologies for the specific needs and conditions of Far Western Nepal. The center conducts research on solar, micro-hydro, wind, and biomass energy systems.',
      focus: ['Solar Energy', 'Micro-hydro Power', 'Biomass Energy'],
      imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      contact: 'crer@fwu.edu.np'
    },
    {
      id: 'rc4',
      name: 'Health and Medical Research Institute',
      description: 'The Health and Medical Research Institute conducts research on public health, traditional medicine, and healthcare delivery in Far Western Nepal. The institute collaborates with healthcare providers, government agencies, and international partners to improve health outcomes in the region.',
      focus: ['Public Health', 'Traditional Medicine', 'Healthcare Delivery'],
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      contact: 'hmri@fwu.edu.np'
    }
  ];

  // Filter projects based on active tab and search query
  const filteredProjects = researchProjects.filter(project => {
    const matchesTab = activeTab === 'all' ||
                      (activeTab === 'ongoing' && project.status === 'ongoing') ||
                      (activeTab === 'completed' && project.status === 'completed');

    const matchesSearch = searchQuery === '' ||
                         project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative py-20 md:py-28 bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 text-white overflow-hidden"
      >
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
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6 p-2 bg-indigo-800/30 rounded-full">
              <div className="px-4 py-1 bg-indigo-700/50 rounded-full">
                <span className="text-indigo-100 font-medium">Far Western University</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Innovation</span>
            </h1>

            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Exploring new frontiers of knowledge through cutting-edge research and innovation at Far Western University.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8 relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for research projects, publications, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-4 px-6 pl-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                />
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-300 text-xl" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-300 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
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
      </div>

      {/* Research Highlights Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-100 rounded-full mb-4">
                <FaFlask className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Highlights</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our innovative research projects addressing local and global challenges across various disciplines.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-indigo-50'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'ongoing'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-indigo-50'
              }`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'completed'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-indigo-50'
              }`}
            >
              Completed
            </button>
          </div>

          {/* Research Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-indigo-100/20 group h-full flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        project.status === 'ongoing'
                          ? 'bg-green-500/90 text-white'
                          : 'bg-blue-500/90 text-white'
                      }`}>
                        {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/90 text-indigo-600">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="px-6 pb-6">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.researchers.slice(0, 2).map((researcher, index) => (
                        <span key={index} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
                          {researcher}
                        </span>
                      ))}
                      {project.researchers.length > 2 && (
                        <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
                          +{project.researchers.length - 2} more
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{project.year}</span>
                      <button className="text-indigo-600 font-medium text-sm flex items-center group/btn">
                        Learn More
                        <FiArrowRight className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiSearch className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-gray-600 mb-6">
                We could not  find any research projects matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveTab('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}

          {/* View All Projects Button */}
          {filteredProjects.length > 0 && filteredProjects.length < researchProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => {
                  setActiveTab('all');
                  setSearchQuery('');
                }}
                className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                View All Projects
                <FiArrowRight className="ml-2" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Research Centers Section */}
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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-100 rounded-full mb-4">
                <FaUniversity className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Centers</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our specialized research centers drive innovation and address critical challenges through focused research initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchCenters.map((center) => (
              <div
                key={center.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-indigo-100/20 group"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                    <Image
                      src={center.imageUrl}
                      alt={center.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-indigo-900/30 md:bg-gradient-to-t"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-6 md:hidden">
                      <h3 className="text-xl font-bold text-white text-center">
                        {center.name}
                      </h3>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hidden md:block">
                      {center.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {center.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Research Focus:</h4>
                      <div className="flex flex-wrap gap-2">
                        {center.focus.map((area, index) => (
                          <span key={index} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <a href={`mailto:${center.contact}`} className="text-sm text-indigo-600 hover:underline">
                        {center.contact}
                      </a>
                      <button className="text-indigo-600 font-medium text-sm flex items-center group/btn">
                        Learn More
                        <FiArrowRight className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-100 rounded-full mb-4">
                <FaBook className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Publications</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our latest research publications contributing to knowledge advancement in various fields.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {publications.map((publication) => (
              <div
                key={publication.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-indigo-100/20 group"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                    <Image
                      src={publication.imageUrl}
                      alt={publication.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-indigo-900/30 md:bg-gradient-to-t"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-white/90 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full inline-block">
                        {publication.year}
                      </div>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {publication.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {publication.authors.join(', ')} | {publication.journal}
                    </p>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {publication.abstract}
                    </p>
                    <div className="flex justify-between items-center">
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 font-medium text-sm flex items-center group/btn"
                      >
                        Read Full Paper
                        <FiExternalLink className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                      <button className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="#"
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              View All Publications
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Research Opportunities Section */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-100 rounded-full mb-4">
                <FaGraduationCap className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Opportunities</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join our research community and contribute to innovative projects addressing local and global challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* For Students */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-indigo-100/20 group">
              <div className="p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                  <FaGraduationCap className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">For Students</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Research assistantships with faculty members</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Undergraduate research programs</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Master&#39;s and PhD research opportunities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Summer research internships</p>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors group/btn"
                >
                  Learn More
                  <FiArrowRight className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* For Faculty */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-indigo-100/20 group">
              <div className="p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                  <FaUser className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">For Faculty</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Internal research grants</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Collaborative research initiatives</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Research leave opportunities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Publication and conference support</p>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors group/btn"
                >
                  Learn More
                  <FiArrowRight className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* For External Partners */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-indigo-100 transition-all duration-300 hover:shadow-indigo-100/20 group">
              <div className="p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                  <FaHandshake className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">For External Partners</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Industry-academic partnerships</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Collaborative research projects</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Consulting services</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Technology transfer opportunities</p>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors group/btn"
                >
                  Learn More
                  <FiArrowRight className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-blue-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-indigo-500 opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500 opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Collaborate on Research?</h2>
            <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
              Join our research community at Far Western University and contribute to innovative projects addressing local and global challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/contact"
                className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 transform"
              >
                Contact Research Office
              </Link>
              <Link
                href="#"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 transform"
              >
                Download Research Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
