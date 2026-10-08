
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Zap,
  Smartphone,
  ShieldCheck,
  MessagesSquare,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Fast-loading websites built with modern development practices and optimized resources.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Beautiful experiences that adapt smoothly to desktop, tablet, and mobile devices.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Development",
    description:
      "Clean, maintainable code with attention to security, accessibility, and scalability.",
  },
  {
    icon: MessagesSquare,
    title: "Clear Communication",
    description:
      "Transparent collaboration and regular updates throughout the development process.",
  },
];

const highlights = [
  "Modern React-based development",
  "Professional UI/UX design",
  "Mobile-first responsive layouts",
  "Maintainable and reusable components",
];

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-choose-us"
      className="overflow-hidden bg-white px-6 py-24 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-semibold uppercase tracking-widest text-primary">
            Why Choose Nexora
          </p>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Where Creativity Meets
            <span className="text-primary">
              {" "}Technology.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            We combine creative thinking, modern technologies,
            and user-focused design to build digital experiences
            that support your business goals.
          </p>

          <p className="mt-4 max-w-xl leading-8 text-slate-600">
            From the initial idea to the final launch,
            our approach focuses on building websites
            that are functional, visually engaging,
            and easy to maintain.
          </p>

          {/* Feature Checklist */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                />

                <span className="font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-white transition-colors hover:bg-violet-700"
          >
            Learn More About Us
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </motion.div>

        {/* RIGHT CARDS */}
        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-shadow duration-300 hover:border-violet-200 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-violet-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon size={27} aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
