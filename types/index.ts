export interface Project {
  id: string
  title: string
  slug: string
  description: string
  tech_stack: string[]
  image_url?: string | null
  live_url?: string | null
  repo_url?: string | null
  featured: boolean
  created_at: string
}

export interface GuestbookEntry {
  id: string
  name: string
  message: string
  created_at: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  type: string
  period: string
  location: string
  description: string[]
  current?: boolean
}

export interface SkillGroup {
  category: string
  skills: Skill[]
}

export interface Skill {
  name: string
  icon?: string
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
}
