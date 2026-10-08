
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import PortfolioPreview from "../components/home/PortfolioPreview";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <PortfolioPreview />
      <CallToAction />
    </main>
  );
}
