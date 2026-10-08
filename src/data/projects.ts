
export type ProjectCategory =
  | "E-Commerce"
  | "Web Application"
  | "Business Website";

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
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "ecommerce-store",
    title: "Modern E-Commerce Store",
    category: "E-Commerce",
    description:
      "A responsive online shopping experience with a modern storefront design.",
    overview:
      "A demonstration concept for a retail storefront featuring product discovery and a streamlined shopping experience.",
    features: [
      "Responsive storefront design",
      "Product catalog concept",
      "Shopping cart UI concept",
      "Mobile-friendly layouts",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    gradient: "from-violet-600 to-indigo-900",
    label: "E-COMMERCE",
  },
  {
    id: 2,
    slug: "business-dashboard",
    title: "Business Analytics Dashboard",
    category: "Web Application",
    description:
      "A modern dashboard concept for business analytics and management.",
    overview:
      "A dashboard design demonstration showing how business metrics, sales information, and management tools can be organized.",
    features: [
      "Analytics dashboard concept",
      "Revenue cards and charts",
      "Responsive dashboard layout",
      "Management interface design",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    gradient: "from-blue-600 to-slate-900",
    label: "DASHBOARD",
  },
  {
    id: 3,
    slug: "real-estate-website",
    title: "Real Estate Business Website",
    category: "Business Website",
    description:
      "A professional real estate website concept for property discovery.",
    overview:
      "A responsive real estate website demonstration highlighting property listings, modern presentation, and enquiry-focused page design.",
    features: [
      "Property listing UI concept",
      "Property search design",
      "Responsive layouts",
      "Enquiry form concept",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    gradient: "from-fuchsia-600 to-purple-900",
    label: "REAL ESTATE",
  },
];
