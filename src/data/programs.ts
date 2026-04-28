import type { Program } from '@/types'

export const programs: Program[] = [
  {
    id: 'kids',
    title: 'Kids',
    tag: 'Ages 4–15',
    description:
      'Engaging classes designed to be both fun and meaningful. Focused on building lifelong values like discipline, respect, confidence, and emotional control. Students stay active and healthy.',
    ctaTag: 'kids',
  },
  {
    id: 'adults-beginners',
    title: 'Adult Beginners',
    tag: 'All levels welcome',
    description:
      "The place to begin your Jiu-Jitsu journey. No matter your age or fitness level, you'll start to notice physical and mental strength in just a few weeks.",
    ctaTag: 'adults-beginners',
  },
  {
    id: 'adults-advanced',
    title: 'Adult Advanced',
    tag: 'Competition track',
    description:
      'Elite-level instruction led by a world champion team, combining refined techniques, intense sparring, and structured progression. Competition-focused classes available.',
    ctaTag: 'adults-advanced',
  },
  {
    id: 'women',
    title: 'Women Jiu-Jitsu',
    tag: 'Safe & empowering',
    description:
      'A safe and empowering training environment designed to keep women active, positive, and confident. Classes are open to all ages and levels.',
    ctaTag: 'women',
  },
]
