import { useContext, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { handlerPost } from "../../pages/api/handler";

export default function ServicesForm() {
  /* To call the const url from the use context object */
  const { show, url } = useContext(AppContext);

  /* To access the form dom element */
  const form = useRef();

  // to clean the form after being submited
  const [submitted, setSubmitted] = useState(false);

  console.log(url);
  async function pushCustomerInfo(e) {
    /* To avoid the form being submited before the object newContactInfo has been created */
    e.preventDefault();
    /* To create a new object that is going to be push
    to the database throught the handlerPost request made in the next.js`s incorporated API folder   */
    const newContactInfo = await handlerPost(url, {
      fullname: form.current.elements.full_name.value,
      email: form.current.elements.email.value,
      company_name: form.current.elements.company_name.value,
      company_url: form.current.elements.company_URL.value,
    });
    // Clear the form fields
    form.current.reset();
    setSubmitted(true); // Set the submitted state to true after the form is submitted
    //console.log(newContactInfo);
  }

  return (
    <>
      {!show &&
        (submitted ? (
          <div className="bg-container" style={{ backgroundImage: "url(/media/images/hero_sect_bg.jpg)" }}>
            <div className="glass-container hero flex-columns">
              <h2 className="title">Thank you for your message!! </h2>
              <h2 className="sub-title-light "> We will be back to you as soon as posible</h2>
            </div>
          </div>
        ) : (
          <section className="bg-container" style={{ backgroundImage: "url(/media/images/3_second_cta.webp)" }}>
            <div className="glass-container hero flex-columns">
              <h2>
                Let`s get started with your <span className="title">Better Site </span>
              </h2>
              <form className="flex-columns services-form" onSubmit={pushCustomerInfo} ref={form}>
                <label className="flex" htmlFor="full_name">
                  Full Name
                  <input required className="form-input" type="text" name="full_name" />
                </label>
                <label className="flex" htmlFor="email">
                  Email
                  <input required className="form-input" type="email" name="email" />
                </label>
                <label className="flex" htmlFor="company_name">
                  Company`s Name
                  <input required className="form-input" type="text" name="company_name" />
                </label>
                <label className="flex" htmlFor="company_URL">
                  Company`s URL
                  <input className="form-input" type="text" name="company_URL" />
                </label>
                <div className="flex duo-button-container">
                  <button type="submit" className="button primary-button">
                    Send
                  </button>
                  <button className="button secondary-button">Discard</button>
                </div>
              </form>
            </div>
          </section>
        ))}
    </>
  );
}
