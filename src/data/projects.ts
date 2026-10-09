
export type ProjectCategory =
  | "E-Commerce"
  | "Web Application"
  | "Business Website";

export type ProjectStatus =
  | "concept"
  | "in-progress"
  | "completed";

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  overview: string;
  features: string[];
  technologies: string[];
  gradient: string;
  label: string;

  // Project images
  screenshots: string[];

  // Project information
  status: ProjectStatus;
  challenge?: string;
  solution?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "ecommerce-store",
    title: "Modern E-Commerce Store",
    category: "E-Commerce",

    description:
      "A modern and responsive e-commerce website concept with a clean shopping experience.",

    overview:
      "A professional e-commerce website design concept featuring product listings, shopping categories, and a responsive storefront interface.",

    features: [
      "Responsive website design",
      "Product catalog interface",
      "Shopping cart UI concept",
      "Product categories",
      "Modern homepage layout",
      "Mobile-friendly design",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    gradient: "from-violet-600 to-indigo-900",
    label: "E-COMMERCE",

    screenshots: [
      "/images/projects/ecommerce/homepage.png",
    ],

    status: "concept",

    challenge:
      "Design an attractive online shopping interface that makes products easy to discover.",

    solution:
      "Create a modern storefront concept with structured product sections and responsive layouts.",
  },

  {
    id: 2,
    slug: "business-dashboard",
    title: "Business Analytics Dashboard",
    category: "Web Application",

    description:
      "A professional business dashboard concept featuring analytics, charts, and management tools.",

    overview:
      "A web application dashboard design concept for displaying business performance, revenue charts, and operational information in a clear interface.",

    features: [
      "Modern dashboard interface",
      "Analytics chart concepts",
      "Revenue overview design",
      "Business statistics cards",
      "Responsive navigation layout",
      "Data visualization UI",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    gradient: "from-blue-600 to-slate-900",
    label: "DASHBOARD",

    screenshots: [
      "/images/projects/dashboard/homepage.png",
    ],

    status: "concept",

    challenge:
      "Present business information in a way that is easy to understand and navigate.",

    solution:
      "Design a dashboard interface with organized information cards, charts, and navigation.",
  },

  {
    id: 3,
    slug: "real-estate-website",
    title: "Real Estate Business Website",
    category: "Business Website",

    description:
      "A premium real estate website concept featuring properties, modern layouts, and elegant design.",

    overview:
      "A real estate website design concept focused on presenting property listings, featured homes, and property information through a professional interface.",

    features: [
      "Modern real estate homepage",
      "Property listing card designs",
      "Featured properties section",
      "Property search UI concept",
      "Responsive website layout",
      "Contact enquiry interface concept",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    gradient: "from-fuchsia-600 to-purple-900",
    label: "REAL ESTATE",

    screenshots: [
      "/images/projects/real-estate/homepage.png",
    ],

    status: "concept",

    challenge:
      "Create a visually engaging website design for showcasing residential properties.",

    solution:
      "Design an elegant property browsing experience with attractive listing cards and clear enquiry options.",
  },
];
