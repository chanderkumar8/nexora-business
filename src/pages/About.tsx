
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Smartphone,
  MessageSquare,
  Sparkles,
  Code2,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description:
      "We combine thoughtful design and technology to turn complex ideas into intuitive digital experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Development",
    description:
      "We focus on clean, maintainable code with attention to performance, accessibility, and security.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "We create layouts that work beautifully across desktops, tablets, and mobile devices.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "We believe successful development begins with understanding goals and keeping communication clear.",
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <main>
      {/* ABOUT HERO */}
      <section className="relative overflow-hidden bg-dark px-6 py-24 text-white md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl"
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl"
        >
          <p className="flex items-center gap-2 font-semibold uppercase tracking-widest text-violet-400">
            <Sparkles size={18} />
            About Nexora Digital
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Turning Ideas Into
            <span className="bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Digital Experiences.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            We explore the possibilities of modern web
            development through creative design, responsive
            interfaces, and practical digital solutions.
          </p>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-primary">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Design and Development
              <span className="text-primary"> Working Together.</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Nexora Digital is a fictional agency brand
              created as a professional website development
              portfolio project.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The website demonstrates modern React development,
              thoughtful UI/UX design, reusable components,
              accessible layouts, and a responsive user experience.
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-white hover:bg-violet-700"
            >
              Explore Our Services
              <ArrowRight size={19} aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-3xl bg-linear-to-br from-violet-600 via-purple-700 to-indigo-900 p-6 shadow-2xl sm:p-10">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-8 text-white backdrop-blur-sm">
              <Code2 size={46} className="text-violet-200" />

              <h3 className="mt-7 text-3xl font-bold">
                Design. Build. Innovate.
              </h3>

              <p className="mt-5 leading-8 text-violet-100">
                Combining modern technology with creativity
                to develop beautiful digital products.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/10 p-5">
                  <Lightbulb size={26} />
                  <p className="mt-3 font-semibold">
                    Creative Design
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-5">
                  <ShieldCheck size={26} />
                  <p className="mt-3 font-semibold">
                    Quality Code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-widest text-primary">
              Our Direction
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Mission & Vision
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-9 shadow-sm">
              <div className="mb-6 inline-flex rounded-xl bg-violet-100 p-4 text-primary">
                <Target size={30} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                To design digital experiences that combine
                usability, performance, and modern development
                practices to solve meaningful business problems.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-9 shadow-sm">
              <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4 text-secondary">
                <Eye size={30} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                To explore the future of web development
                through creative interfaces, scalable systems,
                and useful technology-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-primary">
              What Matters To Us
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
              Our Core Values
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              The principles behind our design and
              development approach.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-violet-100 p-4 text-primary">
                  <Icon size={28} aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-slate-50 px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
            Have a Project in Mind?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Let's discuss how modern design and technology
            can bring your next website idea to life.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 font-semibold text-white hover:bg-violet-700"
          >
            Let's Work Together
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
