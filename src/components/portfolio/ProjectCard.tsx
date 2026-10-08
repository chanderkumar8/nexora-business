
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ShoppingCart,
  BarChart3,
  Building2,
} from "lucide-react";
import type { Project } from "../../data/projects";

const icons = {
  "E-Commerce": ShoppingCart,
  "Web Application": BarChart3,
  "Business Website": Building2,
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const reduceMotion = useReducedMotion();
  const Icon = icons[project.category];

  return (
    <motion.article
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      <div
        className={`relative flex h-60 items-center justify-center bg-linear-to-br ${project.gradient} p-6`}
      >
        <span className="absolute left-5 top-5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
          Demo Concept
        </span>

        <div className="w-full max-w-xs rounded-xl border border-white/30 bg-white/15 p-6 text-center shadow-xl backdrop-blur-sm">
          <div className="mb-5 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
          </div>

          <Icon
            size={44}
            className="mx-auto mb-4 text-white"
            aria-hidden="true"
          />

          <p className="text-xl font-bold text-white">
            {project.label}
          </p>

          <div className="mt-6 space-y-2">
            <div className="h-2 rounded bg-white/40" />
            <div className="h-2 w-3/4 rounded bg-white/30" />
          </div>
        </div>
      </div>

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

        <Link
          to={`/portfolio/${project.slug}`}
          className="mt-7 inline-flex items-center gap-2 font-semibold text-primary hover:text-violet-800"
        >
          View Case Study
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
