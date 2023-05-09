import React from "react";

export default function ContactForm() {
  return (
    <div className="contact-form flex-columns">
      <h3>Keep in touch</h3>
      <form className="flex-columns">
        <label className="flex" htmlFor="full-name">
          Full Name
          <input type="text" name="full-name" />
        </label>
        <label className="flex" htmlFor="email">
          Full Name
          <input type="email" name="email" />
        </label>
      </form>
    </div>
  );
}
