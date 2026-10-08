
import {
  MessageSquare,
  Palette,
  Code2,
  Rocket,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Planning",
    description:
      "We understand the project goals, target audience, required features, and delivery expectations.",
  },
  {
    number: "02",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "We plan responsive layouts, user journeys, visual elements, and the overall design direction.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "We develop the frontend, connect required integrations, and build the agreed functionality.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Testing & Launch",
    description:
      "We test usability, responsiveness, and functionality before preparing the website for deployment.",
  },
];

export default function DevelopmentProcess() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white px-6 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-widest text-primary">
            How We Work
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Our Development Process
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A structured approach to creating high-quality
            digital products from initial planning to launch.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 25 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-shadow hover:shadow-xl"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-violet-300">
                    {step.number}
                  </span>

                  <div className="rounded-xl bg-violet-100 p-3 text-primary">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
