import Link from "next/link";
import { cards } from "../../pages/api/cards";
import { useState } from "react";

export default function Services() {
  const [truncatedText, setTruncatedText] = useState("");

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  }
  return (
    <section className="bg-dark carousel">
      <ul /* ref={ref}  */ className="flex cards-container">
        {cards.map((card) => {
          return (
            <li key={card.id} style={{ backgroundImage: `url(${card.img})` /* "url(/media/images/service_sect_card1.webp)" */ }} className="card flex">
              <article className="flex-columns">
                <h2>{card.title}</h2>
                <p>{truncateText(card.short_text, 104)}</p>
                <Link href={card.cta}> Read more...</Link>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
