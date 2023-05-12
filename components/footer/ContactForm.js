import React from "react";

export default function ContactForm() {
  return (
    <div className="contact-form flex-columns">
      <h4>Keep in touch</h4>
      <form className="flex-columns">
        <label className="flex" htmlFor="full-name">
          Full Name
          <input type="text" name="full-name" />
        </label>
        <label className="flex" htmlFor="email">
          Email
          <input type="email" name="email" />
        </label>
      </form>
    </div>
  );
}
