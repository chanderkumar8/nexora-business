
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-dark px-6 py-24 text-white md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl"
      />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl"
      >
        <p className="flex items-center gap-2 font-semibold uppercase tracking-widest text-violet-300">
          <Sparkles size={19} aria-hidden="true" />
          What We Offer
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Digital Solutions Built for
          <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            Modern Businesses.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
          From professional business websites to full stack
          web applications, we create digital experiences
          designed around your goals.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-white hover:bg-violet-700"
          >
            Discuss Your Project
            <ArrowRight size={19} aria-hidden="true" />
          </Link>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-4 font-semibold text-white hover:bg-white/10"
          >
            <Code2 size={19} aria-hidden="true" />
            Explore Our Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
