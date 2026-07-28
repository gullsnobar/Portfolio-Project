'use client'

import { SectionHeader, AnimatedSection } from '@/components/shared/AnimatedText'

interface Skill {
  name: string
  slug: string
}

interface SkillGroup {
  category: string
  badge?: string  // optional category label style variant
  skills: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React',        slug: 'react'          },
      { name: 'Next.js',      slug: 'nextdotjs'      },
      { name: 'JavaScript',   slug: 'javascript'     },
      { name: 'TypeScript',   slug: 'typescript'     },
      { name: 'HTML5',        slug: 'html5'          },
      { name: 'CSS3',         slug: 'css3'           },
      { name: 'Tailwind',     slug: 'tailwindcss'    },
      { name: 'Material UI',  slug: 'mui'            },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Node.js',      slug: 'nodedotjs'          },
      { name: 'Express',      slug: 'express'            },
      { name: 'MongoDB',      slug: 'mongodb'            },
      { name: 'PostgreSQL',   slug: 'postgresql'         },
      { name: 'GraphQL',      slug: 'graphql'            },
      { name: 'Supabase',     slug: 'supabase'           },
      { name: 'Firebase',     slug: 'firebase'           },
      { name: 'REST APIs',    slug: 'openapiinitiative'  },
    ],
  },
  {
    category: 'Tools & Deployment',
    skills: [
      { name: 'Git',          slug: 'git'               },
      { name: 'GitHub',       slug: 'github'            },
      { name: 'Docker',       slug: 'docker'            },
      { name: 'VS Code',      slug: 'visualstudiocode'  },
      { name: 'Postman',      slug: 'postman'           },
      { name: 'Vercel',       slug: 'vercel'            },
      { name: 'Netlify',      slug: 'netlify'           },
      { name: 'OpenAI',       slug: 'openai'            },
    ],
  },
]

function TechIcon({ slug, name }: { slug: string; name: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`}
      alt={name}
      width={22}
      height={22}
      className="w-[22px] h-[22px] object-contain transition-all duration-200 dark:invert group-hover:invert dark:group-hover:invert-0"
    />
  )
}

export function Skills() {
  return (
    <section id="skills" className="pt-16 sm:pt-24 pb-16 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          tag="Skills"
          title="Tools of the trade."
          subtitle="Technologies I work with daily to build scalable, production-ready applications."
        />

        <div className="space-y-12">
          {skillGroups.map((group, gi) => (
            <AnimatedSection key={group.category} delay={gi * 0.08}>

              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {group.category}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map(({ name, slug }) => (
                  <div key={name} className="skill-badge group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-secondary border border-border group-hover:bg-text-primary transition-all duration-250">
                      <TechIcon slug={slug} name={name} />
                    </div>
                    <span className="text-xs text-text-secondary group-hover:text-text-primary font-medium transition-colors text-center leading-tight max-w-[5rem]">
                      {name}
                    </span>
                  </div>
                ))}
              </div>

            </AnimatedSection>
          ))}
        </div>

        {/* Exploring row */}
        <AnimatedSection delay={0.3} className="mt-12">
          <div className="card p-5 rounded-2xl border-dashed">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-dashed border-border text-text-secondary text-xs font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-text-secondary/60 animate-pulse" />
                Currently Exploring
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['AI Integration', 'tRPC', 'Prisma ORM', 'Redis', 'React Native'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full border border-dashed border-border text-text-secondary/80 text-xs font-medium hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
