import Link from "next/link";
import { pricing_cards } from "../../pages/api/cards";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import SummaryPayment from "./Payment";

export default function Packages() {
  const { pricing, setPricing, setSelectedPackage } = useContext(AppContext);

  let i = 0;
  console.log("I got clicked", pricing);

  function handleSelection(title, price, content) {
    // Store the selected package information in the AppContext
    setPricing({
      title,
      price,
      content,
    });
    setSelectedPackage({ title, price, content });
  }

  return (
    <>
      <sections className="pricing-carousel">
        <div className="flex pricing-wraper">
          {pricing_cards.map((card) => {
            return (
              <>
                <div key="i++" className="pricing-card-continer">
                  <h3 className="high-loght-sub3 bg-dark card-list-title bg-dark">{card.title}</h3>
                  <div className="pricing-card flex-columns center">
                    <h4 className="title">{card.price}</h4>
                    <ul className="card-list flex-columns">
                      {card.content.map((item) => {
                        return (
                          <li key={i++} className="card-list-item">
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                    <button onClick={() => handleSelection(card.title, card.price, card.content)} className="button primary-button flex center">
                      Get Started
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </sections>
    </>
  );
}
