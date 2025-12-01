import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
  tags?: string[];
  isGithub?: boolean;
}

export interface Experience {
  date: string;
  title: string;
  description: string;
  institution: string;
}

export interface ContactMethod {
  title: string;
  value: string;
  href: string;
  icon: LucideIcon;
  isDownload?: boolean;
}