import { useContext } from "react";
import IconsSection from "../components/homepage/IconsSection";
import ServicesCards from "../components/services/ServicesCards";
import ServicesForm from "../components/services/ServicesForm";
import ServicesHero from "../components/services/ServicesHero";
import { AppContext } from "../components/context/AppContext";

export default function Services() {
  const { show } = useContext(AppContext);
  return (
    <>
      {!show && (
        <main>
          <ServicesHero />
          <ServicesCards />
          <ServicesForm />
          <IconsSection />
        </main>
      )}
    </>
  );
}
