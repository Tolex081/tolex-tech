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

export const featuredProjects: Project[] = [
  {
    title: "Spotify Clone",
    description:
      "A full-featured Spotify clone with user authentication, music playback, and playlist management. Built to replicate the Spotify experience with modern web technologies.",
    tech: ["JavaScript", "HTML", "CSS", "Authentication"],
    github: "https://github.com/Tolex081/My-Spotify-clone",
  },
  {
    title: "Provernaire Trivia",
    description:
      "An interactive trivia challenge game with staking functionality. Users can test their knowledge, earn tokens, and stake their rewards in this engaging Web3 gaming platform.",
    tech: ["JavaScript", "React", "Web3", "Node.js"],
    github: "https://github.com/Tolex081/provernaire",
  },
  {
    title: "Admin Dashboard",
    description:
      "A comprehensive admin dashboard featuring data visualization, user management, and responsive design. Built with vanilla HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tolex081/Admin-dashboard-project",
  },
];

export const otherProjects: Project[] = [
  {
    title: "Succinct Crab",
    description: "Catch the crab and prove your love — an interactive game",
    tech: ["JavaScript", "CSS"],
    github: "https://github.com/Tolex081/succinctcrab",
  },
  {
    title: "PicBreaker",
    description: "Arrange the puzzle — a fun picture puzzle game",
    tech: ["JavaScript", "CSS"],
    github: "https://github.com/Tolex081/PicBreaker",
  },
  {
    title: "Succinct Badge",
    description: "Generate your Succinct Badge and flex it",
    tech: ["JavaScript", "CSS"],
    github: "https://github.com/Tolex081/succinctbadge",
  },
  {
    title: "ZK Egg",
    description: "Pick your egg and wait for hatching — Web3 game",
    tech: ["JavaScript", "Web3"],
    github: "https://github.com/Tolex081/zkegg",
  },
  {
    title: "myHub",
    description: "A personal hub for organizing content",
    tech: ["JavaScript", "CSS"],
    github: "https://github.com/Tolex081/myHub",
  },
  {
    title: "Succinct Edits",
    description: "Upload, watch and download community games and video edits",
    tech: ["JavaScript", "CSS"],
    github: "https://github.com/Tolex081/succinctedits",
  },
];
