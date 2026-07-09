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
    role: 'Campus Ambassador',
    company: 'Institute of Emerging Careers',
    type: 'Part-time',
    period: 'Nov 2025',
    location: 'Lahore, Pakistan',
    description: [
      'Represented the institute on campus and built the student community.',
      'Promoted events and workshops through social media and peer networking.',
    ],
  },
  {
    id: '4',
    role: 'Technical Content Intern',
    company: 'Microtechx',
    type: 'Internship',
    period: 'July 2025',
    location: 'Lahore, Pakistan',
    description: [
      'Prepared technical slide decks, playbooks, and internal documentation.',
      'Collaborated with stakeholders on clarity, consistency, and information architecture.',
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

export const certifications = ['Web Development Bootcamp']

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
    image_url: null as string | null,
    live_url: null as string | null,
    repo_url: null as string | null,
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'MERN E-Commerce API',
    slug: 'mern-ecommerce-api',
    description:
      'A scalable RESTful API for an e-commerce platform. Implements JWT authentication, product catalog, cart management, and order processing with MongoDB and Express.',
    tech_stack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
    image_url: null as string | null,
    live_url: null as string | null,
    repo_url: null as string | null,
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'React Dashboard UI',
    slug: 'react-dashboard-ui',
    description:
      'A responsive analytics dashboard built with React.js and Tailwind CSS. Features dark/light mode, interactive charts, and a component library built from scratch.',
    tech_stack: ['React.js', 'Tailwind CSS', 'JavaScript', 'CSS3'],
    image_url: null as string | null,
    live_url: null as string | null,
    repo_url: null as string | null,
    featured: true,
    created_at: new Date().toISOString(),
  },
]
