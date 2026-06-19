export const projects = [
  {
    id: 1,
    title: 'DataXplore 2.0 - Inter-University Data Analytics Competition',
    tag: '01',
    description:
      'Full-stack competition platform for the USJP Statistics Society. Built with React/Vite, Supabase, and Vercel - covering NIC+email authentication via Edge Functions, drag-and-drop file submissions (JSZip), an admin dashboard, phase-driven config system, and a Top 10 Teams reveal. Handled a security incident with API key rotation and RLS hardening.',
    tech: ['React', 'Vite', 'Supabase', 'Vercel', 'PostgreSQL'],
    role: 'Full-Stack Developer',
    github: 'https://github.com/thisaru',
    live: null,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80',
  },
  {
    id: 2,
    title: 'AlgoAttendance - QR-Based Attendance System',
    tag: '02',
    description:
      'Migrated a Node.js/Express + web frontend attendance system to React Native (Expo) with MongoDB Atlas. Fixed a critical encryption key bug (keys were regenerated on every server restart), implemented base64 QR image delivery, and resolved Atlas IP whitelisting for dynamic hotspot IPs.',
    tech: ['React Native', 'Expo', 'Node.js', 'MongoDB Atlas', 'Express'],
    role: 'Mobile & Backend Developer',
    github: 'https://github.com/thisaru',
    live: null,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=640&q=80',
  },
  {
    id: 3,
    title: 'EcoBridge - Circular Economy Marketplace',
    tag: '03',
    description:
      'Spring Boot microservices marketplace for circular economy trading. Covers React 18 frontend, JWT/Zero Trust auth, RBAC, XSS/SQLi prevention, SSE notifications, Eureka service discovery, and API Gateway — built as a combined learning and production-delivery project over a nine-week roadmap.',
    tech: ['Java', 'Spring Boot', 'React', 'JWT', 'Docker', 'Eureka'],
    role: 'Full-Stack & Security Engineer',
    github: 'https://github.com/thisaru',
    live: null,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&q=80',
  },
  {
    id: 4,
    title: 'Certificate Generator - Workshop Tool',
    tag: '04',
    description:
      'Streamlit app for bulk certificate generation and email delivery. Handles PDF stamping, Gmail SMTP, and CSV batch processing — deployed on a Windows machine with a Device Guard workaround. Used to issue certificates for the DataXplore workshop participants.',
    tech: ['Python', 'Streamlit', 'Pandas', 'SMTP', 'PDF'],
    role: 'Backend & Automation Developer',
    github: 'https://github.com/thisaru',
    live: null,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=640&q=80',
  },
]