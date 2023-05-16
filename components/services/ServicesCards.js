import Link from "next/link";
import { services_cards } from "../../pages/api/cards";

export default function ServicesCards() {

  return (
    <section className="bg-dark carousel flex">
      <ul className="flex cards-container">
        {services_cards.map((card) => {
          return (
            <li key={card.id} style={{ backgroundImage: `url(${card.img})` }} className="card services-card flex">
              <article className="services-front-card flex-columns ">
                <h3>{card.title}</h3>
                <p>{card.short_text}</p>
              </article>

              <article className="services-back-card flex-columns">
                <h3>{card.title}</h3>
                <p>{card.long_text}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
