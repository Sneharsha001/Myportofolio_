import type { Project } from '@/types/project';

// ============================================================
// PORTFOLIO PROJECTS DATA
// To add a new project: add a new object to this array.
// No UI changes ever needed — components auto-render from data.
// ============================================================

export const projects: Project[] = [
  {
    id: 'salesvision',
    title: 'SalesVision',
    shortDescription:
      'Full-stack e-commerce platform (Flipkart clone) with user auth, cart, and payment integration.',
    detailedDescription:
      'SalesVision is a production-grade e-commerce web application built as a Flipkart clone. It features a complete product catalog, user authentication with JWT, a persistent shopping cart, order management, and a Razorpay-integrated payment flow. The backend uses Express with MongoDB, and the frontend is built in React with TypeScript.',
    category: 'Web Development',
    status: 'completed',
    difficulty: 'intermediate',
    year: 2024,
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Razorpay'],
    githubUrl: 'https://github.com/sneharsha', // TODO: Replace with actual repo URL
    liveUrl: undefined,
    tags: ['e-commerce', 'full-stack', 'authentication', 'payment'],
    features: [
      'User registration & login with JWT',
      'Product catalog with filters and search',
      'Persistent shopping cart',
      'Checkout with Razorpay payment integration',
      'Order history and tracking',
      'Admin dashboard for product management',
    ],
    challenges: [
      'Implementing real-time cart sync across tabs',
      'Secure payment flow with Razorpay webhooks',
      'Optimizing MongoDB queries for catalog performance',
    ],
    futureImprovements: [
      'Add product recommendations using ML',
      'Implement real-time order tracking via WebSockets',
      'Migrate to microservices architecture',
    ],
    learningOutcomes: [
      'Deep understanding of full-stack architecture',
      'JWT authentication patterns',
      'Payment gateway integration',
    ],
    databaseUsed: ['MongoDB'],
    securityFeatures: ['JWT authentication', 'HTTPS', 'Input sanitization'],
    featured: true,
  },
  {
    id: 'smart-campus-portal',
    title: 'Smart Campus Portal',
    shortDescription:
      'Flask + MySQL team project for campus management with student portal, course tracking, and admin dashboard.',
    detailedDescription:
      'A comprehensive campus management system built collaboratively as a team project. The portal allows students to register, view timetables, track attendance, and access course materials. Admins can manage enrollment, generate reports, and communicate with students through the notification system.',
    category: 'Web Development',
    status: 'completed',
    difficulty: 'intermediate',
    year: 2024,
    technologies: ['Flask', 'MySQL', 'Python', 'Bootstrap', 'SQLAlchemy', 'Jinja2'],
    githubUrl: 'https://github.com/sneharsha', // TODO: Replace with actual repo URL
    tags: ['campus', 'management', 'flask', 'python', 'team-project'],
    features: [
      'Student registration and profile management',
      'Course enrollment and timetable viewer',
      'Attendance tracking with analytics',
      'Admin dashboard with reports',
      'Notification system',
      'Role-based access control',
    ],
    challenges: [
      'Coordinating multi-developer workflow',
      'Designing normalized relational schema',
      'Building role-based access control in Flask',
    ],
    futureImprovements: [
      'Migrate to React frontend',
      'Add mobile app via React Native',
      'Integrate AI-based attendance using face recognition',
    ],
    learningOutcomes: [
      'Team collaboration and Git workflows',
      'Relational database design',
      'Flask blueprint architecture',
    ],
    databaseUsed: ['MySQL'],
    featured: true,
  },
  {
    id: 'image-gallery',
    title: 'Image Gallery',
    shortDescription:
      'Responsive, filterable image grid with smooth animations and advanced sorting.',
    detailedDescription:
      'A visually stunning image gallery website featuring a responsive CSS Grid layout, category-based filtering, smooth CSS animations, and a lightbox viewer. The project demonstrates advanced CSS techniques including masonry layouts and hardware-accelerated transitions.',
    category: 'Web Development',
    status: 'completed',
    difficulty: 'beginner',
    year: 2023,
    technologies: ['HTML5', 'CSS Grid', 'JavaScript', 'CSS Animations'],
    tags: ['gallery', 'css', 'frontend', 'animations'],
    features: [
      'Responsive masonry grid layout',
      'Category filter with smooth transitions',
      'Lightbox image viewer',
      'Keyboard navigation',
      'Lazy image loading',
    ],
    challenges: [
      'Cross-browser CSS Grid masonry support',
      'Smooth filter animations without layout jank',
    ],
    futureImprovements: ['Add Unsplash API integration', 'Add image upload functionality'],
    learningOutcomes: ['Advanced CSS Grid techniques', 'JavaScript DOM manipulation', 'CSS animations'],
    featured: false,
  },
  {
    id: 'music-player',
    title: 'Music Player',
    shortDescription:
      'Interactive music player with playlists, futuristic UI, audio visualizations, and custom controls.',
    detailedDescription:
      'A browser-based music player leveraging the Web Audio API to deliver audio visualizations alongside a fully custom UI with playlist management, keyboard shortcuts, and an equalizer. The design features a dark glassmorphism aesthetic with neon accents.',
    category: 'Web Development',
    status: 'completed',
    difficulty: 'intermediate',
    year: 2023,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API', 'Canvas API'],
    tags: ['music', 'audio', 'visualization', 'web-audio-api'],
    features: [
      'Custom audio player controls',
      'Real-time audio visualizer (Canvas)',
      'Playlist management',
      'Keyboard shortcuts',
      'Glassmorphism UI design',
    ],
    challenges: ['Web Audio API cross-browser compatibility', 'Canvas performance optimization'],
    futureImprovements: [
      'Add Spotify API integration',
      'Add lyrics display',
      'React + TypeScript rewrite',
    ],
    learningOutcomes: ['Web Audio API', 'Canvas 2D rendering', 'Custom media controls'],
    featured: false,
  },
  {
    id: 'calculator-app',
    title: 'Calculator App',
    shortDescription:
      'Advanced calculator with history tracking, keyboard support, and glassmorphism design.',
    detailedDescription:
      'A feature-rich calculator application with calculation history, keyboard input support, scientific mode, and a beautiful glassmorphism UI. The app persists history via localStorage and supports complex expression evaluation.',
    category: 'Web Development',
    status: 'completed',
    difficulty: 'beginner',
    year: 2023,
    technologies: ['JavaScript', 'CSS3', 'HTML5', 'LocalStorage'],
    tags: ['calculator', 'javascript', 'glassmorphism', 'localStorage'],
    features: [
      'Basic and scientific modes',
      'Calculation history (persisted)',
      'Keyboard input support',
      'Glassmorphism UI',
      'Expression evaluation',
    ],
    challenges: ['Expression parsing without eval()', 'Keyboard event handling'],
    futureImprovements: ['Add graphing mode', 'Add unit converter'],
    learningOutcomes: ['Expression parsing algorithms', 'LocalStorage API', 'Keyboard events'],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProjectById = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);

export const getProjectsByCategory = (category: string): Project[] =>
  projects.filter((p) => p.category === category);
