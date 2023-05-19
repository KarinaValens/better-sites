import React, { useContext } from "react";
import PricingFirstSection from "../components/pricing/PricingFirstSect";
import { AppContext } from "../components/context/AppContext";
import SummaryPayment from "../components/pricing/Payment";
import AllPackage from "../components/pricing/PricingAllPackage";
import Packages from "../components/pricing/PricingPackages";

export default function Pricing() {
  const { show, selectedPackage, setSelectedPackage } = useContext(AppContext);
  return (
    <>
      {!show &&
        (selectedPackage ? (
          <SummaryPayment package={selectedPackage} />
        ) : (
          <main>
            <PricingFirstSection />
            <AllPackage />
            <Packages />
          </main>
        ))}
    </>
  );
}
