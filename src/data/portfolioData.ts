export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: 'All' | 'Enterprise' | 'Full Stack' | 'E-Commerce' | 'Cloud';
  featured?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  employmentType: string;
  points: string[];
  techStack: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  detail: string;
  award: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface TechItem {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps & Cloud' | 'Mobile';
  level: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatarText: string;
}

export const portfolioData = {
  personal: {
    name: 'Mustafizur Rahman',
    nickname: 'Mustafiz',
    role: 'Senior Software Engineer',
    headline: 'Architecting Scalable Web Applications & Leading Agile Engineering Teams',
    bio: 'Senior Software Engineer with 10+ years of professional experience designing, building, and scaling resilient enterprise systems. Specializing in Node.js, React, Next.js, Laravel, microservices architecture, and cloud deployment.',
    location: 'Dhaka, Bangladesh',
    email: 'mustafiz.info13@gmail.com',
    phone: '+8801556984227',
    website: 'https://www.musfiz.com',
    github: 'https://github.com/musfiz',
    linkedin: 'https://linkedin.com/in/musfiz',
    resumePdf: '/Mustafizur_Rahman.pdf',
    avatar: '/dev.png',
    status: {
      available: true,
      label: 'Available for full-time roles & consulting',
    },
    metrics: [
      { label: 'Years of Experience', value: '10+' },
      { label: 'Delivered Projects', value: '30+' },
      { label: 'Core Technologies', value: '18+' },
      { label: 'Client Satisfaction', value: '100%' },
    ],
  },

  technologies: [
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'Frontend', level: 'Advanced' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored', category: 'Frontend', level: 'Expert' },
    { name: 'React', icon: 'devicon-react-original colored', category: 'Frontend', level: 'Expert' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain', category: 'Frontend', level: 'Advanced' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', category: 'Frontend', level: 'Expert' },
    { name: 'Angular', icon: 'devicon-angularjs-plain colored', category: 'Frontend', level: 'Intermediate' },
    { name: 'Vue.js', icon: 'devicon-vuejs-plain colored', category: 'Frontend', level: 'Intermediate' },
    { name: 'Nuxt', icon: 'devicon-nuxt-original colored', category: 'Frontend', level: 'Intermediate' },

    { name: 'Node.js', icon: 'devicon-nodejs-plain colored', category: 'Backend', level: 'Expert' },
    { name: 'Laravel', icon: 'devicon-laravel-original colored', category: 'Backend', level: 'Expert' },

    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', category: 'Database', level: 'Advanced' },
    { name: 'MySQL', icon: 'devicon-mysql-original colored', category: 'Database', level: 'Expert' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', category: 'Database', level: 'Advanced' },

    { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored', category: 'DevOps & Cloud', level: 'Intermediate' },
    { name: 'Azure', icon: 'devicon-azure-plain colored', category: 'DevOps & Cloud', level: 'Intermediate' },
    { name: 'Docker', icon: 'devicon-docker-plain colored', category: 'DevOps & Cloud', level: 'Advanced' },
    { name: 'GitHub', icon: 'devicon-github-original', category: 'DevOps & Cloud', level: 'Expert' },

    { name: 'React Native', icon: 'devicon-reactnative-original colored', category: 'Mobile', level: 'Intermediate' },
  ] as TechItem[],

  experiences: [
    {
      title: 'Sr. Software Engineer',
      company: 'Bangladesh Japan Information Technology (BJIT)',
      location: 'Dhaka, Bangladesh',
      period: '2021 - Present',
      employmentType: 'Full-time',
      points: [
        'Architected and deployed scalable, high-concurrency microservices and web solutions for global enterprise clients.',
        'Mentored junior and mid-level software engineers, lead code reviews, and enforced strict quality and CI/CD standards.',
        'Spearheaded performance tuning, caching strategies, and database query optimization, reducing latency across core APIs by 35%.',
        'Collaborated closely with Japanese and multinational stakeholders under agile development frameworks.',
      ],
      techStack: ['Node.js', 'React', 'TypeScript', 'Docker', 'AWS', 'PostgreSQL', 'Microservices'],
    },
    {
      title: 'Software Engineer',
      company: 'Bangladesh Japan Information Technology (BJIT)',
      location: 'Dhaka, Bangladesh',
      period: '2020 - 2021',
      employmentType: 'Full-time',
      points: [
        'Designed and implemented secure RESTful APIs and distributed backend services.',
        'Constructed responsive, accessible web interfaces utilizing React, TypeScript, and modern CSS.',
        'Refactored legacy database schemas and indexed high-volume queries, enhancing application throughput by 40%.',
      ],
      techStack: ['React', 'Node.js', 'Express', 'MySQL', 'REST APIs', 'Git'],
    },
    {
      title: 'Web Developer',
      company: 'Nano Information Technology (Nanosoft)',
      location: 'Dhaka, Bangladesh',
      period: '2017 - 2020',
      employmentType: 'Full-time',
      points: [
        'Engineered complex business logic and robust back-end integrations for enterprise client portals.',
        'Participated in end-to-end SDLC using Scrum/Agile methodologies, sprint planning, and daily standups.',
        'Integrated third-party APIs, payment gateways, and reporting modules into existing customer-facing applications.',
      ],
      techStack: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'jQuery', 'Bootstrap'],
    },
    {
      title: 'Jr. Web Developer',
      company: 'Dynamic Software Ltd',
      location: 'Dhaka, Bangladesh',
      period: '2015 - 2017',
      employmentType: 'Full-time',
      points: [
        'Developed interactive, cross-browser responsive user interfaces and maintained existing web client software.',
        'Collaborated alongside senior engineers to debug edge-case defects and implement new feature requests.',
        'Adopted modern version control workflows, automated linting, and semantic code organization.',
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    },
  ] as Experience[],

  projects: [
    {
      title: 'E-Commerce Solution (Zohamart)',
      description: 'A comprehensive, progressive e-commerce solution featuring secure online payment gateway integrations, live stock tracking, promotional coupon engines, and real-time order fulfillment.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery', 'Payment Gateway'],
      link: 'https://zohamart.codeemit.com',
      category: 'E-Commerce',
      featured: true,
    },
    {
      title: 'CIMS for Laser Medical Center',
      description: 'A specialized clinical management and informatics system facilitating patient scheduling, real-time doctor appointments, digital prescriptions, invoicing, and medical inventory management.',
      image: '/cims.png',
      tags: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap', 'Yajra Datatables'],
      link: 'https://lasermedicalbd.com/',
      category: 'Enterprise',
      featured: true,
    },
    {
      title: 'ERP for Laser Medical Center',
      description: 'An enterprise resource planning solution that orchestrates day-to-day organizational workflows, integrating human resources, financial accounting, procurement, and multi-department analytics.',
      image: '/erp.png',
      tags: ['React', 'Laravel', 'MySQL', 'REST APIs', 'Chart.js'],
      link: 'https://lasermedicalbd.com/',
      category: 'Enterprise',
      featured: true,
    },
    {
      title: 'Enterprise Microservices & Auth Hub',
      description: 'A high-throughput API Gateway and centralized authentication service featuring token-bucket rate limiting, distributed JWT session management, Redis caching, and health telemetry.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Node.js', 'TypeScript', 'Docker', 'Redis', 'PostgreSQL', 'AWS'],
      link: 'https://github.com/musfiz',
      category: 'Cloud',
      featured: false,
    },
    {
      title: 'Real-Time Fleet & Logistics Tracker',
      description: 'A telemetry and operations dashboard delivering real-time vehicle GPS tracking, geofencing alarms, trip diagnostics, and automated route optimization through WebSockets.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'WebSockets'],
      link: 'https://github.com/musfiz',
      category: 'Full Stack',
      featured: false,
    },
    {
      title: 'AI Resume & Requisition Matcher',
      description: 'An intelligent candidate parsing tool that processes resumes against engineering job specifications, delivering semantic similarity scores and skill-gap recommendations.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'NLP'],
      link: 'https://github.com/musfiz',
      category: 'Full Stack',
      featured: false,
    },
  ] as Project[],

  education: [
    {
      degree: "Master's in Computer Science & Engineering",
      institution: 'National University (NU)',
      period: '2015 - 2017',
      detail: 'Specialized in Software Engineering (SE), Advanced Distributed Systems, and Database Architectures.',
      award: 'Post Graduate Degree',
    },
    {
      degree: "Bachelor's of Computer Science & Engineering (BSE)",
      institution: 'National University (NU)',
      period: '2008 - 2014',
      detail: 'Rigorous foundation in Computer Science, Data Structures & Algorithms, Object-Oriented Design, and Software Lifecycle.',
      award: 'Graduated • CGPA: 3.00',
    },
  ] as Education[],

  services: [
    {
      title: 'Frontend Development',
      description: 'Building high-performance, responsive, accessible web applications with React, Next.js, and modern CSS architecture.',
      iconName: 'Code',
      deliverables: ['Single Page & SSR Apps', 'Responsive & Mobile First', 'Design System & Component Kits'],
    },
    {
      title: 'Backend Development',
      description: 'Developing high-concurrency server applications and robust APIs with Node.js, Express, and Laravel.',
      iconName: 'Server',
      deliverables: ['RESTful & GraphQL APIs', 'Role-Based Authentication', 'Business Logic Engines'],
    },
    {
      title: 'Database Architecture',
      description: 'Designing resilient schema models, query optimization, indexing, and data caching across SQL & NoSQL systems.',
      iconName: 'Database',
      deliverables: ['PostgreSQL & MySQL Tuning', 'MongoDB Schema Design', 'Query Optimization & Indexing'],
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Deploying, monitoring, and scaling cloud workloads on AWS and Azure with zero-downtime deployment pipelines.',
      iconName: 'Cloud',
      deliverables: ['AWS EC2 / S3 / RDS', 'Azure Web Apps', 'Serverless & Caching'],
    },
    {
      title: 'Mobile App Development',
      description: 'Building fluid cross-platform mobile apps for iOS and Android using React Native and Progressive Web Apps (PWA).',
      iconName: 'Smartphone',
      deliverables: ['Cross-platform React Native', 'Offline-First PWAs', 'Native Device API Integration'],
    },
    {
      title: 'Microservices Architecture',
      description: 'Decomposing complex monoliths into modular, containerized microservices orchestrated with Docker and Kubernetes.',
      iconName: 'Layers',
      deliverables: ['Containerization with Docker', 'Service Discovery & Gateway', 'Event-Driven Communication'],
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automating continuous integration and continuous delivery workflows using GitHub Actions and automated test pipelines.',
      iconName: 'Wrench',
      deliverables: ['Automated CI/CD Pipelines', 'Quality Gates & Linting', 'Deployment Automation'],
    },
    {
      title: 'Performance & Security',
      description: 'Auditing web applications for optimal Core Web Vitals, sub-second load times, and hardened application security.',
      iconName: 'Rocket',
      deliverables: ['Sub-second Page Speeds', 'Lighthouse 95+ Audits', 'OWASP Security Hardening'],
    },
  ] as Service[],

  testimonials: [
    {
      name: 'Engineering Director',
      role: 'Head of Technology',
      company: 'BJIT Group',
      content: 'Mustafizur is one of the most dependable senior engineers on our team. His grasp of microservices, clean architecture, and cross-functional leadership has consistently driven our client deliverables to success.',
      avatarText: 'ED',
    },
    {
      name: 'Operations Executive',
      role: 'Managing Director',
      company: 'Laser Medical Center',
      content: 'The Clinic Information Management System and ERP Mustafiz built for our medical facilities transformed our operations. Invoicing, appointment scheduling, and inventory now run with zero hitches.',
      avatarText: 'OE',
    },
    {
      name: 'Lead Product Manager',
      role: 'Technical PM',
      company: 'Enterprise Software Partner',
      content: 'Mustafizur brings remarkable technical clarity to every sprint. He bridges business goals and engineering execution seamlessly, always delivering well-tested and robust software.',
      avatarText: 'PM',
    },
  ] as Testimonial[],
};
