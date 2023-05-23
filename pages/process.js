import React from "react";
import Image from "next/image";
import { steps_cards } from "./api/cards";

export default function Process() {
  return (
    <section className="process flex-columns">
      {steps_cards.map((card, index) => {
        return (
          <div className="process-steps" key={index}>
            <div className="process-text flex-columns">
              <h1 className="title">
                Step <span className="step-number">{card.number}. </span>
              </h1>
              <p>{card.text}</p>
            </div>
            <div className=" img-container step-image-container">
              <Image className=" step-image" src={card.image} alt={`Process Step ${card.number}`} fill placeholder="empty" sizes="(max-width: 700px) 100vw, 700px" priority={true} />

              {/* <div className="img-container step-image" style={{ backgroundImage: `url(${card.image})` }} /> */}
            </div>
          </div>
        );
      })}
    </section>
  );
}
