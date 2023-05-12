import Link from "next/link";
import { home_cards } from "../../pages/api/cards";
import { useState } from "react";

export default function HomeCards() {
  const [truncatedText, setTruncatedText] = useState("");

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  }
  return (
    <section className="bg-dark carousel flex">
      <ul className="flex cards-container">
        {home_cards.map((card) => {
          return (
            <li key={card.id} style={{ backgroundImage: `url(${card.img})` }} className="card flex">
              <article className="flex-columns">
                <h3>{card.title}</h3>
                <p>{truncateText(card.short_text, 200)}</p>
                {/*                 <Link href={card.cta}> Read more...</Link>
                 */}{" "}
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
