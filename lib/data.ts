import type { ExperienceItem, SkillGroup, EducationItem } from '@/types'

export const personalInfo = {
  name: 'Gull Snobar',
  title: 'Full-Stack Developer',
  subtitle: 'React & Next.js | Node.js & Express | MongoDB',
  location: 'Lahore, Punjab, Pakistan',
  email: 'gullsnobar07@gmail.com',
  linkedin: 'https://linkedin.com/in/gullsanobar',
  github: 'https://github.com/gullsnobar', // Update with your real GitHub URL
  resume: '/resume.pdf',
  bio: "I'm Gull Snobar, a full-stack software engineer based in Lahore. I build production web applications end-to-end, from database design to frontend polish. At Devyard, I built OmniCat, an AI SaaS platform with 11 content and image tools, and a Quote Management System handling 3,000+ corridors with strong performance metrics. My stack is React, TypeScript, AdonisJS, Node.js, PostgreSQL, and Docker. I care about clean architecture, fast load times, and code that other engineers can actually read.",
  openTo: 'Full-time full-stack and AI engineering roles.',
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'React Native' },
      { name: 'JavaScript (ES6+)' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
      { name: 'Material UI' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'AdonisJS' },
      { name: 'Express.js' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Redis' },
      { name: 'RESTful APIs' },
      { name: 'TypeScript' },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'VS Code' },
      { name: 'Postman' },
    ],
  },
  {
    category: 'AI & Data',
    skills: [
      { name: 'RAG (Retrieval-Augmented Generation)' },
      { name: 'OpenAI API' },
      { name: 'AI Integration' },
      { name: 'Prompt Engineering' },
    ],
  },
]

export const experience: ExperienceItem[] = [
  {
    id: '1',
    role: 'MERN Stack Developer',
    company: 'Dev Weekends',
    type: 'Remote Fellowship',
    period: 'June 2025 – Present',
    location: 'Remote',
    current: true,
    description: [
      'Worked on real-world MERN stack projects in a collaborative remote environment.',
      'Built responsive UIs using React.js and managed complex application state.',
      'Implemented secure data handling and integrated third-party APIs.',
      'Collaborated in a remote agile team using Git, GitHub, and sprint-based workflows.',
    ],
  },
  {
    id: '2',
    role: 'Software Engineer',
    company: 'Xpert Prime',
    type: 'Full-time',
    period: 'Dec 2025 – Jan 2026',
    location: 'Lahore, Pakistan',
    description: [
      'Worked on backend systems with Node.js, Express, and TypeScript.',
      'Handled CRUD operations, authentication flows, and secure REST APIs.',
      'Built and maintained the Project Hub System (a company product) using Next.js.',
    ],
  },
  {
    id: '3',
    role: 'Front-End Web Development Intern',
    company: 'Elevo',
    type: 'Internship',
    period: 'September 2025',
    location: 'Remote',
    description: [
      'Worked on real-world projects and strengthened skills in HTML, CSS, JavaScript, and React.js.',
      'Enhanced my ability to build responsive, user-friendly applications and apply modern front-end practices in practical scenarios.',
    ],
  },
]

export const education: EducationItem[] = [
  {
    institution: 'University of Education, Lahore',
    degree: 'B.S. Computer Science',
    period: 'Sept 2022 – June 2026',
  },
  {
    institution: 'Institute of Emerging Careers',
    degree: 'Frontend Web Development',
    period: 'Feb 2025 – July 2025',
  },
]

export const certifications = [
  'Web Development Bootcamp',
  'Frontend Web Development',
  'Soft Skills Development Course',
  'Generative AI Application Developer Certificate',
]

export const languages = [
  { name: 'Urdu', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'Punjabi', level: 'Limited' },
  { name: 'German', level: 'Elementary' },
]

export const featuredProjects = [
  {
    id: 'omnicat',
    title: 'OmniCat: AI SaaS Platform',
    slug: 'omnicat-ai-saas',
    description:
      'A full-stack AI SaaS platform with 11 content and image tools. Users generate blog posts, ad copy, logos, and photoshoot images, plus use image tools like background removal and photo enhancement. Includes an admin panel for user management, pricing plans, and AI provider configuration.',
    tech_stack: [
      'React 19',
      'TypeScript',
      'AdonisJS 7',
      'PostgreSQL',
      'OpenAI API',
      'Docker',
    ],
    image_url: '/projects/omnicat.jpg' as string | null,
    live_url: null as string | null,
    repo_url: null as string | null,
    featured: true,
    company: 'Devyard',
    created_at: new Date().toISOString(),
  },
  {
    id: 'quote-management',
    title: 'Quote Management System',
    slug: 'quote-management-system',
    description:
      'A full-stack quote management system with draft workflows, search, and corridor-based pricing. Built with React and AdonisJS 6. Features secure authentication, resource ownership, and CRUD operations with server-side validation. Optimized for 3,000+ corridors using TanStack Virtual.',
    tech_stack: [
      'React',
      'TypeScript',
      'AdonisJS 6',
      'PostgreSQL',
      'Lucid ORM',
      'Cypress',
      'TanStack Virtual',
    ],
    image_url: '/projects/QMS.jpg' as string | null,
    live_url: null as string | null,
    repo_url: null as string | null,
    featured: true,
    company: 'Devyard',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'MultiVendor E-Commerce Platform',
    slug: 'multivendor-ecommerce',
    description:
      'A MERN-based marketplace with Customer, Seller, and Admin roles. Features JWT authentication, Stripe and PayPal payments, real-time chat via Socket.IO, seller dashboards, and order tracking.',
    tech_stack: [
      'React.js',
      'Redux Toolkit',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'Tailwind CSS',
    ],
    image_url: '/projects/multivendor-shop.png',
    live_url: null as string | null,
    repo_url: 'https://github.com/gullsnobar/Multivendor-Project',
    featured: false,
    created_at: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Healio: AI Healthcare App',
    slug: 'healio-project',
    description:
      'A full-stack healthcare mobile app with AI-powered health assistance, medication management, and fitness tracking. Built as a BS Computer Science final-year project with secure authentication and Firebase notifications.',
    tech_stack: [
      'React Native',
      'Expo',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
    ],
    image_url: '/projects/healio-app.png',
    live_url: null as string | null,
    repo_url: 'https://github.com/gullsnobar/Healio',
    featured: false,
    created_at: new Date().toISOString(),
  },
  {
    id: '7',
    title: 'Edusity: LMS Website',
    slug: 'edusity-lms-website',
    description:
      'A responsive front-end landing page for an educational platform. Features a hero section, program offerings, video modal, campus gallery, student testimonials, and a contact form.',
    tech_stack: [
      'React.js',
      'Tailwind CSS',
      'JavaScript',
    ],
    image_url: '/projects/edusity-website.png',
    live_url: null as string | null,
    repo_url: 'https://github.com/gullsnobar/LMS-Website',
    featured: false,
    created_at: new Date().toISOString(),
  },
  {
    id: '8',
    title: 'QuickShop: Ecommerce Website',
    slug: 'quickshop-ecommerce',
    description:
      'A modern e-commerce website built with React.js. Features robust state management for a seamless shopping experience with an intuitive UI/UX design.',
    tech_stack: [
      'React.js',
      'JavaScript',
    ],
    image_url: '/projects/quickshop-ecommerce.png',
    live_url: null as string | null,
    repo_url: 'https://github.com/gullsnobar/QuickShop',
    featured: false,
    created_at: new Date().toISOString(),
  },
]
