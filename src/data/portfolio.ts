export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  keyFeatures?: string[];
  note?: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  client?: string;
}

export interface SkillCategory {
  number: string;
  title: string;
  skills: string[];
  description: string;
}

export interface JobSimulation {
  role: string;
  organization: string;
  type: string;
  description: string;
  responsibilities: string[];
}

export interface EducationInfo {
  degree: string;
  specialization: string;
  institution: string;
  duration: string;
  cgpa: string;
  coursework: string[];
}

export interface CertificationInfo {
  name: string;
  topics: string[];
}

export interface LanguageInfo {
  language: string;
  proficiency: string;
}

export interface PortfolioData {
  meta: {
    title: string;
    name: string;
    description: string;
    keywords: string;
    year: string;
    version: string;
  };
  navigation: {
    wordmark: string;
    statusText: string;
    navLinks: { label: string; href: string }[];
  };
  intro: {
    wordmark: string;
    yearTag: string;
    tagline: string;
  };
  hero: {
    name: string;
    headlineParts: string[];
    roleTitle: string;
    supportingHeadline: string;
    statement: string;
    specialization: string;
    location: string;
    coordinates: string;
    portraitImage: string;
    scrollHint: string;
    buttons: { label: string; href: string; primary?: boolean }[];
  };
  about: {
    sectionTag: string;
    heading: string;
    leadParagraph: string;
    secondaryParagraph: string;
    tertiaryParagraph: string;
    backgroundImage: string;
    portraitSecondary: string;
    currentFocus: string[];
    educationBrief: { label: string; value: string }[];
  };
  identity: {
    primaryText: string;
    secondaryText: string;
    editorialNotes: string;
    tickerItems: string[];
  };
  skills: {
    sectionTag: string;
    heading: string;
    subheading: string;
    categories: SkillCategory[];
  };
  featuredProject: ProjectItem;
  showcaseProjects: ProjectItem[];
  experience: {
    sectionTag: string;
    heading: string;
    subheading: string;
    simulations: JobSimulation[];
  };
  education: EducationInfo;
  certifications: {
    sectionTag: string;
    heading: string;
    items: CertificationInfo[];
  };
  languages: LanguageInfo[];
  contact: {
    sectionTag: string;
    heading: string;
    statement: string;
    name: string;
    email: string;
    phone: string;
    socials: { name: string; url: string; handle: string }[];
    footerNote: string;
    timeZone: string;
  };
}

export const portfolioData: PortfolioData = {
  meta: {
    title: "Niraj Kumar Pandey | FULL STACK DEVELOPER",
    name: "Niraj Kumar Pandey",
    description: "Portfolio of Niraj Kumar Pandey, a Computer Science and Engineering student focused on full-stack development, Python backends, AI/ML integration, and building practical software applications.",
    keywords: "Niraj Kumar Pandey, Full Stack Developer, Next.js Developer, React Developer, Python Developer, FastAPI, Flask, TypeScript, Machine Learning, Software Developer Portfolio",
    year: "2026",
    version: "VOL. 04",
  },
  navigation: {
    wordmark: "NIRAJ.",
    statusText: "FULL STACK DEVELOPER",
    navLinks: [
      { label: "ABOUT", href: "#about" },
      { label: "SKILLS", href: "#skills" },
      { label: "PROJECTS", href: "#work" },
      { label: "EXPERIENCE", href: "#experience" },
      { label: "CONTACT", href: "#contact" },
    ],
  },
  intro: {
    wordmark: "NIRAJ.",
    yearTag: "MMXXVI / 2026",
    tagline: "NIRAJ KUMAR PANDEY — FULL STACK DEVELOPER",
  },
  hero: {
    name: "Niraj Kumar Pandey",
    headlineParts: ["FULL STACK", "DEVELOPER"],
    roleTitle: "FULL STACK DEVELOPER",
    supportingHeadline: "Building Full-Stack Applications, Intelligent Systems, and Real-World Software Solutions.",
    statement: "I am a Computer Science and Engineering undergraduate passionate about building complete, functional software products. I work across frontend development, Python backends, database integration, AI/ML-powered applications, and deployment. I enjoy taking ideas from concept to implementation by designing APIs, developing user interfaces, integrating data systems, and shipping working applications.",
    specialization: "Frontend Development | Backend Development | AI/ML Integration | Deployment",
    location: "JAIPUR / REMOTE — INDIA",
    coordinates: "26.9124° N, 75.7873° E",
    portraitImage: "/images/niraj-cutout-monochrome.png",
    scrollHint: "SCROLL TO EXPLORE",
    buttons: [
      { label: "VIEW MY PROJECTS", href: "#work", primary: true },
      { label: "ABOUT ME", href: "#about", primary: false },
      { label: "CONTACT ME", href: "#contact", primary: false },
    ],
  },
  about: {
    sectionTag: "01 // PROFESSIONAL BACKGROUND",
    heading: "ABOUT ME",
    leadParagraph: "I am a Computer Science and Engineering student at the University of Engineering & Management, Jaipur, with a strong interest in full-stack development, artificial intelligence, and building practical software solutions.",
    secondaryParagraph: "My technical experience includes developing frontend applications using React-based technologies such as Next.js and TypeScript, building backend services with Python, Flask, and FastAPI, and working with databases such as PostgreSQL, SQLite, MySQL, and ChromaDB. I have developed projects involving real-time interview simulation, retrieval-augmented evaluation, machine learning-based thyroid disease classification, and AI-generated explanations.",
    tertiaryParagraph: "I focus on understanding how the different parts of an application work together, from user interfaces and backend APIs to databases, application logic, and deployment. I am continuously improving my problem-solving skills, strengthening my computer science fundamentals, and learning technologies that help me build reliable, useful, and scalable applications.",
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80&sat=-100",
    portraitSecondary: "/images/niraj-portrait-monochrome.jpg",
    currentFocus: [
      "Next.js & TypeScript Frontend Systems",
      "Python Backends (FastAPI & Flask)",
      "AI/ML & Gemini API Integration",
      "Vector Storage & ChromaDB RAG",
    ],
    educationBrief: [
      { label: "DEGREE", value: "B.TECH CSE" },
      { label: "INSTITUTION", value: "UEM JAIPUR" },
      { label: "DURATION", value: "2023 – 2027" },
      { label: "CGPA", value: "7.4 / 10" },
    ],
  },
  identity: {
    primaryText: "FULL STACK DEVELOPER",
    secondaryText: "AI/ML INTEGRATION — DEPLOYMENT",
    editorialNotes: "BUILDING FULL-STACK APPLICATIONS, INTELLIGENT SYSTEMS, AND REAL-WORLD SOFTWARE SOLUTIONS.",
    tickerItems: [
      "FULL STACK DEVELOPER",
      "—",
      "PYTHON & FASTAPI",
      "—",
      "NEXT.JS & TYPESCRIPT",
      "—",
      "AI/ML & GEMINI API",
      "—",
      "CHROMADB & DOCKER",
      "—",
      "REST APIS & WEBSOCKETS",
      "—",
      "RELATIONAL & VECTOR DATABASES",
      "—",
    ],
  },
  skills: {
    sectionTag: "02 // TECHNICAL CAPABILITIES",
    heading: "TECHNICAL SKILLS",
    subheading: "Categorized competencies across modern frontend systems, backend architectures, AI/ML pipelines, and engineering fundamentals.",
    categories: [
      {
        number: "01",
        title: "Programming Languages",
        skills: ["Python", "TypeScript", "JavaScript", "Java"],
        description: "Core languages used for building scalable services, reactive user interfaces, and algorithmic problem solving.",
      },
      {
        number: "02",
        title: "Frontend Development",
        skills: ["Next.js", "React", "TypeScript", "JavaScript"],
        description: "Modern component-driven development with server-side rendering, client state management, and type-safe architectures.",
      },
      {
        number: "03",
        title: "Backend Development",
        skills: ["Flask", "FastAPI", "REST APIs", "WebSockets", "Client-Server Architecture", "Authentication and Login Flows"],
        description: "High-performance Python backend services, asynchronous APIs, real-time bidirectional WebSocket streaming, and secure auth.",
      },
      {
        number: "04",
        title: "AI and Machine Learning",
        skills: ["Random Forest", "Natural Language Processing (NLP)", "Gemini API Integration", "Real-Time Inference Pipelines", "Retrieval-Augmented Generation (RAG)"],
        description: "Integrating ML models and generative AI into production web applications, including vector search and context-aware explanations.",
      },
      {
        number: "05",
        title: "Databases and Development Tools",
        skills: ["PostgreSQL", "SQLite", "MySQL", "ChromaDB", "Git", "Docker", "Docker Compose"],
        description: "Data persistence across relational and vector stores, version control, and multi-container Docker deployment setups.",
      },
      {
        number: "06",
        title: "Computer Science Fundamentals",
        skills: ["Data Structures and Algorithms", "Object-Oriented Programming", "Database Management Systems", "Computer Networks", "Web Development"],
        description: "Foundational theoretical knowledge ensuring sound computational complexity, clean object design, and robust networking.",
      },
    ],
  },
  featuredProject: {
    id: "mockmate-ai",
    number: "01",
    title: "MOCKMATE AI — INTERVIEW SIMULATOR",
    category: "FULL-STACK APPLICATION & AI EVALUATION",
    year: "2025",
    description: "MockMate AI is a full-stack interview simulation application designed to support interactive interview sessions and AI-assisted answer evaluation. The application uses a Next.js and TypeScript frontend with a Python FastAPI backend to process live webcam and microphone signal streams for scoring. It includes REST and WebSocket endpoints for session and state management, ChromaDB for retrieval-augmented evaluation, and Docker Compose for containerized deployment.",
    keyFeatures: [
      "Full-stack application architecture",
      "Next.js and TypeScript frontend with real-time UI states",
      "Python FastAPI backend for high-throughput concurrency",
      "Live webcam and microphone signal processing for scoring",
      "REST API and WebSocket integration for session management",
      "Retrieval-augmented evaluation using ChromaDB vector database",
      "Containerized application stack using Docker Compose",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "REST APIs", "WebSockets", "ChromaDB", "Docker", "Docker Compose"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85&sat=-100",
    liveUrl: "https://mockmate-ai-blond.vercel.app/",
    githubUrl: "https://github.com/Niraj9283/Interview_Simulator",
    client: "PORTFOLIO PROJECT",
  },
  showcaseProjects: [
    {
      id: "mockmate-ai-showcase",
      number: "01",
      title: "MOCKMATE AI — REAL-TIME INTERVIEW SIMULATOR",
      category: "FULL-STACK & REAL-TIME WEBSOCKETS",
      year: "2025",
      description: "Full-stack interview simulation platform featuring real-time audio/visual scoring, FastAPI backend streams, ChromaDB retrieval-augmented evaluation, and Docker Compose containerization.",
      technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "WebSockets", "ChromaDB", "Docker"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85&sat=-100",
      liveUrl: "https://mockmate-ai-blond.vercel.app/",
      githubUrl: "https://github.com/Niraj9283/Interview_Simulator",
    },
    {
      id: "thyroid-detection",
      number: "02",
      title: "THYROID DISEASE DETECTION SYSTEM",
      category: "MACHINE LEARNING & DIAGNOSTIC CLASSIFICATION",
      year: "2024",
      description: "A machine learning-powered application that classifies thyroid-related conditions using structured input data. Combines a Python Flask backend, JavaScript frontend, and SQLite database with a Random Forest model achieving 97.3% reported evaluation accuracy, enhanced by the Gemini API for natural-language prediction explanations.",
      note: "Reported model evaluation accuracy of 97.3%; developed as an educational and technical exploration, not a replacement for professional clinical diagnosis.",
      technologies: ["Python", "Flask", "Random Forest", "Gemini API", "SQLite", "JavaScript", "NLP"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85&sat=-100",
      // Public repo / demo not verified on remote, kept clean without fake links per prompt
    },
  ],
  experience: {
    sectionTag: "03 // PROFESSIONAL SIMULATIONS",
    heading: "EXPERIENCE & SIMULATIONS",
    subheading: "Structured job simulations completed to diagnose systems, optimize code, and design technical solutions.",
    simulations: [
      {
        role: "Robotics & Controls Job Simulation",
        organization: "Johnson & Johnson MedTech — Forage",
        type: "Job Simulation",
        description: "Completed a specialized job simulation involving robotic surgical arm control systems.",
        responsibilities: [
          "Diagnosed and optimized control code in a simulated robotic surgical arm environment to improve precision and reliability.",
          "Applied structured debugging and logical problem-solving techniques to complex hardware-software control loops.",
          "Documented findings and design recommendations in a comprehensive technical report for the control system.",
        ],
      },
      {
        role: "Technology Job Simulation",
        organization: "Deloitte Australia — Forage",
        type: "Job Simulation",
        description: "Completed a virtual technology consulting simulation analyzing business technology needs.",
        responsibilities: [
          "Worked through hands-on activities involving end-to-end technology solution design.",
          "Practiced preparing client-facing technical documentation and communicating architecture trade-offs.",
          "Developed an understanding of structured technical problem-solving and corporate technology consulting workflows.",
        ],
      },
    ],
  },
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    specialization: "Computer Science and Engineering",
    institution: "University of Engineering & Management (UEM), Jaipur, Rajasthan, India",
    duration: "July 2023 – May 2027",
    cgpa: "7.4 / 10",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Web Development",
    ],
  },
  certifications: {
    sectionTag: "04 // CREDENTIALS",
    heading: "CERTIFICATIONS",
    items: [
      {
        name: "Gen AI Fundamentals",
        topics: [
          "Generative AI Concepts",
          "Prompt Engineering",
          "AI Models",
          "AI Tools",
          "Real-World Applications",
        ],
      },
      {
        name: "Cybersecurity Operations Fundamentals",
        topics: [
          "Threat Detection",
          "Endpoint Security",
          "Incident Response",
          "Network Security Protocols",
          "Vulnerability Analysis",
          "Security Alert Monitoring",
        ],
      },
    ],
  },
  languages: [
    { language: "English", proficiency: "Fluent Spoken" },
    { language: "Hindi", proficiency: "Native" },
  ],
  contact: {
    sectionTag: "05 // INITIATE DIALOGUE",
    heading: "LET'S BUILD SOMETHING TOGETHER",
    statement: "I'm interested in full-stack development, AI-powered applications, and opportunities to build practical software solutions. Feel free to reach out to discuss projects, collaborations, or suitable entry-level development opportunities.",
    name: "Niraj Kumar Pandey",
    email: "nirajkumarp839@gmail.com",
    phone: "+91 7004392259",
    socials: [
      {
        name: "LINKEDIN",
        url: "https://www.linkedin.com/in/niraj-kumar-pandey-833124287/",
        handle: "niraj-kumar-pandey-833124287",
      },
      {
        name: "GITHUB",
        url: "https://github.com/Niraj9283",
        handle: "@Niraj9283",
      },
    ],
    footerNote: "DESIGNED WITH RESTRAINT. SCULPTED IN CODE. MONOCHROME EDITORIAL EDITION.",
    timeZone: "UTC+5:30 (JAIPUR / NEW DELHI, INDIA)",
  },
};
