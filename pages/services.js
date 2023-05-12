import ServicesCards from "../components/services/ServicesCards";
import ServicesForm from "../components/services/ServicesForm";
import ServicesHero from "../components/services/ServicesHero";

export default function services() {
  return (
    <>
      <ServicesHero />
      <ServicesCards />
      <ServicesForm />
    </>
  );
}
