import React, { useContext, useRef, useState } from "react";

export default function ContactForm({ subscribe, status, message, onValidated }) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  // to clean the form after being submited
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      fullName &&
      email.indexOf("@") > -1 &&
      onValidated(
        {
          EMAIL: email,
          MERGE1: fullName,
        },
        // Clear the form fields
        form.current.reset(),
        setSubmitted(true) // Set the submitted state to true after the form is submitted
      );
  };
  //console.log("onValidated", onValidated);

  return (
    <div className="flex-columns form-container">
      <h4> {status === "success" ? "Success!" : "Keep in touch"}</h4>

      {status !== "success" ? (
        <form ref={form} className="flex-columns contact-form" onSubmit={handleSubmit}>
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
          {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
          <label className="flex" htmlFor="MERGE1">
            Full Name
            <input type="text" name="MERGE1" id="MERGE1" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </label>
          <label className="flex" htmlFor="MERGE0">
            Email
            <input type="email" name="MERGE0" id="MERGE0" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <button className="button primary-button">Subscribe</button>
        </form>
      ) : null}
    </div>
  );
}
