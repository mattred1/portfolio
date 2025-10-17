// DATA FORMATTING 
type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'My wedding',
    description:
      'I thought it would be fun to build my own wedding website as one of my first big projects! I was right.',
    link: 'https://mattred1.github.io/wedding',
    image: 'https://mattredinger.com/imgs/wedding-big.jpg', 
    id: 'project1',
  },
  {
    name: 'Spain trip',
    description:
      'I journaled throughout my 2019 Spain trip and wanted to share it with strangers.',
    link: 'https://mattred1.github.io/itinerary',
    image: 'https://mattredinger.com/imgs/spain-big.jpg',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Brainrider @ Meta',
    title: 'CMS Web Developer',
    start: 'October 2022',
    end: 'Present',
    link: 'https://www.brainrider.com',
    id: 'work1',
  },
  {
    company: 'Legacy Research Group',
    title: 'Design Engineer',
    start: 'August 2021',
    end: 'July 2022',
    link: 'https://www.linkedin.com/company/legacy-research-group',
    id: 'work2',
  },
  {
    company: 'Consilience',
    title: 'Senior Email Developer',
    start: 'June 2017',
    end: 'August 2021',
    link: 'https://www.linkedin.com/company/theagoracompanies',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/mattred1',
  },
  {
    label: 'BlueSky',
    link: 'https://bsky.app/profile/mattredinger.com',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mredinger',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/drattdredinger',
  },
]

export const EMAIL = 'email.mredinger@gmail.com'
