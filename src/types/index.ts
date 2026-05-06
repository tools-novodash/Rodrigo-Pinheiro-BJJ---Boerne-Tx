export interface Program {
  id: string
  title: string
  tag: string
  description: string
  bullets: string[]
  schedule: string
  time: string
  image?: string
  ctaTag: 'kids' | 'adults-beginners' | 'adults-advanced' | 'women' | 'muay-thai'
}

export interface Testimonial {
  id: string
  name: string
  initial: string
  avatarColor: string
  rating: 5
  timeAgo: string
  text: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface ScheduleSlot {
  day: string
  time: string
  programType: 'kids' | 'adults' | 'women' | 'all'
  label: string
}

export interface ModalStep {
  step: 'form' | 'loading' | 'success' | 'error'
}

export interface LeadFormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  programInterest: 'kids' | 'adults' | 'women' | 'both'
  website: string
}

export interface UTMParams {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_term: string
  utm_content: string
}
