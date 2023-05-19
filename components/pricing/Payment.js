import { useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";
import Summary from "./Summary";

export default function Payment() {
  const { show, payment, setPayment } = useContext(AppContext);
  const form = useRef();

  //formating payment
  function handleDate(e) {
    const input = e.target;
    let value = input.value;
    if (value.length === 2) {
      value += "/";
      input.value = value;
    }
  }

  /* It first removes any non-digit characters with value.replace(/\D/g,''), 
    then it's using the match() method with the regular expression .{1,4} 
    that would match 4 digits. The g flag makes it match globally and store 
    the matches in an array.
    Then it's join the array of matches with a space, and taking the first 19 characters 
    and storing it back in the input value. */

  const handleCardNumber = (e) => {
    const input = e.target;
    let value = input.value.replace(/\D/g, "");
    value = value.match(/.{1,4}/g);
    if (value) {
      value = value.join(" ");
      if (value.length > 19) value = value.slice(0, 19);
    }
    input.value = value;
  };

  function handlePayment(e) {
    e.preventDefault();
    setPayment(true);
  }

  return (
    <>
      {!show &&
        (payment ? (
          <Summary />
        ) : (
          <main className="summary-payment flex wrap center">
            <h1>Payment Information</h1>
            <section className="bg-container" style={{ backgroundImage: "url(/media/images/3_second_cta.webp)" }}>
              <div className="glass-container hero flex-columns">
                <h2>Payment Information</h2>
                <form className="flex-columns services-form" ref={form} onSubmit={handlePayment}>
                  <label className="flex" htmlFor="full_name">
                    First Name
                    <input required className="form-input" type="text" name="first_name" autoFocus />
                  </label>
                  <label className="flex" htmlFor="lastname">
                    Last Name
                    <input required className="form-input" type="text" name="last_name" />
                  </label>
                  <label className="flex" htmlFor="card_num">
                    Card Number
                    <input required className="form-input" type="text" onChange={handleCardNumber} maxLength="19" placeholder="1234 1234 1234 1234" name="card_num" />
                  </label>
                  <label className="flex" htmlFor="date">
                    Exp
                    <input className="form-input" type="text" onChange={handleDate} maxLength="5" placeholder="DD/YY" name="date" id="card-date" />
                  </label>
                  <label className="flex" htmlFor="date">
                    CVV
                    <input className="form-input" type="text" maxLength="3" placeholder="SVC " name="svc" id="card-svc" />
                  </label>

                  <div className="flex duo-button-container">
                    <button type="submit" className="button primary-button">
                      Pay
                    </button>
                    <button className="button secondary-button">Discard</button>
                  </div>
                </form>
              </div>
            </section>
          </main>
        ))}
    </>
  );
}
