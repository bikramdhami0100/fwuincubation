import { FaLaptopCode, FaUsers, FaRocket, FaChalkboardTeacher } from 'react-icons/fa';

export const programsData = [
  {
    id: 'bootcamp',
    slug: 'intensive-bootcamps',
    icon: <FaLaptopCode />,
    title: 'Intensive Bootcamps',
    description: 'Deep-dive, skill-based training programs designed to rapidly accelerate your knowledge in specific tech and business domains. Perfect for skill acquisition and project development.',
    bgColorClass: 'bg-gradient-to-br from-indigo-50 via-white to-purple-50',
    longDescription: 'Our intensive bootcamps are designed to transform beginners into skilled practitioners in a short period of time. Through hands-on projects, expert mentorship, and a carefully structured curriculum, participants gain practical experience and build a portfolio of work that demonstrates their capabilities. Each bootcamp focuses on a specific technology stack or business domain, ensuring that participants develop deep expertise in areas that are in high demand in the market. Our bootcamps are led by industry professionals who bring real-world experience and insights to the classroom, making the learning experience both practical and relevant.',
    benefits: [
      'Accelerated learning in a condensed timeframe',
      'Hands-on project-based curriculum',
      'Direct mentorship from industry professionals',
      'Networking opportunities with peers and potential employers',
      'Certificate of completion recognized by industry partners'
    ],
    duration: '4-12 weeks, depending on program',
    schedule: 'Full-time (Mon-Fri, 9am-5pm) or Part-time options available',
    location: 'FWU Campus and Online (hybrid model)',
    capacity: '20-30 participants per cohort',
    applicationProcess: [
      'Submit application form with background information',
      'Complete technical assessment (if applicable)',
      'Interview with program coordinators',
      'Receive acceptance decision within 2 weeks',
      'Pay program fee to secure your spot'
    ],
    imageUrl: '/programs/bootcamp-hero.jpg',
    upcomingDates: [
      { date: 'January 15, 2025', title: 'Web Development Bootcamp' },
      { date: 'March 1, 2025', title: 'Data Science Fundamentals' },
      { date: 'May 10, 2025', title: 'Mobile App Development' }
    ]
  },
  {
    id: 'hackathon',
    slug: 'innovation-hackathons',
    icon: <FaUsers />,
    title: 'Innovation Hackathons',
    description: 'High-energy, collaborative events where participants team up to solve real-world challenges and build innovative prototypes within a limited timeframe. Fuel creativity and teamwork.',
    bgColorClass: 'bg-gradient-to-br from-teal-50 via-white to-cyan-50',
    longDescription: 'Our hackathons bring together diverse talents to tackle real-world challenges in an intense, collaborative environment. Participants form cross-functional teams and work against the clock to develop innovative solutions, which are then presented to a panel of judges from industry and academia. These events are designed to spark creativity, foster collaboration, and accelerate the development of new ideas. Hackathons provide a unique opportunity to test your skills, learn from others, and potentially launch a new venture. We provide all the resources you need, including workspace, mentorship, and technical support throughout the event.',
    benefits: [
      'Develop rapid problem-solving and prototyping skills',
      'Build your network with like-minded innovators',
      'Gain exposure to industry challenges and opportunities',
      'Win prizes and potential funding for your ideas',
      'Receive feedback from industry experts and potential users'
    ],
    duration: '24-48 hours (weekend events)',
    schedule: 'Quarterly events throughout the year',
    location: 'FWU Innovation Hub',
    capacity: 'Up to 100 participants (20-25 teams)',
    applicationProcess: [
      'Register individually or as a team (2-5 members)',
      'Submit your background and areas of expertise',
      'Receive confirmation and pre-event materials',
      'Attend optional pre-hackathon workshops'
    ],
    imageUrl: '/programs/hackathon-hero.jpg',
    upcomingDates: [
      { date: 'December 12-14, 2024', title: 'FinTech Hackathon Challenge' },
      { date: 'February 20-22, 2025', title: 'HealthTech Innovation Weekend' },
      { date: 'April 15-17, 2025', title: 'Sustainability Solutions Hackathon' }
    ]
  },
  {
    id: 'demoday',
    slug: 'startup-demo-days',
    icon: <FaRocket />,
    title: 'Startup Demo Days',
    description: 'An exclusive platform for our incubated startups to pitch their ventures to investors, industry leaders, and potential partners. Showcase your progress and secure opportunities.',
    bgColorClass: 'bg-gradient-to-br from-amber-50 via-white to-orange-50',
    longDescription: 'Demo Days are the culmination of our incubation programs, where startups showcase their progress and pitch to a curated audience of investors, industry partners, and media. These high-visibility events provide startups with the opportunity to secure funding, partnerships, and media coverage to fuel their next stage of growth. Each startup receives extensive preparation support, including pitch coaching, slide deck review, and Q&A practice sessions. Demo Days are structured to maximize engagement between startups and potential investors, with formal presentations followed by networking sessions where deeper conversations can take place.',
    benefits: [
      'Pitch to a curated audience of investors and partners',
      'Receive professional pitch coaching and preparation',
      'Network with potential investors and strategic partners',
      'Media exposure and PR opportunities',
      'Post-event introductions to interested stakeholders'
    ],
    duration: '1 full day event',
    schedule: 'Bi-annual (Spring and Fall)',
    location: 'FWU Auditorium and livestreamed online',
    capacity: '10-15 startups per Demo Day',
    applicationProcess: [
      'Only open to startups in FWU Incubation programs',
      'Selection based on readiness and progress metrics',
      'Mandatory pitch preparation workshops',
      'Final selection by incubation program directors'
    ],
    imageUrl: '/programs/demoday-hero.jpg',
    upcomingDates: [
      { date: 'November 30, 2024', title: 'Fall 2024 Demo Day' },
      { date: 'May 25, 2025', title: 'Spring 2025 Demo Day' }
    ]
  },
  {
    id: 'workshops',
    slug: 'expert-workshops',
    icon: <FaChalkboardTeacher />,
    title: 'Expert Workshops',
    description: 'Focused sessions led by industry experts on crucial topics like marketing, finance, legal aspects, and technology trends to refine your startup strategy.',
    bgColorClass: 'bg-gradient-to-br from-pink-50 via-white to-rose-50',
    longDescription: 'Our expert workshops provide targeted knowledge and skills development in specific areas critical to startup success. Led by industry practitioners and subject matter experts, these sessions combine theoretical frameworks with practical applications, allowing participants to immediately apply what they learn to their ventures. Workshops cover a wide range of topics, from technical skills like digital marketing and financial modeling to soft skills like leadership and negotiation. Each workshop is designed to be interactive, with hands-on exercises, case studies, and opportunities for personalized feedback. Participants leave with actionable insights and practical tools they can implement right away.',
    benefits: [
      'Learn practical skills directly applicable to your business',
      'Access to industry experts and their networks',
      'Receive personalized feedback on your specific challenges',
      'Connect with peers facing similar challenges',
      'Take home actionable templates and resources'
    ],
    duration: '2-4 hours per workshop',
    schedule: 'Monthly workshops on rotating topics',
    location: 'FWU Incubation Center and Online',
    capacity: '30-50 participants per workshop',
    applicationProcess: [
      'Open to all entrepreneurs and startup team members',
      'Registration required, with priority for FWU incubated startups',
      'Some advanced workshops may have prerequisites'
    ],
    imageUrl: '/programs/workshop-hero.jpg',
    upcomingDates: [
      { date: 'November 15, 2024', title: 'Design Thinking Workshop for Innovators' },
      { date: 'January 10, 2025', title: 'Funding Strategies for Early-Stage Startups' },
      { date: 'February 5, 2025', title: 'Digital Marketing Essentials' },
      { date: 'March 12, 2025', title: 'Legal Fundamentals for Startups' }
    ]
  },
];
