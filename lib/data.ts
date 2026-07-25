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
  bio: "I'm a full-stack developer passionate about building fast, reliable, and scalable web applications. I started with frontend development — creating responsive, interactive interfaces with React, Next.js, JavaScript, HTML5, and CSS3 — then expanded into backend development with Node.js and Express, giving me the ability to build complete solutions from server to client. Every project, from small utilities to full applications, has sharpened my ability to write clean, maintainable code and architect systems that perform well in the real world. I'm currently focused on React performance optimization, scalable backend APIs, and exploring AI-enhanced web development.",
  openTo: 'Frontend, full-stack, and innovative web development opportunities.',
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js' },
      { name: 'Next.js' },
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
      { name: 'Express.js' },
      { name: 'MongoDB' },
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
    category: 'Exploring',
    skills: [
      { name: 'AI Integration' },
      { name: 'Performance Marketing' },
      { name: 'Modern Web Dev' },
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
    id: '1',
    title: 'Project Hub System',
    slug: 'project-hub-system',
    description:
      'A company-internal project management platform built with Next.js and Node.js. Features task tracking, role-based access control, and a clean dashboard for project lifecycle management.',
    tech_stack: ['Next.js', 'Node.js', 'Express', 'TypeScript', 'MongoDB'],
    image_url: '/projects/project-hub.png',
    live_url: null as string | null,
    repo_url: null as string | null,
    featured: true,
    company: 'Xpert Prime',
    created_at: new Date().toISOString(),
  },

  {
    id: '4',
    title: 'MultiVendor E-Commerce Platform (MERN Stack)',
    slug: 'multivendor-ecommerce',
    description:
      'Built a scalable MERN-based marketplace featuring Customer, Seller, and Admin roles with secure JWT authentication, Stripe & PayPal payments, real-time chat using Socket.IO, seller dashboards, product management, order tracking, and a responsive user interface.',
    tech_stack: [
      'React.js',
      'Redux Toolkit',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Stripe API',
      'Socket.IO',
      'Tailwind CSS'
    ],
    image_url: '/projects/multivendor-shop.png',
    live_url: null as string | null,
    repo_url: 'https://github.com/gullsnobar/Multivendor-Project',
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'LMS Platform',
    slug: 'lms-project',
    description:
      'A comprehensive Learning Management System built with the MERN stack, Next.js, and TypeScript. It features interactive course management, student enrollments, progress tracking, and a modern, responsive user interface.',
    tech_stack: [
      'Next.js',
      'TypeScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS'
    ],
    image_url: '/projects/lms-dashboard.png',
    live_url: null as string | null,
    repo_url: 'https://github.com/gullsnobar/LMS-Project',
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Healio – AI-Powered Healthcare App',
    slug: 'healio-project',
    description:
      'A full-stack healthcare mobile application featuring AI-powered health assistance, medication management, fitness tracking, and secure authentication. Developed as a BS Computer Science Final Year Project.',
    tech_stack: [
      'React Native',
      'Expo',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase FCM',
      'Google Fit API',
      'JWT Auth'
    ],
    image_url: '/projects/healio-app.png',
    live_url: null as string | null,
    repo_url: 'https://github.com/gullsnobar/Healio',
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: '7',
    title: 'Edusity – Responsive LMS Website',
    slug: 'edusity-lms-website',
    description:
      'A fully responsive front-end landing page for an educational platform built with React.js and Tailwind CSS. It features a modern hero section, program offerings, video modal, campus gallery, student testimonials, and a comprehensive contact form.',
    tech_stack: [
      'React.js',
      'Tailwind CSS',
      'HTML5',
      'JavaScript'
    ],
    image_url: '/projects/edusity-website.png',
    live_url: null as string | null,
    repo_url: 'https://github.com/gullsnobar/LMS-Website',
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: '8',
    title: 'QuickShop – Ecommerce Website',
    slug: 'quickshop-ecommerce',
    description:
      'A modern E-commerce website built with React.js. It features robust React state management for seamless shopping experiences and prioritizes an intuitive UI/UX design.',
    tech_stack: [
      'React.js',
      'State Management',
      'UI/UX',
      'JavaScript'
    ],
    image_url: '/projects/quickshop-ecommerce.png',
    live_url: null as string | null,
    repo_url: 'https://github.com/gullsnobar/QuickShop',
    featured: true,
    created_at: new Date().toISOString(),
  },
]
