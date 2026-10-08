
import { motion, useReducedMotion } from "motion/react";
import {
  Code2,
  Palette,
  ShoppingCart,
  Database,
  Search,
  Bot,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Modern, responsive websites built for startups and businesses.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful and user-friendly digital interfaces.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Professional online stores with modern shopping experiences.",
  },
  {
    icon: Database,
    title: "Full Stack Applications",
    description:
      "Scalable web applications with backend and database integration.",
  },
  {
    icon: Search,
    title: "Technical SEO",
    description:
      "Website performance and technical improvements for search visibility.",
  },
  {
    icon: Bot,
    title: "AI API Integration",
    description:
      "Smart website features powered by AI APIs and automation.",
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="scroll-mt-24 bg-light px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-widest text-primary">
            WHAT WE DO
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Our Professional Services
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            We build powerful digital solutions that help
            businesses grow and succeed online.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 25 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : index * 0.06,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:border-violet-200 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon size={28} aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-primary hover:text-violet-800"
                >
                  Learn More
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
