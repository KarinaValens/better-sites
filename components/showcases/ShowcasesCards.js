import Link from "next/link";
import { showcases_cards } from "../../pages/api/cards";

export default function ShowcasesCards() {
  return (
    <section className="bg-dark carousel flex">
      <ul className="flex cards-container">
        {showcases_cards.map((card) => {
          return (
            <li key={card.id} style={{ backgroundImage: `url(${card.img})` }} className="card services-card flex">
              <article className="showcases-card flex-columns ">
                <h3 className="sub-title-light">{card.title}</h3>
                <Link href={card.link} target="-blank">
                  Visit website...
                </Link>
              </article>

              {/* <article className="services-back-card flex-columns">
                <h3 className="high-light-sub3">{card.title}</h3>
                <p>{card.long_text}</p>
              </article> */}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
