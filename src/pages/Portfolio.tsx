
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectCard from "../components/portfolio/ProjectCard";
import {
  projects,
  type ProjectCategory,
} from "../data/projects";

type Filter = "All Projects" | ProjectCategory;

const filters: Filter[] = [
  "All Projects",
  "E-Commerce",
  "Web Application",
  "Business Website",
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] =
    useState<Filter>("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main>
      {/* Portfolio Hero */}
      <section className="bg-dark px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-widest text-violet-400">
            Our Portfolio
          </p>

          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            Explore Our
            <span className="text-violet-400">
              {" "}Creative Work.
            </span>
          </h1>
          

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Explore demonstration projects showcasing
            responsive design, modern interfaces,
            and web development possibilities.
          </p>
        </div>
      </section>
      

      {/* Project Filter and Grid */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-xl px-5 py-3 font-semibold transition-colors ${
                  activeFilter === filter
                    ? "bg-primary text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-violet-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
