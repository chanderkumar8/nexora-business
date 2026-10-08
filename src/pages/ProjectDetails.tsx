
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <Link
          to="/portfolio"
          className="mt-6 inline-flex text-primary"
        >
          Return to Portfolio
        </Link>
      </main>
    );
  }

  return (
    <main>
      <section className="bg-dark px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-violet-300"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-violet-400">
            {project.category} · Demo Concept
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {project.description}
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900">
              Project Overview
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              {project.overview}
            </p>

            <h2 className="mt-12 text-3xl font-bold text-slate-900">
              Planned Features
            </h2>

            <ul className="mt-6 space-y-4">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl bg-slate-50 p-8">
            <h2 className="text-xl font-bold text-slate-900">
              Project Information
            </h2>

            <p className="mt-6 text-sm text-slate-500">
              Project Status
            </p>
            <p className="font-semibold text-slate-900">
              Demonstration Concept
            </p>

            <p className="mt-6 text-sm text-slate-500">
              Technologies
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-violet-100 px-3 py-2 text-sm text-violet-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white"
            >
              Discuss a Similar Project
              <ArrowRight size={18} />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
