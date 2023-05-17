import React from "react";
import PricingFirstSection from "../components/pricing/PricingFirstSect";
import AllPackage from "../components/pricing/AllPackage";
import Packages from "../components/pricing/Packages";

export default function pricing() {
  return (
    <>
      <PricingFirstSection />
      <AllPackage />
      <Packages />
    </>
  );
}
