export const projects = [
  {
    id: 1,
    title: 'FinTrack — Personal Finance API',
    tag: '01',
    description:
      'Spring Boot microservices backend with JWT auth, PostgreSQL, and Eureka service registry. Handles multi-currency accounts, transaction categorisation, and monthly report generation.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Eureka'],
    role: 'Backend Engineer',
    github: 'https://github.com',
    live: null,
    // Replace with a real screenshot path in /public or a hosted URL
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&q=80',
  },
  {
    id: 2,
    title: 'StatDash — Statistical Analytics Platform',
    tag: '02',
    description:
      'Full-stack data dashboard built with React and Streamlit. Ingests CSV/API data, runs R and Python models server-side, and visualises outputs with interactive charts.',
    tech: ['React', 'Python', 'R', 'Streamlit', 'Pandas'],
    role: 'Full-Stack & Data Engineer',
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80',
  },
  {
    id: 3,
    title: 'SecureVault — RBAC Auth System',
    tag: '03',
    description:
      'OAuth 2.0 and JWT authentication system with Supabase Row-Level Security, role-based access control, and API key hardening — built as a reusable auth layer.',
    tech: ['Node.js', 'Supabase', 'OAuth 2.0', 'JWT', 'PostgreSQL'],
    role: 'Security & Backend Engineer',
    github: 'https://github.com',
    live: null,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=640&q=80',
  },
  {
    id: 4,
    title: 'MarketPulse — Real-Time Data Feed',
    tag: '04',
    description:
      'WebSocket-driven market data feed with React Native (Expo) client. Streams OHLCV data, supports watchlists, and sends configurable price alerts — inspired by LSEG\'s data products.',
    tech: ['React Native', 'Node.js', 'WebSocket', 'MongoDB', 'Expo'],
    role: 'Mobile & Backend Engineer',
    github: 'https://github.com',
    live: null,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=640&q=80',
  },
]
