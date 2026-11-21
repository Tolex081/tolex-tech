import { featuredProjects, otherProjects, type Project } from "@/data/projects";

/**
 * The résumé at /resume (and the PDF cut from it, public/resume.pdf).
 *
 * Identity, links and skills come from site.ts and skills.ts, so the résumé
 * never drifts from the portfolio. What lives here is résumé-only copy:
 * the summary, experience and tighter project bullets. Dates come from
 * each repository's first commit.
 *
 * After editing, regenerate the PDF with `npm run resume:pdf`.
 */

export const summary =
  "Full-stack developer who ships whole products: the interface, the API, the database and the smart contract. I build across web, Web3 and AI with TypeScript, React, Next.js, Node.js and PostgreSQL, on Sui, NEAR and EVM chains, and on the Claude and Gemini APIs. Every project ships deployed, tested, and with honest notes on what is live and what isn't.";

export interface Role {
  title: string;
  org: string;
  when: string;
  points: string[];
}

export const experience: Role[] = [
  {
    title: "Full-stack Developer",
    org: "Independent · Remote",
    when: "2025 – Present",
    points: [
      "Design, build and deploy products end to end: React and Next.js interfaces, Node.js, Express and Hono APIs, PostgreSQL and Supabase data, and smart contracts in Rust and Solidity.",
      "Built Sui Money for the Total Recall hackathon, and CrewPass and Atesta for the NEAR Hackathon NFT track, each designed, built and deployed inside the hackathon window.",
      "Put AI to work inside products on the Claude and Gemini APIs, keeping keys server-side and guarding model output in code (ReplyGuy, VitaRecall, MoonPay Love Card).",
      "Ship with Vitest and Playwright tests, GitHub Actions CI, threat models for on-chain code, and README notes that say plainly what runs on testnet and what on mainnet.",
    ],
  },
  {
    title: "Youth Corps Member (NYSC)",
    org: "Oyo State Water Corporation, Ibadan",
    when: "Feb 2024 – Feb 2025",
    points: [
      "Supported operation and maintenance of the municipal water supply across the Ibadan metropolis in the Water Engineering Department.",
      "Ran field inspections and water-quality data collection, and wrote the technical reports from them.",
    ],
  },
  {
    title: "Web3 Community Builder",
    org: "Web3 communities",
    when: "Before 2025",
    points: [
      "Built trivia games, badge and card generators and small interactive tools for Web3 communities, used by thousands of members.",
      "Learned to ship fast and design for people who won't read instructions: mobile first, one obvious action, no sign-up wall.",
    ],
  },
];

export interface Credential {
  title: string;
  from: string;
  when?: string;
}

/** Degree first, then certification and membership. Taken from the engineering CV. */
export const education: Credential[] = [
  {
    title: "B.Eng. Water Resources & Environmental Engineering",
    from: "University of Ilorin",
    when: "2023",
  },
  {
    title: "HSE Level 1, 2 & 3",
    from: "World Safety Organization (IACSEET accredited)",
    when: "2023",
  },
  {
    title: "Graduate Member (GMNSE)",
    from: "Nigerian Society of Engineers",
  },
];

export interface ResumeProject {
  project: Project;
  when: string;
  points: string[];
}

const byTitle = (title: string): Project => {
  const found = [...featuredProjects, ...otherProjects].find((p) => p.title === title);
  if (!found) throw new Error(`resume.ts: no project titled "${title}" in projects.ts`);
  return found;
};

/** The builds a reviewer should read first, with what each one proves. */
export const selectedProjects: ResumeProject[] = [
  {
    project: byTitle("Sui Money"),
    when: "Oct – Nov 2026",
    points: [
      "Wallet budget that learns from labelled payments stored on Walrus Memory and turns them into a safe daily spend, savings-goal tracking and a warning before a payment cuts into a bill.",
      "Reads native USDC on Sui Mainnet through Tatum, live at sui-money.vercel.app.",
    ],
  },
  {
    project: byTitle("CrewPass"),
    when: "Nov 2026",
    points: [
      "Membership NFTs that each own a NEAR account, earn from their programme and level up from Bronze to Platinum on chain.",
      "On sale the buyer takes over the account and the seller keeps no way back in.",
    ],
  },
  {
    project: byTitle("Atesta"),
    when: "Nov 2026",
    points: [
      "Contribution records confirmed by the organisations that saw the work, issued as non-transferable credential NFTs on NEAR.",
      "Anyone can verify a credential against its on-chain digest; issuers can revoke or supersede it.",
    ],
  },
  {
    project: byTitle("CircuitWill"),
    when: "Nov 2026",
    points: [
      "A money will on X Layer where an agent can only propose payments; rule circuits (daily cap, payee whitelist, confirmations, freeze) decide what moves. Contracts and circuits tested; mainnet deployment prepared, not yet run.",
    ],
  },
  {
    project: byTitle("VitaRecall"),
    when: "Sep – Oct 2026",
    points: [
      "Care companion with Gemini replies that recall from Walrus Memory on mainnet, Telegram sign-in, care notes and chat history. A hackathon pilot on fictional patient data.",
    ],
  },
];

/** One line each: the rest of the shipped work. */
export const moreProjects: { project: Project; when: string; line: string }[] = [
  {
    project: byTitle("ReplyGuy"),
    when: "Aug 2026",
    line: "Five toned replies to any X post, with a code guard against clichés and repeats. Claude and Gemini APIs.",
  },
  {
    project: byTitle("MAME Mosaic Wall"),
    when: "Aug 2026",
    line: "Live community photo mosaic matching avatars to tiles by colour. Next.js, Redis, Sharp.",
  },
  {
    project: byTitle("MoonPay Love Card"),
    when: "Aug 2026",
    line: "Fan-card generator and community wall; Claude via a serverless function. React, Supabase.",
  },
  {
    project: byTitle("Exam Mistake Memory v2"),
    when: "Aug 2026",
    line: "Study-agent prompt that separates lucky guesses from confident mistakes, on Walrus Mainnet.",
  },
  {
    project: byTitle("Provernaire Trivia"),
    when: "Jul 2025",
    line: "Trivia with token rewards and staking, shipped as frontend, backend and staking app.",
  },
];

/** "https://www.github.com/a/b" → "github.com/a/b" for print. */
export const bareUrl = (href: string) =>
  href.replace(/^mailto:/, "").replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
