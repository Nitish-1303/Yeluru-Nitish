import { HomeContent } from "../components/HomeContent.tsx";
import { getGitHubStats } from "../lib/github-stats.ts";

export default async function Home() {
  const githubStats = await getGitHubStats();

  return <HomeContent githubStats={githubStats} />;
}
