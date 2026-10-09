
import { Link } from "react-router-dom";
import {
  Layers3,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Website Development",
  "UI/UX Design",
  "E-Commerce Solutions",
  "Full Stack Web Apps",
  "AI API Integration",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-slate-300">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">

        {/* Footer Columns */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company Information */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-3"
            >
              <div className="rounded-xl bg-primary p-2 text-white">
                <Layers3 size={26} />
              </div>

              <span className="text-2xl font-extrabold text-white">
                Nexora<span className="text-violet-400">.</span>
              </span>
            </Link>

            <p className="max-w-sm leading-relaxed text-slate-400">
              We build modern websites, powerful web
              applications, and innovative digital
              solutions for growing businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-violet-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="hover:text-violet-400"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Get In Touch
            </h3>

            <p className="mb-6 leading-relaxed text-slate-400">
              Have a project in mind? Let's discuss
              how we can bring your vision to life.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin
                  size={20}
                  className="shrink-0 text-violet-400"
                />
                <span>Available Worldwide</span>
              </div>

              <Link
                to="/contact"
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail
                  size={20}
                  className="shrink-0 text-violet-400"
                />
                <span>Send Us a Message</span>
              </Link>
            </div>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white hover:bg-violet-700"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-700 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-400">
            © {year} Nexora Digital. All rights reserved.
          </p>

          
        </div>
      </div>
    </footer>
  );
}
