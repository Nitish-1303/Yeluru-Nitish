export interface GitHubStats {
  publicRepos: number;
  followers: number;
}

const fallbackStats: GitHubStats = {
  publicRepos: 52,
  followers: 6,
};

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const response = await fetch("https://api.github.com/users/Nitish-1303", {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "Yeluru-Nitish-portfolio",
      },
      cache: "force-cache",
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const profile: unknown = await response.json();
    if (
      typeof profile !== "object" ||
      profile === null ||
      !("public_repos" in profile) ||
      !("followers" in profile) ||
      typeof profile.public_repos !== "number" ||
      typeof profile.followers !== "number"
    ) {
      throw new Error("GitHub API returned an invalid profile response");
    }

    return {
      publicRepos: profile.public_repos,
      followers: profile.followers,
    };
  } catch (error) {
    console.warn("Unable to fetch GitHub profile stats; using static fallback.", error);
    return fallbackStats;
  }
}
