
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ProjectDetails from "./pages/ProjectDetails";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
         <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
<Route path="/portfolio/:slug" element={<ProjectDetails />} />
            <Route
              path="*"
              element={
                <main className="px-6 py-24 text-center">
                  <h1 className="text-4xl font-bold">
                    404 - Page Not Found
                  </h1>
                  <LinkToHome />
                </main>
              }
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

function LinkToHome() {
  return (
    <p className="mt-4 text-slate-600">
      Please use the navigation menu to return home.
    </p>
  );
}
