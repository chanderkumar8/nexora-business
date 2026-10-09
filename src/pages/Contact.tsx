
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Globe,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// Form validation
const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must contain at least 2 characters"),
  email: z.string().trim().email("Enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().trim().min(10, "Message must contain at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setSubmissionStatus("idle");

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setSubmissionStatus("error");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          service: data.service,
          budget: data.budget || "Not specified",
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmissionStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission failed:", error);
      setSubmissionStatus("error");
    }
  }

  const inputStyle =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-100";

  return (
    <main>
      {/* Contact Hero */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-widest text-violet-400">
            Contact Nexora Digital
          </p>

          <h1 className="mt-5 text-4xl font-bold md:text-6xl">
            Let's Build Something{" "}
            <span className="text-violet-400">Amazing.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Tell us about your project. We would love to hear your ideas
            and discuss how we can help bring them to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <p className="font-semibold uppercase tracking-widest text-violet-600">
              Get In Touch
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Let's Discuss Your Project
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Need a website, e-commerce platform, or custom
              web application? Share your requirements using
              our contact form.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-violet-100 p-4 text-violet-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Project Enquiries
                  </h3>
                  <p className="text-sm text-slate-600">
                    Send a message using the contact form.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-violet-100 p-4 text-violet-600">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Remote Collaboration
                  </h3>
                  <p className="text-sm text-slate-600">
                    Available for online project discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10 lg:col-span-3">
            <h2 className="text-2xl font-bold text-slate-900">
              Start Your Project
            </h2>

            <p className="mt-2 text-slate-600">
              Fill out the form below to send an enquiry.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="mt-8 space-y-6"
            >
              <div className="grid gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-2 block font-medium">
                    Full Name *
                  </label>

                  <input
                    id="name"
                    {...register("name")}
                    placeholder="Your full name"
                    className={inputStyle}
                  />

                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block font-medium">
                    Email Address *
                  </label>

                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="you@example.com"
                    className={inputStyle}
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="mb-2 block font-medium">
                  Service Required *
                </label>

                <select
                  id="service"
                  {...register("service")}
                  className={inputStyle}
                >
                  <option value="">Select a service</option>
                  <option value="Business Website">
                    Business Website
                  </option>
                  <option value="E-Commerce">
                    E-Commerce Development
                  </option>
                  <option value="Full Stack">
                    Full Stack Web Application
                  </option>
                  <option value="UI/UX">
                    UI/UX Design
                  </option>
                  <option value="AI Integration">
                    AI Integration
                  </option>
                  <option value="Other">Other</option>
                </select>

                {errors.service && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="mb-2 block font-medium">
                  Estimated Budget
                </label>

                <select
                  id="budget"
                  {...register("budget")}
                  className={inputStyle}
                >
                  <option value="">Select your budget</option>
                  <option value="$80-$200">$80–$200</option>
                  <option value="$200-$500">$200–$500</option>
                  <option value="$500-$1000">$500–$1,000</option>
                  <option value="$1000+">$1,000+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block font-medium">
                  Project Details *
                </label>

                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  placeholder="Describe your project requirements..."
                  className={inputStyle}
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Success Message */}
              {submissionStatus === "success" && (
                <div
                  role="status"
                  className="flex items-center gap-3 rounded-xl bg-green-50 p-4 text-green-700"
                >
                  <CheckCircle2 size={20} />
                  Your enquiry was submitted successfully!
                </div>
              )}

              {/* Error Message */}
              {submissionStatus === "error" && (
                <div
                  role="alert"
                  className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-red-700"
                >
                  <AlertCircle size={20} />
                  Unable to send your enquiry. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={18} />
                {isSubmitting ? "Sending..." : "Send Project Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
