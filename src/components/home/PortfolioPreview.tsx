
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../../data/projects";

export default function PortfolioPreview() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-violet-600">
              Our Portfolio
            </p>

            <h2 className="text-3xl font-extrabold text-slate-900 md:text-5xl">
              Featured Projects
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Explore our website and web application design
              concepts demonstrating modern development capabilities.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-semibold text-violet-600 hover:text-violet-800"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Portfolio Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => {
            const cover = project.screenshots?.[0];

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.12,
                }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  {cover ? (
                    <img
                      src={cover}
                      alt={`${project.title} concept design`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`flex h-full items-center justify-center bg-linear-to-br ${project.gradient}`}
                    >
                      <span className="text-2xl font-bold text-white">
                        {project.label}
                      </span>
                    </div>
                  )}

                  {/* View Project Button */}
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-violet-700"
                  >
                    View Project
                    <ArrowUpRight size={18} />
                  </Link>
                </div>

                {/* Project Details */}
                <div className="p-7">
                  <p className="text-sm font-semibold text-violet-600">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-4 min-h-20 leading-7 text-slate-600">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Explore Project Link */}
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-violet-600"
                  >
                    Explore Project
                    <ArrowUpRight size={18} />
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
