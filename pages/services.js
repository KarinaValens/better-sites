import { useContext } from "react";
import IconsSection from "../components/homepage/IconsSection";
import ServicesCards from "../components/services/ServicesCards";
import ServicesForm from "../components/services/ServicesForm";
import { AppContext } from "../components/context/AppContext";
import ServicesFirstSection from "../components/services/ServicesFirstSection";

export default function Services() {
  const { show } = useContext(AppContext);
  return (
    <>
      {!show && (
        <main>
          <ServicesFirstSection />
          <ServicesCards />
          <ServicesForm />
          <IconsSection />
        </main>
      )}
    </>
  );
}
