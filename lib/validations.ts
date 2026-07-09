import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(20, 'Message must be at least 20 characters').max(2000),
})

export const guestbookSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  message: z.string().min(5, 'Message must be at least 5 characters').max(500),
})

export const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().min(10, 'Description is required'),
  tech_stack: z.array(z.string()),
  image_url: z.string().optional(),
  live_url: z.string().url().optional().or(z.literal('')),
  repo_url: z.string().url().optional().or(z.literal('')),
  featured: z.boolean().default(false),
})

export type ContactInput = z.infer<typeof contactSchema>
export type GuestbookInput = z.infer<typeof guestbookSchema>
export type ProjectInput = z.infer<typeof projectSchema>
