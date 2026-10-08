/**
 * Centralized portfolio data for Nitish Yeluru.
 * Components render directly from this single source of truth.
 *
 * NOTE: Unset items (photo, education dates) are explicitly marked as null
 * so components render intentional, graceful fallbacks without leaking TODO markers.
 */

export interface SocialLink {
  label: string;
  href: string;
  iconName: 'github' | 'linkedin' | 'x' | 'youtube' | 'topmate' | 'mail';
}

export interface OverviewFact {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface UserData {
  name: string;
  role: string;
  primaryLine: string;
  location: {
    city: string;
    note: string; // e.g. "moving to Bangalore"
    display: string;
    timezone: string; // "Asia/Kolkata"
  };
  contact: {
    email: string;
    topmate: string;
    closingDraft: string; // Awaiting user wording; UI defaults to clean "Get in touch" CTA
  };
  socials: {
    github: string;
    linkedin: string;
    x: string;
    youtube: string;
    topmate: string;
    email: string;
  };
  socialLinks: SocialLink[];
  status: {
    founderRole: string; // "Founder @ PatchBay"
    pastRole: string;    // "Ex-Alignerr"
  };
  hero: {
    flippingPhrases: string[];
    photoUrl: string | null; // unset: intentional NY monogram fallback
  };
  // Future sections (Milestone 2)
  about: {
    paragraphs: string[];
  };
  stackGroups: {
    number: string;
    title: string;
    description?: string;
    items: string[];
  }[];
  experience: {
    company: string;
    role: string;
    employmentType?: string;
    period: string;
    duration?: string;
    location?: string;
    isCurrent: boolean;
    badge?: string;
    projectTitle?: string;
    description: string;
    bullets?: string[];
    skills?: string[];
    logoUrl?: string;
  }[];
  projects: {
    id: string;
    title: string;
    badge: string;
    statusSummary: string;
    details: string[];
    link?: string;
  }[];
  openSource: {
    prNumber: number;
    repo: string;
    title: string;
    mergedDate: string;
    url: string;
    description: string;
    logoUrl?: string;
  }[];
  education: {
    institution: string;
    degree: string;
    dates: string | null; // unset: omit on rendered page until confirmed
  };
}

export const userData: UserData = {
  name: "Nitish Yeluru",
  role: "Full-stack & GenAI engineer",
  primaryLine: "Founder @ PatchBay",
  location: {
    city: "Chennai",
    note: "moving to Bangalore",
    display: "Chennai, moving to Bangalore",
    timezone: "Asia/Kolkata",
  },
  contact: {
    email: "yelurunitish006@gmail.com",
    topmate: "https://topmate.io/yeluru_nitish",
    closingDraft: "Open to compelling engineering roles and technical collaborations.",
  },
  socials: {
    github: "https://github.com/Nitish-1303",
    linkedin: "https://linkedin.com/in/yeluru-nitish",
    x: "https://x.com/Vibe_User",
    youtube: "https://www.youtube.com/@buildwithnitish",
    topmate: "https://topmate.io/yeluru_nitish",
    email: "mailto:yelurunitish006@gmail.com",
  },
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Nitish-1303", iconName: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yeluru-nitish", iconName: "linkedin" },
    { label: "X", href: "https://x.com/Vibe_User", iconName: "x" },
    { label: "YouTube", href: "https://www.youtube.com/@buildwithnitish", iconName: "youtube" },
    { label: "Topmate", href: "https://topmate.io/yeluru_nitish", iconName: "topmate" },
  ],
  status: {
    founderRole: "Stealth Startup (NDA)",
    pastRole: "Alignerr (AI Eval)",
  },
  hero: {
    flippingPhrases: [
      "Building PatchBay (breaking API detector)",
      "Full-stack web & GenAI applications",
      "Sharing AI engineering on YouTube",
      "Based in Chennai, moving to Bangalore",
    ],
    photoUrl: null, // Unset: renders intentional NY monogram fallback
  },
  about: {
    paragraphs: [
      "I'm a full-stack and GenAI engineer focused on developer tooling, intelligent workflows, and reliable web applications.",
      "Currently building PatchBay, exploring LLM evaluation systems, and breaking down fast-moving AI developments on YouTube.",
    ],
  },
  // Draft stack for trimming (Milestone 2)
  stackGroups: [
    {
      number: "01",
      title: "Core Languages",
      description: "Primary programming languages for full-stack and systems engineering",
      items: ["TypeScript", "Python", "Go", "JavaScript"],
    },
    {
      number: "02",
      title: "AI & Voice Engineering",
      description: "LLM agent architectures, voice streaming, and policy benchmarking",
      items: ["OpenAI", "Vertex AI", "RAG Pipelines", "AI Agents", "Pipecat", "Vapi", "MuJoCo"],
    },
    {
      number: "03",
      title: "Frontend & Web",
      description: "Performant web applications, modern frameworks, and responsive design",
      items: ["React", "Next.js", "Tailwind CSS", "HTML5 / CSS3"],
    },
    {
      number: "04",
      title: "Backend & Databases",
      description: "Microservices, async REST APIs, and database management",
      items: ["FastAPI", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      number: "05",
      title: "Cloud & DevOps",
      description: "Containerized deployments, automated CI/CD pipelines, and cloud services",
      items: ["GCP (Cloud Run, Pub/Sub)", "Docker", "GitHub Actions", "CI/CD", "Git"],
    },
    {
      number: "06",
      title: "Security & Systems",
      description: "Threat modeling, role-based access control, and robotics systems",
      items: ["Threat Modeling", "OWASP Top 10", "RBAC", "ROS", "Audit Logging"],
    },
  ],
  experience: [
    {
      company: "Stealth Startup",
      role: "Full Stack Engineer",
      employmentType: "Full-time",
      period: "Nov 2024 – Present",
      duration: "2 yrs",
      location: "San Antonio, Texas Metropolitan Area · Remote",
      isCurrent: true,
      badge: "Under NDA",
      description:
        "Building production AI products at a GenAI startup under NDA, owning development across frontend, backend, AI infrastructure, and cloud deployment.",
      bullets: [
        "Designed and deployed LLM-powered systems, including RAG pipelines, AI agents, prompt engineering workflows, and production AI integrations.",
        "Built real-time Voice AI applications using Pipecat and Vapi, implementing low-latency audio streaming, conversation state management, and agent orchestration.",
        "Developed and shipped end-to-end React, Next.js, TypeScript, FastAPI, Node.js, and Python applications for production environments.",
        "Deployed and managed cloud infrastructure on Google Cloud Platform (Cloud Run, Pub/Sub, Cloud Storage) using Docker and automated CI/CD pipelines.",
        "Worked directly with customers as a Forward Deployed Engineer, translating user feedback into production features and delivering improvements through rapid weekly release cycles.",
      ],
      skills: ["TypeScript", "React", "Next.js", "Node.js", "Python", "FastAPI", "Go", "GCP", "Docker", "Pipecat", "Vapi", "OpenAI", "Vertex AI"],
      logoUrl: "/logos/stealth.svg",
    },
    {
      company: "Alignerr",
      role: "Senior Software Engineer — AI Evaluation & Benchmarks",
      employmentType: "Part-time",
      period: "May 2026 – Present",
      duration: "6 mos",
      location: "Florida, United States · Remote",
      projectTitle: "Reinforcement Learning Evaluation (MuJoCo)",
      isCurrent: true,
      description:
        "Evaluating reinforcement learning policies in MuJoCo simulation environments and benchmark tasks.",
      bullets: [
        "Evaluated reinforcement learning policies in MuJoCo simulation environments.",
        "Analyzed agent behavior, policy correctness, and performance against benchmark tasks.",
        "Identified failure cases and provided structured technical feedback to improve RL model quality.",
        "Contributed to evaluation pipelines for embodied AI and reinforcement learning systems.",
      ],
      skills: ["Reinforcement Learning", "MuJoCo", "Robotic Process Automation", "ROS"],
      logoUrl: "/logos/alignerr.png",
    },
    {
      company: "Open Source Connect",
      role: "Contributor",
      employmentType: "Full-time",
      period: "Jul 2025 – Jan 2026",
      duration: "7 mos",
      location: "Remote",
      isCurrent: false,
      description:
        "Contributed bug fixes, performance improvements, and CI/CD workflow optimizations across open-source repositories.",
      bullets: [
        "Contributed bug fixes, performance improvements, and developer documentation across 5+ open-source repositories with rapid merge cycles.",
        "Reviewed and mentored contributions across 20+ pull requests, improving code quality and contributor onboarding.",
        "Implemented CI/CD workflow optimizations using GitHub Actions, eliminating manual deployment tasks and reducing release overhead.",
      ],
      skills: ["Full-Stack Development", "Node.js", "GitHub Actions", "CI/CD"],
      logoUrl: "/logos/opensourceconnect.png",
    },
    {
      company: "SmartInternz",
      role: "Full Stack Developer",
      employmentType: "Internship",
      period: "May 2024 – Jul 2024",
      duration: "3 mos",
      location: "Visakhapatnam, Andhra Pradesh, India · Remote",
      isCurrent: false,
      description:
        "Architected and delivered a full-stack College Infrastructure Management System supporting 4 user roles.",
      bullets: [
        "Architected and delivered a full-stack College Infrastructure Management System supporting 4 user roles (faculty, students, lab assistants, administrators) across 10+ academic departments.",
        "Implemented secure role-based access control (RBAC), image-enabled fault reporting, approval workflows, and automated low-stock alert systems.",
        "Built and deployed the platform using the MERN stack (MongoDB, Express.js, React, Node.js) with modular backend services and scalable component design.",
      ],
      skills: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js", "RBAC"],
      logoUrl: "/logos/smartinternz.png",
    },
    {
      company: "EduSkills Foundation",
      role: "Cyber Security Analyst",
      employmentType: "Internship",
      period: "May 2023 – Jul 2023",
      duration: "3 mos",
      location: "India",
      isCurrent: false,
      description:
        "Conducted threat modeling and vulnerability assessments on web applications with OWASP Top 10 remediation.",
      bullets: [
        "Conducted threat modeling and vulnerability scans on 5+ web applications, identifying and remediating OWASP Top 10 issues including broken auth and IDOR.",
        "Implemented role-based access controls and audit logging for sensitive user actions across internal systems.",
      ],
      skills: ["Cyber Security", "OWASP Top 10", "Threat Modeling", "Audit Logging"],
      logoUrl: "/logos/eduskills.png",
    },
  ],
  projects: [
    {
      id: "patchbay",
      title: "PatchBay",
      badge: "In Development",
      statusSummary: "GitHub App detecting breaking API changes and generating verified fix PRs.",
      details: [
        "Solo founder project. The offline prototype functions locally to inspect API deprecations and generate fixes.",
        "Designed to continuously monitor downstream dependencies against upstream API changelogs.",
        "Currently an unreleased prototype; not yet in production or live on the GitHub Marketplace.",
      ],
    },
    {
      id: "buildwithnitish",
      title: "BuildWithNitish",
      badge: "YouTube Channel",
      statusSummary: "YouTube channel dedicated to AI news, tooling updates, and developer Shorts.",
      details: [
        "Educational channel covering recent advancements across generative AI and modern engineering tools.",
        "Focuses on concise, practical breakdowns of emerging AI tools and agent frameworks.",
      ],
      link: "https://www.youtube.com/@buildwithnitish",
    },
  ],
  openSource: [
    {
      prNumber: 120,
      repo: "magnitudedev/magnitude",
      title: "clamp inconsistent system memory observations",
      mergedDate: "September 23, 2026",
      url: "https://github.com/magnitudedev/magnitude/pull/120",
      description: "Clamped inconsistent system memory observations across environment reporting.",
      logoUrl: "/logos/magnitude.png",
    },
    {
      prNumber: 125,
      repo: "magnitudedev/magnitude",
      title: "apply the remote API-key gate to case-variant inference paths",
      mergedDate: "September 24, 2026",
      url: "https://github.com/magnitudedev/magnitude/pull/125",
      description: "Applied remote API-key gating consistently across case-variant inference paths.",
      logoUrl: "/logos/magnitude.png",
    },
    {
      prNumber: 7275,
      repo: "reflex-dev/reflex",
      title: "point Reflex db commands at the db extra instead of dumping a traceback",
      mergedDate: "October 1, 2026",
      url: "https://github.com/reflex-dev/reflex/pull/7275",
      description: "Pointed Reflex database commands at the db extra dependency instead of dumping an unhandled traceback.",
      logoUrl: "/logos/reflex.png",
    },
  ],
  education: {
    institution: "Baba Institute of Technology & Sciences",
    degree: "B.Tech in Computer Science and Engineering",
    dates: null, // Unset: omitted from rendered UI until confirmed
  },
};
