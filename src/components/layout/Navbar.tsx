
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Layers3, Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `transition-colors ${
      isActive
        ? "text-violet-400"
        : "text-slate-300 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="rounded-xl bg-primary p-2 text-white">
            <Layers3 size={26} />
          </div>

          <span className="text-2xl font-extrabold text-white">
            Nexora<span className="text-violet-400">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkStyles}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white hover:bg-violet-700 lg:inline-flex"
        >
          Get Started
          <ArrowUpRight size={18} />
        </Link>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-dark px-6 py-5 lg:hidden"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setIsOpen(false)}
                className={linkStyles}
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-primary px-5 py-3 text-center font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
