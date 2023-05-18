import React, { useContext } from "react";
import PricingFirstSection from "../components/pricing/PricingFirstSect";
import { AppContext } from "../components/context/AppContext";
import SummaryPayment from "../components/pricing/PricingSummaryPayment";
import AllPackage from "../components/pricing/PricingAllPackage";
import Packages from "../components/pricing/PricingPackages";

export default function Pricing() {
  const { show } = useContext(AppContext);
  return (
    <>
      {!show && (
        <main>
          <PricingFirstSection />
          <AllPackage />
          <Packages />
        </main>
      )}
    </>
  );
}
