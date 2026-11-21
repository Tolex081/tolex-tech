export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  /**
   * Only set this when a project is actually deployed somewhere.
   * Leave it undefined and the "live demo" link is hidden rather than
   * quietly pointing back at the repo.
   */
  live?: string;
  /**
   * A real screenshot of the running project, e.g.
   *   import spotify from "@/assets/projects/spotify.png";
   * When absent, a themed cover is rendered instead of a stock photo.
   */
  image?: string;
}

/**
 * Newest and most substantial first. Featured are the three largest builds;
 * the index carries the other real products. Small one-off experiments stay
 * on GitHub rather than here.
 */
export const featuredProjects: Project[] = [
  {
    title: "Sui Money",
    description:
      "A budget for a Sui wallet that learns from what you tell it. Label a payment once and it is remembered on Walrus Memory; that memory changes the advice: how much is safe to spend each day, whether a savings goal is on track, and whether a payment you are about to sign cuts into a bill. Reads native USDC on Sui Mainnet through Tatum. Built for the Total Recall hackathon.",
    tech: ["Next.js", "TypeScript", "Sui", "Walrus Memory", "Tatum", "PostgreSQL"],
    github: "https://github.com/Tolex081/sui-money-total-recall",
    live: "https://sui-money.vercel.app",
  },
  {
    title: "CrewPass",
    description:
      "Membership NFTs that own their own NEAR account. Each pass earns from its programme, carries achievements and moves from Bronze to Platinum on chain. When it is sold, the buyer takes over the account and the seller keeps no way back in. NEAR Hackathon, NFT track, on testnet.",
    tech: ["Rust", "NEAR", "TypeScript", "React", "Hono"],
    github: "https://github.com/Tolex081/crewpass",
    live: "https://crewpass-steel.vercel.app",
  },
  {
    title: "Atesta",
    description:
      "Contribution records confirmed by the organisations that saw the work. An organisation reviews the evidence and issues a non-transferable credential NFT on NEAR; anyone can check it against the digest held on chain, and issuers can revoke or supersede it. NEAR Hackathon, NFT track.",
    tech: ["Next.js", "TypeScript", "Rust", "NEAR", "PostgreSQL"],
    github: "https://github.com/Tolex081/atesta",
    live: "https://atesta-near.vercel.app",
  },
];

export const otherProjects: Project[] = [
  {
    title: "CircuitWill",
    description:
      "A personal money will on X Layer: an agent can propose payments, but only your rule circuits (daily cap, payee whitelist, confirmations, freeze) can let money move. Contracts and circuits are tested; mainnet deployment is prepared, not yet run.",
    tech: ["Solidity", "Foundry", "JavaScript"],
    github: "https://github.com/Tolex081/circuitwill",
    live: "https://circuitwill.vercel.app",
  },
  {
    title: "VitaRecall",
    description:
      "A care companion that remembers: Gemini replies with recall from Walrus Memory on mainnet, plus Telegram sign-in, care notes and chat history. A hackathon pilot on fictional patient data.",
    tech: ["React", "Express", "PostgreSQL", "Gemini", "Walrus Memory"],
    github: "https://github.com/Tolex081/vitarecall",
    live: "https://vitarecall.vercel.app",
  },
  {
    title: "Exam Mistake Memory v2",
    description:
      "A study-agent prompt that records how sure you were, not just whether you were wrong, so a lucky guess and a confident mistake get different remedies. Tested over five sessions on Walrus Mainnet.",
    tech: ["Prompt design", "Walrus Memory"],
    github: "https://github.com/Tolex081/exam-mistake-memory-v2",
  },
  {
    title: "ReplyGuy",
    description:
      "Paste an X post, get five replies in five tones that read like someone actually read it. The model understands the post before it writes, then a guard in code rejects clichés, repeated openers and overlong replies.",
    tech: ["Next.js", "TypeScript", "Claude API", "Gemini"],
    github: "https://github.com/Tolex081/replyguy",
    live: "https://replyguy-tau.vercel.app",
  },
  {
    title: "MAME Mosaic Wall",
    description:
      "A live photo mosaic for the MAME community: members add their X handle, their avatar lands in the tile it matches best by colour, and together the tiles form the founder's portrait.",
    tech: ["Next.js", "TypeScript", "Redis", "Sharp"],
    github: "https://github.com/Tolex081/Mame-Mosaic",
    live: "https://mame-mosaic.vercel.app",
  },
  {
    title: "MoonPay Love Card",
    description:
      "An unofficial, mobile-first fan-card generator with a shared community wall. Card text comes from Claude through a serverless function, so the API key never reaches the browser.",
    tech: ["React", "Tailwind CSS", "Supabase", "Claude API"],
    github: "https://github.com/Tolex081/moonpay-love-card",
    live: "https://moonpay-love-card.vercel.app",
  },
  {
    title: "Provernaire Trivia",
    description:
      "A trivia challenge with staking: players test their knowledge, earn tokens and stake their rewards. Frontend, backend and staking app shipped as three parts.",
    tech: ["React", "Node.js", "Web3"],
    github: "https://github.com/Tolex081/provernaire",
    live: "https://provernaire.vercel.app",
  },
];
