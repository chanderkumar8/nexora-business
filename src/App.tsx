
import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Lazy-loaded Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ServicesPage = lazy(
  () => import("./pages/ServicesPage")
);
const Portfolio = lazy(
  () => import("./pages/Portfolio")
);
const ProjectDetails = lazy(
  () => import("./pages/ProjectDetails")
);
const Contact = lazy(() => import("./pages/Contact"));

// Page Loading Component
function PageLoader() {
  return (
    <div
      role="status"
      className="flex min-h-[60vh] items-center justify-center bg-slate-50"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600" />

        <p className="text-sm font-semibold text-violet-600">
          Loading page...
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">

        {/* Navigation */}
        <Navbar />

        {/* Website Pages */}
        <div className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route
                path="/about"
                element={<About />}
              />

              <Route
                path="/services"
                element={<ServicesPage />}
              />

              <Route
                path="/portfolio"
                element={<Portfolio />}
              />

              <Route
                path="/portfolio/:slug"
                element={<ProjectDetails />}
              />

              <Route
                path="/contact"
                element={<Contact />}
              />

              {/* 404 Page */}
              <Route
                path="*"
                element={
                  <div className="flex min-h-[65vh] flex-col items-center justify-center px-6 text-center">
                    <h1 className="text-7xl font-extrabold text-violet-600">
                      404
                    </h1>

                    <h2 className="mt-5 text-2xl font-bold text-slate-900">
                      Page Not Found
                    </h2>

                    <p className="mt-4 max-w-md text-slate-600">
                      The page you're looking for doesn't exist
                      or may have been moved.
                    </p>

                    <a
                      href="/"
                      className="mt-8 rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-700"
                    >
                      Back to Homepage
                    </a>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
