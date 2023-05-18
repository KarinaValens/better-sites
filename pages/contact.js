import React, { useContext } from "react";
import ServicesForm from "../components/services/ServicesForm";
import { AppContext } from "../components/context/AppContext";

export default function Contact() {
  const { show } = useContext(AppContext);
  return (
    <>
      {!show && (
        <main>
          <ServicesForm />
        </main>
      )}
    </>
  );
}
