-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New query)
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Projects table
create table if not exists projects (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  description text not null,
  tech_stack text[] default '{}',
  image_url text,
  live_url text,
  repo_url text,
  featured boolean default false,
  created_at timestamp with time zone default now()
);

-- Guestbook table
create table if not exists guestbook (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  message text not null,
  created_at timestamp with time zone default now()
);

-- Contact messages table
create table if not exists messages (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default now()
);

-- Row Level Security: allow public reads on projects & guestbook
alter table projects enable row level security;
alter table guestbook enable row level security;
alter table messages enable row level security;

create policy "Public projects are viewable by everyone"
  on projects for select using (true);

create policy "Anyone can insert guestbook entries"
  on guestbook for insert with check (true);

create policy "Guestbook entries are viewable by everyone"
  on guestbook for select using (true);

-- Seed 3 starter projects (optional — delete if you want a blank slate)
insert into projects (title, slug, description, tech_stack, featured) values
(
  'Project Hub System',
  'project-hub-system',
  'A company-internal project management platform built with Next.js and Node.js. Features task tracking, role-based access control, and a clean dashboard for project lifecycle management.',
  array['Next.js', 'Node.js', 'Express', 'TypeScript', 'MongoDB'],
  true
),
(
  'MERN E-Commerce API',
  'mern-ecommerce-api',
  'A scalable RESTful API for an e-commerce platform. Implements JWT authentication, product catalog, cart management, and order processing with MongoDB and Express.',
  array['Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
  true
),
(
  'React Dashboard UI',
  'react-dashboard-ui',
  'A responsive analytics dashboard built with React.js and Tailwind CSS. Features dark/light mode, interactive charts, and a component library built from scratch.',
  array['React.js', 'Tailwind CSS', 'JavaScript', 'CSS3'],
  false
);
