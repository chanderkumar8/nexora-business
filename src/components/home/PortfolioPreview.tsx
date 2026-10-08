
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ShoppingCart,
  BarChart3,
  Building2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  gradient: string;
  icon: LucideIcon;
  label: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Modern E-Commerce Store",
    category: "E-Commerce Website",
    description:
      "A modern online storefront concept with product discovery and shopping features.",
    technologies: ["React", "TypeScript", "Tailwind"],
    gradient: "from-violet-600 via-purple-700 to-indigo-900",
    icon: ShoppingCart,
    label: "E-COMMERCE",
  },
  {
    id: 2,
    title: "Business Analytics Dashboard",
    category: "Web Application",
    description:
      "A business dashboard concept for visualizing sales, customers, and key metrics.",
    technologies: ["React", "Dashboard", "Charts"],
    gradient: "from-blue-600 via-indigo-700 to-slate-900",
    icon: BarChart3,
    label: "DASHBOARD",
  },
  {
    id: 3,
    title: "Real Estate Business Website",
    category: "Business Website",
    description:
      "A modern real estate concept for showcasing properties and capturing enquiries.",
    technologies: ["React", "Tailwind", "Responsive"],
    gradient: "from-fuchsia-600 via-violet-700 to-purple-900",
    icon: Building2,
    label: "REAL ESTATE",
  },
];

export default function PortfolioPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="portfolio-preview"
      className="bg-slate-50 px-6 py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-widest text-primary">
              Selected Portfolio Concepts
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
              Explore Our
              <span className="text-primary"> Creative Work.</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore example website concepts showcasing
              modern design and development capabilities.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:text-violet-800"
          >
            View All Projects
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.id}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Project Illustration */}
                <div
                 className={`relative flex h-60 items-center justify-center overflow-hidden bg-linear-to-br ${project.gradient} p-6`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl"
                  />

                  {/* Mock Browser Window */}
                  <div className="relative w-full max-w-xs rounded-xl border border-white/30 bg-white/15 p-4 shadow-2xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                    <div className="mb-6 flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                    </div>

                    <Icon
                      size={42}
                      className="mx-auto mb-4 text-white"
                      aria-hidden="true"
                    />

                    <p className="text-center text-xl font-bold tracking-wide text-white">
                      {project.label}
                    </p>

                    <div className="mt-6 space-y-2">
                      <div className="h-2 rounded-full bg-white/40" />
                      <div className="h-2 w-4/5 rounded-full bg-white/30" />
                      <div className="h-2 w-3/5 rounded-full bg-white/20" />
                    </div>
                  </div>

                  <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    Demo Concept
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-7">
                  <p className="text-sm font-semibold text-primary">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    to="/portfolio"
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-primary"
                    aria-label={`Explore portfolio information about ${project.title}`}
                  >
                    Explore Project Concepts
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
