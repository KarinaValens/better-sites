import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function SummaryPayment() {
  const { show, pricing } = useContext(AppContext);
  return (
    <>
      {!show && (
        <mail>
          <section>
            <h2>{pricing.title}</h2>
            <h3>Plan title</h3>
            <p>plan price</p>
          </section>
        </mail>
      )}
    </>
  );
}
