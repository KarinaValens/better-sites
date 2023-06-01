import React, { useContext, useState } from "react";
import Image from "next/image";
import { steps_cards } from "./api/cards";
import { AppContext } from "../components/context/AppContext";

export default function Process() {
  const { show } = useContext(AppContext);
/* 
  const [truncatedText, setTruncatedText] = useState("");

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  } */

  return (
    <>
      {!show && (
        <main>
          <section className="process flex-columns">
            {steps_cards.map((card, index) => {
              return (
                <div className="process-steps" key={index}>
                  <div className="process-text flex-columns">
                    <h1 className="title">
                      Step <span className="step-number">{card.number}. </span>
                    </h1>
                    <div className="truncateText">
                      <p>{card.text}</p>
                    </div>
                  </div>
                  <div className=" img-container step-image-container">
                    <Image className=" step-image" src={card.image} alt={`Process Step ${card.number}`} fill placeholder="empty" sizes="(max-width: 700px) 100vw, 700px" priority={true} />
                  </div>
                </div>
              );
            })}
          </section>
        </main>
      )}
    </>
  );
}
