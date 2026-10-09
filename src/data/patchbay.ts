export interface PatchBayContent {
  projectName: string;
  description: string;
  problem: {
    label: string;
    paragraph: string;
  };
  approach: {
    label: string;
    paragraph: string;
  };
  currentStatus: {
    label: string;
    status: string;
    supporting: string;
  };
  closing: string;
}

export const patchBayContent: PatchBayContent = {
  projectName: "PatchBay",
  description:
    "Building a GitHub App to detect breaking third-party API changes and open a fix PR backed by test evidence.",
  problem: {
    label: "The problem",
    paragraph:
      "Third-party APIs can change without a change to your code. Teams can find out only when something breaks in production.",
  },
  approach: {
    label: "The approach",
    paragraph:
      "PatchBay's intended workflow is to detect the change, reproduce the failure against the repo, generate a minimal patch, rerun the tests, and open a PR with the evidence attached.",
  },
  currentStatus: {
    label: "Current status",
    status: "Proven on an offline red-to-green test loop. Not deployed yet.",
    supporting:
      "The offline prototype demonstrates failing tests, a generated patch, and passing tests. Live API watching, the Docker sandbox path, GitHub App installation, and external PR creation are not verified yet.",
  },
  closing: "Looking for a US-based GTM co-founder.",
};
