import type { ExperienceItemType } from "@/components/work-experience";

export type { ExperienceItemType };

export const experiences: ExperienceItemType[] = [
  {
    id: "independent-projects",
    companyName: "Independent Projects",
    isCurrentEmployer: true,
    positions: [
      {
        id: "full-stack-developer",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Self-employed",
        description: `Building and shipping full-stack projects: HealthyChef, CipherBill and a Migma x Spotify concept demo.`,
        skills: ["TypeScript", "React", "Next.js", "Node.js"],
      },
    ],
  },
  {
    id: "alignerr",
    companyName: "Alignerr",
    companyLogo: "/logos/alignerr.png",
    isCurrentEmployer: false,
    positions: [
      {
        id: "ai-evaluation",
        title: "Senior Software Engineer — AI Evaluation & Benchmarks",
        employmentPeriod: {
          start: "05.2026",
          end: "08.2026",
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
