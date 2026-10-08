
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const features = [
  "Custom Websites",
  "Full Stack Applications",
  "Modern UI/UX",
];

export default function CallToAction() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact-cta"
      className="bg-white px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 35 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="relative isolate overflow-hidden rounded-3xl bg-linear-to-r from-violet-700 via-purple-700 to-indigo-800 px-6 py-16 text-center text-white shadow-2xl sm:px-12 md:py-24"
        >
          {/* Background decorations */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl">
            {/* Icon */}
            <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <Sparkles
                size={32}
                className="text-violet-100"
                aria-hidden="true"
              />
            </div>

            {/* Heading */}
            <p className="font-semibold uppercase tracking-widest text-violet-200">
              Let's Build Something Great
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Have a Project in Mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100">
              Whether you need a professional business
              website, e-commerce platform, or custom
              web application, let's bring your idea
              to life.
            </p>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-violet-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-violet-50 hover:shadow-xl"
            >
              Let's Work Together
              <ArrowRight
                size={20}
                aria-hidden="true"
              />
            </Link>

            {/* Feature badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="inline-flex items-center gap-2 text-sm font-medium text-violet-100"
                >
                  <CheckCircle2
                    size={17}
                    aria-hidden="true"
                  />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
