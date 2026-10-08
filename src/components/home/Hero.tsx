
import { ArrowRight, Code2, Monitor, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-dark px-6 py-20 text-white md:py-28">

      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            <Sparkles size={16} />
            Welcome to Nexora Digital
          </div>

          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl xl:text-6xl">
            We Build
            <span className="block bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Digital Experiences
            </span>
            That Grow Your Business
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            We design and develop modern websites, scalable
            web applications, and powerful digital solutions
            for growing businesses.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-white transition-colors hover:bg-purple-700"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/portfolio"
              className="rounded-xl border border-slate-500 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>

        {/* Right Visual Card */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/10 bg-slate-800/70 p-6 shadow-2xl backdrop-blur-xl">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                Nexora Studio
              </h2>
              <Sparkles className="text-purple-400" />
            </div>

            <div className="rounded-2xl bg-linear-to-br from-purple-600 to-blue-800 p-8">
              <p className="text-sm uppercase tracking-widest text-purple-100">
                Modern Web Solutions
              </p>

              <h3 className="mt-5 text-3xl font-bold">
                Your Vision.
                <br />
                Our Innovation.
              </h3>

              <p className="mt-4 text-purple-100">
                Beautiful digital products designed
                to help businesses succeed.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-900 p-5 text-center">
                <Monitor
                  className="mx-auto mb-3 text-purple-400"
                  size={28}
                />
                <p className="text-sm font-medium">
                  Responsive Design
                </p>
              </div>

              <div className="rounded-xl bg-slate-900 p-5 text-center">
                <Code2
                  className="mx-auto mb-3 text-purple-400"
                  size={28}
                />
                <p className="text-sm font-medium">
                  Modern Development
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
