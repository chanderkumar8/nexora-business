
import Services from "../components/home/Services";
import ServicesHero from "../components/services/ServicesHero";
import DevelopmentProcess from "../components/services/DevelopmentProcess";
import ServicesFAQ from "../components/services/ServicesFAQ";
import CallToAction from "../components/home/CallToAction";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <Services />
      <DevelopmentProcess />
      <ServicesFAQ />
      <CallToAction />
    </main>
  );
}
