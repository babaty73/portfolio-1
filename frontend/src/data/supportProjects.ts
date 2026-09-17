// Reuses real project data already published in SelectedWork.jsx.
// Only a subset is shown here as evidence of work — not a second portfolio.

export type SupportProject = {
  id: string;
  image: string;
  title: string;
  tagline: string;
  stack: string;
  liveUrl: string;
  githubUrl?: string;
};

export const supportProjects: SupportProject[] = [
  {
    id: "kemer",
    image: "/assets/kemer-shopping.png",
    title: "Kemer Market",
    tagline: "A production e-commerce platform built for a real business.",
    stack: "React · TypeScript · Node · Express · MongoDB",
    liveUrl: "https://kemer-shopping.vercel.app",
    githubUrl: "https://github.com/babaty73/Qemer-shopping",
  },
  {
    id: "astumsj",
    image: "/assets/astu-bootcamp.png",
    title: "ASTU MSJ Bootcamp Management System",
    tagline: "A role-based platform for managing an entire bootcamp workflow.",
    stack: "React · Node · Express · MongoDB · JWT",
    liveUrl: "https://astumsj-bootcamp-management-system.vercel.app",
    githubUrl: "https://github.com/babaty73/ASTUMSJ-Bootcamp-dev",
  },
  {
    id: "bloomcare",
    image: "/assets/bloom-care-screenshot.png",
    title: "Bloom-Care",
    tagline: "Helping people find medicines available at nearby pharmacies.",
    stack: "React · TypeScript · Node · Express · MongoDB",
    liveUrl: "https://bloom-cares.vercel.app",
    githubUrl: "https://github.com/babaty73/bloom-care",
  },
  {
    id: "role-management",
    image: "/assets/role-management-system.png",
    title: "Role-Based Management System",
    tagline: "Turning a Figma design into a fully working web application.",
    stack: "React · TypeScript · Tailwind CSS",
    liveUrl: "https://role-managements-system.vercel.app",
    githubUrl:
      "https://github.com/babaty73/ASTUMSJ-Bootcamp-dev/tree/main/role-management-system",
  },
];
