import Link from "next/link";
import { pricing_cards } from "../../pages/api/cards";

export default function Packages() {
  return (
    <sections className="pricing-carousel">
      <div className="flex pricing-wraper">
        {pricing_cards.map((card) => {
          return (
            <>
              <div className="pricing-card-continer">
                <h3 className="high-loght-sub3 bg-dark card-list-title bg-dark">{card.title}</h3>
                <div className="pricing-card flex-columns center">
                  <h4 className="title">{card.price}</h4>
                  <ul className="card-list flex-columns">
                    {card.content.map((description) => {
                      return (
                        <li key={" "} className="card-list-item">
                          {description}
                        </li>
                      );
                    })}
                  </ul>
                  <Link href={"/"} className="button primary-button flex center">
                    Get Started
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </sections>
  );
}
