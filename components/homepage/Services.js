import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  return (
    <section className="bg-dark">
      <ul ref={ref} className="flex cards-container">
        <li style={{ backgroundImage: "url(/media/images/service_sect_card1.webp)" /* , backgroundColor: "black", mixBlendMode: "overlay" */ }} className="card flex">
          <article className="flex-columns">
            <h2>Unique Design</h2>
            <p>Set yourself apart from competitors with a unique website design tailored to your specific business needs.</p>
            <a href=""> Read more...</a>
          </article>
        </li>
      </ul>
    </section>
  );
}
