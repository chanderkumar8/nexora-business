
import { Link } from "react-router-dom";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const cover = project.screenshots?.[0];

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Project Preview Image */}
      <div className="relative h-64 overflow-hidden bg-slate-100">
        {cover ? (
          <img
            src={cover}
            alt={`${project.title} design concept`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className={`flex h-full items-center justify-center bg-linear-to-br ${project.gradient}`}
          >
            <div className="text-center text-white">
              <ImageIcon size={40} className="mx-auto mb-3" />
              <span className="text-2xl font-bold">
                {project.label}
              </span>
            </div>
          </div>
        )}

        {/* View Project Button */}
        <Link
          to={`/portfolio/${project.slug}`}
          className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-violet-700 hover:shadow-xl"
        >
          View Project
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* Project Details */}
      <div className="p-7">
        <p className="mb-3 text-sm font-semibold text-violet-600">
          {project.category}
        </p>

        <h3 className="text-2xl font-bold text-slate-900">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-700"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Link */}
        <Link
          to={`/portfolio/${project.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-slate-900 transition-colors hover:text-violet-600"
        >
          Explore Project
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </article>
  );
}
