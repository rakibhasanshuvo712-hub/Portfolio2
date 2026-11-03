export const profile = {
  name: "Rakib Hasan Shuvo",
  role: "CSE Student & Aspiring Full-Stack Developer",
  tagline:
    "I’m passionate about building modern, responsive and user-friendly web applications. I enjoy learning new technologies and turning ideas into real-world projects.",
  location: "Savar, Dhaka, Bangladesh",
  email: "rakibhasanshuvo7171@gmail.com",
  github: "https://github.com/rakibhasanshuvo712-hub",
  linkedin: "https://www.linkedin.com/in/rakib-hasan-shuvo-7110ba407",
  instagram: "https://instagram.com/rakibhasanshuvo712",
  oldPortfolio: "https://rakibhasanshuvo712-hub.github.io/portfolio/",
  avatar: "/profile.jpg",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Foundation",
    items: ["HTML5", "CSS3", "JavaScript", "ES6+", "Problem Solving"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API", "API Integration"],
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose", "Database Design"],
  },
  {
    title: "UI & Design",
    items: ["Responsive Design", "Component UI", "Figma Basics"],
  },
  {
    title: "Authentication",
    items: ["Auth", "Authorization", "Protected Routes"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vite", "VS Code", "Vercel"],
  },
  {
    title: "Other",
    items: ["JSON", "Debugging", "Deployment"],
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  live?: string;
  source: string;
  featured?: boolean;
  pinned?: boolean;
};

const projectList: Project[] = [
  {
    id: "bazar-dor",
    index: "01",
    title: "Bazar Dor (বাজার দর)",
    category: "Next.js · TypeScript",
    description:
      "Bengali-language web app tracking daily market prices in Bangladesh — rice, lentils, oil, vegetables, fish, meat, eggs and spices. Day-over-day changes, category browsing, per-market comparison, sign-in + profile.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Auth", "Vercel"],
    live: "https://bazar-dor-three.vercel.app/",
    source: "https://github.com/rakibhasanshuvo712-hub/Bazar-Dor",
    featured: true,
  },
  {
    id: "fit-log",
    index: "02",
    title: "Fit Log",
    category: "Next.js · TypeScript",
    description:
      "Modern responsive fitness app — explore workouts, view details, create personal plans, save workouts and track completed exercises.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    live: "https://fit-log-sandy.vercel.app/",
    source: "https://github.com/rakibhasanshuvo712-hub/fit-log",
    pinned: true,
    featured: true,
  },
  {
    id: "stack-builder",
    index: "03",
    title: "Technology Stack Builder",
    category: "React · TypeScript",
    description:
      "Interactive React app for exploring technologies and building a personal stack with add, remove and manage actions.",
    tags: ["React", "TypeScript", "Tailwind", "Toastify"],
    source: "https://github.com/rakibhasanshuvo712-hub/Assignment-5",
    pinned: true,
  },
  {
    id: "borrowhub",
    index: "04",
    title: "BorrowHub",
    category: "Web App · UI",
    description:
      "Book / item borrowing web interface with listings, categories and clean responsive layout. Built to practice real-world CRUD-style UI flows.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    source: "https://github.com/rakibhasanshuvo712-hub/BorrowHub",
  },
  {
    id: "nextjs-book",
    index: "05",
    title: "Nextjs Book App",
    category: "Next.js · Learning",
    description:
      "Next.js book exploration project — routing, data fetching and component structure practice on the way to full-stack.",
    tags: ["Next.js", "TypeScript", "Learning"],
    source: "https://github.com/rakibhasanshuvo712-hub/nextjs-Book",
  },
  {
    id: "ph-a1",
    index: "06",
    title: "PH-A1 Landing Page",
    category: "HTML · CSS",
    description:
      "Responsive landing page focused on clean, user-friendly interface using only HTML and CSS.",
    tags: ["HTML", "CSS", "Responsive UI"],
    source: "https://github.com/rakibhasanshuvo712-hub/ph-a1",
    pinned: true,
  },
];

const pinnedRepositoryOrder = ["stack-builder", "ph-a1", "fit-log"];
export const projects: Project[] = [...projectList].sort((a, b) => {
  const aOrder = a.pinned ? pinnedRepositoryOrder.indexOf(a.id) : pinnedRepositoryOrder.length;
  const bOrder = b.pinned ? pinnedRepositoryOrder.indexOf(b.id) : pinnedRepositoryOrder.length;
  return aOrder - bOrder;
});

export const journey = [
  {
    period: "2024 — Present",
    title: "CSE Student & Self-taught Web Developer",
    desc: "Studying Computer Science & Engineering while building projects with HTML, CSS, JS, React, Next.js and MongoDB.",
  },
  {
    period: "2025",
    title: "Frontend Projects — React & Next.js",
    desc: "Built Bazar Dor, Fit Log and Stack Builder. Learned TypeScript, Tailwind, auth, protected routes and Vercel deployment.",
  },
  {
    period: "Next",
    title: "Goal: Full-Stack Developer",
    desc: "Deepening Node.js, Express, MongoDB and REST APIs. Open to internships, freelance work and collaborations.",
  },
];
