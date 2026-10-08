import React from "react";
import {
  SiTypescript,
  SiPython,
  SiGo,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiGooglecloud,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiMongodb,
  SiNodedotjs,
  SiFastapi,
  SiRos,
} from "@icons-pack/react-simple-icons";
import {
  Bot,
  Cpu,
  Mic,
  AudioLines,
  Activity,
  Globe,
  GitFork,
  ShieldAlert,
  KeyRound,
  FileText,
  Boxes,
} from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
}

/**
 * OpenAI official logo mark (SVG)
 */
function OpenAIIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.783a4.485 4.485 0 0 1 2.366-1.973v.163l.004 5.52a.792.792 0 0 0 .393.681l5.834 3.37-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 8.783zm16.822 3.94l-5.845-3.372 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.674a.795.795 0 0 0-.4-.682zm2.01-4.223l-.142-.085-4.773-2.78a.77.77 0 0 0-.785 0L9.63 8.995V6.663a.08.08 0 0 1 .033-.062l4.84-2.796a4.494 4.494 0 0 1 6.657 4.442zm-10.741.87l2.83-1.634 2.828 1.634v3.269l-2.828 1.633-2.83-1.633V9.37z" />
    </svg>
  );
}

/**
 * Google Vertex AI mark (SVG)
 */
function VertexAIIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 3.3L18.4 9 12 12.7 5.6 9 12 5.3zm-7 5.2l6 3.5v7l-6-3.3V10.5zm14 7.2l-6 3.3v-7l6-3.5v7.2z" />
    </svg>
  );
}

export function TechIcon({ name, className = "w-3.5 h-3.5" }: TechIconProps) {
  const norm = name.trim().toLowerCase();

  // Languages
  if (norm.includes("typescript")) return <SiTypescript className={className} />;
  if (norm.includes("python")) return <SiPython className={className} />;
  if (norm === "go" || norm.includes("golang")) return <SiGo className={className} />;
  if (norm.includes("javascript")) return <SiJavascript className={className} />;

  // Frontend & Web
  if (norm.includes("react")) return <SiReact className={className} />;
  if (norm.includes("next")) return <SiNextdotjs className={className} />;
  if (norm.includes("tailwind")) return <SiTailwindcss className={className} />;
  if (norm.includes("html") || norm.includes("css")) return <SiHtml5 className={className} />;

  // AI & Voice
  if (norm.includes("openai")) return <OpenAIIcon className={className} />;
  if (norm.includes("vertex")) return <VertexAIIcon className={className} />;
  if (norm.includes("rag")) return <Cpu className={className} />;
  if (norm.includes("agent")) return <Bot className={className} />;
  if (norm.includes("pipecat")) return <AudioLines className={className} />;
  if (norm.includes("vapi")) return <Mic className={className} />;
  if (norm.includes("mujoco")) return <Activity className={className} />;

  // Backend & DB
  if (norm.includes("fastapi")) return <SiFastapi className={className} />;
  if (norm.includes("node")) return <SiNodedotjs className={className} />;
  if (norm.includes("mongo")) return <SiMongodb className={className} />;
  if (norm.includes("api") || norm.includes("rest")) return <Globe className={className} />;

  // Cloud & DevOps
  if (norm.includes("gcp") || norm.includes("google cloud")) return <SiGooglecloud className={className} />;
  if (norm.includes("docker")) return <SiDocker className={className} />;
  if (norm.includes("github actions")) return <SiGithubactions className={className} />;
  if (norm.includes("ci/cd")) return <GitFork className={className} />;
  if (norm === "git") return <SiGit className={className} />;

  // Security & Systems
  if (norm.includes("threat") || norm.includes("owasp")) return <ShieldAlert className={className} />;
  if (norm.includes("rbac")) return <KeyRound className={className} />;
  if (norm.includes("ros")) return <SiRos className={className} />;
  if (norm.includes("audit") || norm.includes("logging")) return <FileText className={className} />;

  // Default fallback
  return <Boxes className={className} />;
}
