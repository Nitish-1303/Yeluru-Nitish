export type ExperienceItemType = {
  id: string;
  companyName: string;
  companyLogo?: string;
  companyWebsite?: string;
  isCurrentEmployer?: boolean;
  positions: {
    id: string;
    title: string;
    employmentPeriod: {
      start: string; // MM.YYYY
      end?: string; // MM.YYYY
    };
    employmentType?: string;
    description?: string; // markdown
    icon?: React.ReactNode;
    skills?: string[];
    isExpanded?: boolean;
  }[];
};

export const experiences: ExperienceItemType[] = [
  {
    id: "stealth-startup",
    companyName: "Stealth Startup",
    companyLogo: "/logos/stealth.png",
    isCurrentEmployer: true,
    positions: [
      {
        id: "full-stack-engineer",
        title: "Full Stack Engineer",
        employmentPeriod: {
          start: "11.2024",
        },
        employmentType: "Full-time",
        description: `Building production AI products at a GenAI startup under NDA, owning development across frontend, backend, AI infrastructure, and cloud deployment.

- Designed and deployed LLM-powered systems, including RAG pipelines, AI agents, prompt engineering workflows, and production AI integrations.
- Built real-time Voice AI applications using Pipecat and Vapi, implementing low-latency audio streaming, conversation state management, and agent orchestration.
- Developed and shipped end-to-end React, Next.js, TypeScript, FastAPI, Node.js, and Python applications for production environments.
- Deployed and managed cloud infrastructure on Google Cloud Platform (Cloud Run, Pub/Sub, Cloud Storage) using Docker and automated CI/CD pipelines.
- Worked directly with customers as a Forward Deployed Engineer, translating user feedback into production features and delivering improvements through rapid weekly release cycles.`,
        skills: [
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Python",
          "FastAPI",
          "Go",
          "GCP",
          "Docker",
          "Pipecat",
          "Vapi",
          "OpenAI",
          "Vertex AI",
        ],
      },
    ],
  },
  {
    id: "alignerr",
    companyName: "Alignerr",
    companyLogo: "/logos/alignerr.png",
    isCurrentEmployer: true,
    positions: [
      {
        id: "ai-evaluation",
        title: "Senior Software Engineer — AI Evaluation & Benchmarks",
        employmentPeriod: {
          start: "05.2026",
        },
        employmentType: "Part-time",
        description: `Evaluating reinforcement learning policies in MuJoCo simulation environments and benchmark tasks.

- Evaluated reinforcement learning policies in MuJoCo simulation environments.
- Analyzed agent behavior, policy correctness, and performance against benchmark tasks.
- Identified failure cases and provided structured technical feedback to improve RL model quality.
- Contributed to evaluation pipelines for embodied AI and reinforcement learning systems.`,
        skills: [
          "Reinforcement Learning",
          "MuJoCo",
          "Robotic Process Automation",
          "ROS",
        ],
      },
    ],
  },
  {
    id: "open-source-connect",
    companyName: "Open Source Connect",
    companyLogo: "/logos/opensourceconnect.png",
    isCurrentEmployer: false,
    positions: [
      {
        id: "contributor",
        title: "Contributor",
        employmentPeriod: {
          start: "07.2025",
          end: "01.2026",
        },
        employmentType: "Full-time",
        description: `Contributed bug fixes, performance improvements, and CI/CD workflow optimizations across open-source repositories.

- Contributed bug fixes, performance improvements, and developer documentation across 5+ open-source repositories with rapid merge cycles.
- Reviewed and mentored contributions across 20+ pull requests, improving code quality and contributor onboarding.
- Implemented CI/CD workflow optimizations using GitHub Actions, eliminating manual deployment tasks and reducing release overhead.`,
        skills: ["Full-Stack Development", "Node.js", "GitHub Actions", "CI/CD"],
      },
    ],
  },
  {
    id: "smartinternz",
    companyName: "SmartInternz",
    companyLogo: "/logos/smartinternz.png",
    isCurrentEmployer: false,
    positions: [
      {
        id: "full-stack-developer",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "05.2024",
          end: "07.2024",
        },
        employmentType: "Internship",
        description: `Architected and delivered a full-stack College Infrastructure Management System supporting 4 user roles.

- Architected and delivered a full-stack College Infrastructure Management System supporting 4 user roles (faculty, students, lab assistants, administrators) across 10+ academic departments.
- Implemented secure role-based access control (RBAC), image-enabled fault reporting, approval workflows, and automated low-stock alert systems.
- Built and deployed the platform using a full-stack JavaScript architecture with MongoDB, React, and Node.js, pairing responsive UX with secure operational workflows.`,
        skills: ["MERN Stack", "MongoDB", "React", "Node.js", "RBAC"],
      },
    ],
  },
  {
    id: "eduskills",
    companyName: "EduSkills Foundation",
    companyLogo: "/logos/eduskills.png",
    isCurrentEmployer: false,
    positions: [
      {
        id: "cyber-security-analyst",
        title: "Cyber Security Analyst",
        employmentPeriod: {
          start: "05.2023",
          end: "07.2023",
        },
        employmentType: "Internship",
        description: `Conducted threat modeling and vulnerability assessments on web applications with OWASP Top 10 remediation.

- Conducted threat modeling and vulnerability scans on 5+ web applications, identifying and remediating OWASP Top 10 issues including broken auth and IDOR.
- Implemented role-based access controls and audit logging for sensitive user actions across internal systems.`,
        skills: [
          "Cyber Security",
          "OWASP Top 10",
          "Threat Modeling",
          "Audit Logging",
        ],
      },
    ],
  },
];
