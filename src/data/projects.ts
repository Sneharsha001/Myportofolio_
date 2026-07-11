import type { Project } from '@/types/project';

// ============================================================
// PORTFOLIO PROJECTS DATA
// To add a new project: add a new object to this array.
// No UI changes ever needed — components auto-render from data.
// ============================================================

export const projects: Project[] = [
  {
    id: 'fitstudent-ai',
    title: 'Infralytix',
    shortDescription:
      'React & Gemini API powered AI fitness and diet planner tailored for students.',
    detailedDescription:
      'FitStudent AI is an intelligent fitness and diet planning application built with React and powered by Google\'s Gemini API. It generates personalised workout routines and meal plans based on the user\'s goals, body metrics, and schedule. The app uses conversational AI to dynamically adapt recommendations and help students maintain a healthy lifestyle while managing academic workloads.',
    category: 'AI',
    status: 'completed',
    difficulty: 'intermediate',
    year: 2025,
    technologies: ['React', 'TypeScript', 'Gemini API', 'Node.js', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    githubUrl: 'https://github.com/sneharsha',
    liveUrl: undefined,
    tags: ['ai', 'fitness', 'diet', 'gemini', 'react'],
    features: [
      'AI-generated personalised workout plans',
      'Gemini-powered conversational diet advisor',
      'Student schedule integration',
      'Progress tracking dashboard',
      'Macro & calorie calculator',
    ],
    challenges: [
      'Prompt engineering for consistent structured AI output',
      'Caching Gemini responses to stay within API quota',
    ],
    futureImprovements: [
      'Add wearable device sync (Google Fit / Apple Health)',
      'Weekly AI check-in and adaptive plan updates',
    ],
    learningOutcomes: [
      'Gemini API integration and prompt design',
      'AI-driven UX patterns',
      'React state management at scale',
    ],
    featured: true,
  },
  {
    id: 'socialconnect',
    title: 'SocialConnect',
    shortDescription:
      'Full-stack social media platform with JWT authentication and fully responsive design.',
    detailedDescription:
      'SocialConnect is a full-featured social media web application supporting user registration, profile management, posts with rich media, likes, comments, and a real-time notification feed. Secure JWT-based authentication protects all routes. The responsive React frontend adapts seamlessly across mobile and desktop viewports, while the Express + MongoDB backend handles data persistence and business logic.',
    category: 'Web Development',
    status: 'completed',
    difficulty: 'intermediate',
    year: 2024,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'CSS3'],
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    githubUrl: 'https://github.com/sneharsha',
    liveUrl: undefined,
    tags: ['social-media', 'full-stack', 'jwt', 'authentication', 'responsive'],
    features: [
      'JWT-secured authentication & session management',
      'User profiles with avatar upload',
      'Posts with image support, likes & comments',
      'Real-time notification feed',
      'Fully responsive mobile-first UI',
    ],
    challenges: [
      'Implementing refresh-token rotation securely',
      'Optimising MongoDB aggregation for feed generation',
    ],
    futureImprovements: [
      'Add WebSocket-based real-time messaging',
      'Integrate story/reels feature',
    ],
    learningOutcomes: [
      'JWT authentication patterns',
      'REST API design',
      'Responsive UI architecture',
    ],
    featured: true,
  },
  {
    id: 'indian-army-tribute',
    title: 'Indian Army Tribute Page',
    shortDescription:
      'A visually rich tribute page honouring the Indian Army, built with HTML, CSS, and Bootstrap.',
    detailedDescription:
      'A static tribute website dedicated to the Indian Army, designed to honour the courage and sacrifice of soldiers. Built with HTML5, CSS3, and Bootstrap, the page features a hero section with parallax scrolling, an interactive timeline of key historical milestones, and a responsive gallery of iconic imagery. The project demonstrates strong command of semantic HTML, Bootstrap grid layouts, and CSS animation techniques.',
    category: 'Web Development',
    status: 'completed',
    difficulty: 'beginner',
    year: 2023,
    technologies: ['HTML5', 'CSS3', 'Bootstrap'],
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    githubUrl: 'https://github.com/sneharsha',
    liveUrl: undefined,
    tags: ['html', 'css', 'bootstrap', 'tribute', 'static-site'],
    features: [
      'Hero banner with parallax scroll effect',
      'Historical milestone timeline',
      'Responsive Bootstrap grid gallery',
      'Smooth CSS animations & hover effects',
      'Fully accessible semantic markup',
    ],
    challenges: [
      'Achieving cross-browser parallax consistency',
      'Maintaining responsive fidelity on small screens',
    ],
    futureImprovements: [
      'Add interactive map of operational regions',
      'Integrate veteran testimonials section',
    ],
    learningOutcomes: [
      'Bootstrap grid system mastery',
      'CSS animation & keyframe design',
      'Semantic HTML5 structuring',
    ],
    featured: false,
  },
  {
    id: 'healthcare-login',
    title: 'Healthcare Login Page',
    shortDescription:
      'Secure, accessible authentication portal UI for a healthcare application.',
    detailedDescription:
      'A polished, production-ready login page UI designed for a healthcare application. The interface prioritises security UX patterns — visible input validation, password strength indicators, and accessible form labels — while maintaining a clean, clinical design language. Built with HTML5, CSS3, and vanilla JavaScript, it demonstrates strong attention to form accessibility, responsive layout, and trust-building visual design commonly required in regulated healthcare environments.',
    category: 'Web Development',
    status: 'completed',
    difficulty: 'beginner',
    year: 2023,
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    githubUrl: 'https://github.com/sneharsha',
    liveUrl: undefined,
    tags: ['html', 'css', 'javascript', 'healthcare', 'authentication', 'ui'],
    features: [
      'Accessible, WCAG-compliant form design',
      'Real-time input validation feedback',
      'Password strength indicator',
      'Responsive layout for mobile & desktop',
      'Trust-focused healthcare visual language',
    ],
    challenges: [
      'Balancing clean aesthetics with accessibility requirements',
      'Implementing password strength logic without a library',
    ],
    futureImprovements: [
      'Integrate with a backend auth API',
      'Add 2FA / OTP flow for enhanced security',
    ],
    learningOutcomes: [
      'WCAG accessibility standards',
      'Vanilla JS form validation patterns',
      'Healthcare UI/UX conventions',
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProjectById = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);

export const getProjectsByCategory = (category: string): Project[] =>
  projects.filter((p) => p.category === category);
