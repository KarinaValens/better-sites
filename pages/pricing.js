import React, { useContext, useEffect } from "react";
import PricingFirstSection from "../components/pricing/PricingFirstSect";
import { AppContext } from "../components/context/AppContext";
import SummaryPayment from "../components/pricing/Payment";
import AllPackage from "../components/pricing/PricingAllPackage";
import Packages from "../components/pricing/PricingPackages";
import Payment from "../components/pricing/Payment";

export default function Pricing() {
  const { show, selectedPackage, setSelectedPackage } = useContext(AppContext);

  useEffect(() => {
    return () => {
      // Reset the payment state when the component unmounts
      setSelectedPackage("");
    };
  }, [setSelectedPackage]);

  return (
    <>
      {!show &&
        (selectedPackage ? (
          <Payment package={selectedPackage} />
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
