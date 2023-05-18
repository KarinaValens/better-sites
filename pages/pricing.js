import React, { useContext } from "react";
import PricingFirstSection from "../components/pricing/PricingFirstSect";
import AllPackage from "../components/pricing/AllPackage";
import Packages from "../components/pricing/Packages";
import { AppContext } from "../components/context/AppContext";

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
