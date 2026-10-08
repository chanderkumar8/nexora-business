
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does website development take?",
    answer:
      "A small business website can take around 5–10 days, while advanced web applications may take several weeks. The final timeline depends on features, revisions, and project complexity.",
  },
  {
    question: "Will my website be responsive?",
    answer:
      "Yes. Responsive layouts are designed to work across mobile phones, tablets, laptops, and desktop screens.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Depending on project requirements, development can use React, TypeScript, Tailwind CSS, Node.js, Express, and suitable database technologies.",
  },
  {
    question: "Can you build e-commerce websites?",
    answer:
      "Yes. E-commerce projects can include product catalogs, shopping carts, checkout integrations, and management features based on the agreed requirements.",
  },
  {
    question: "Do you offer AI API integrations?",
    answer:
      "AI API integrations can be added to compatible web applications, including chat interfaces and other AI-assisted features. API usage fees and service limitations are discussed before development.",
  },
  {
    question: "Can you deploy my website?",
    answer:
      "Deployment can be included depending on the project scope, hosting provider, domain setup, and any required third-party services.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-widest text-primary">
            Common Questions
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Helpful answers about website development
            and our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    <span>{faq.question}</span>

                    {isOpen ? (
                      <Minus
                        size={20}
                        className="shrink-0 text-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <Plus
                        size={20}
                        className="shrink-0 text-primary"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </h3>

                <div
                  id={panelId}
                  hidden={!isOpen}
                  className="px-6 pb-6 leading-8 text-slate-600"
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
