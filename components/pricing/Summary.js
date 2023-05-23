import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Summary() {
  const { show, pricing } = useContext(AppContext);
  let i = 0;

  return (
    <>
      {!show && (
        <section className="summary">
          <h1 className="summary-title sub-title-dark">Thank you for your purchase </h1>
          <h2 className="summary-title title">Purchase Summary </h2>
          <div className="flex">
            <div key="i++" className="pricing-card-continer">
              <h3 className="high-light-sub3 bg-dark card-list-title bg-dark">{pricing.title}</h3>
              <div className="pricing-card flex-columns center">
                <h4 className="title">{pricing.price}</h4>
                <ul className="card-list flex-columns">
                  {pricing.content.map((item) => {
                    return (
                      <li key={i++} className="card-list-item">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
