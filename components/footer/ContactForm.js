import React from "react";

export default function ContactForm() {
  return (
    <div className="contact-form">
      <h3>Keep in touch</h3>
      <form>
        <label htmlFor="full-name">
          Full Name
          <input type="text" name="full-name" />
        </label>
        <label htmlFor="email">
          Full Name
          <input type="email" name="email" />
        </label>
      </form>
    </div>
  );
}
