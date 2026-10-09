import { HomeContent } from "../components/HomeContent.tsx";
import { getContributions } from "../lib/contributions.ts";
import { getGitHubStats } from "../lib/github-stats.ts";

export default async function Home() {
  const [githubStats, contributions] = await Promise.all([
    getGitHubStats(),
    getContributions(),
  ]);

  return <HomeContent githubStats={githubStats} contributions={contributions} />;
}
