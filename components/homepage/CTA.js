import Image from "next/image";
import React from "react";

export default function CTA() {
  return (
    <article className="flex-columns">
      <h2 className="display-text">Explore your potential </h2>
      <h2>Just 1200 DKK/m</h2>
      <div className="flex article-info">
        <div className="flex-columns article-text">
          <p>
            Welcome to Better Sites, we are here to improve your business´s online presence and help you reach more clients. Our team is dedicated to creating easy-to-use and effective websites that will help you grow your business quickly and
            efficiently.
          </p>
          <p>With our care plan, you can be confident that your website will always be up-to-date and running smoothly. Don´t wait any longer to improve your business´s online presence. Choose Better Sites today and grow fast, grow better.</p>
          <button className="button primary-button">Contact Us</button>
        </div>
        <div className="img-container">
          <Image src={"/media/first_cta_sect.webp"} alt={"logo"} /* width={200} height={200}  */ fill placeholder="empty" /* priority={true} */ />
        </div>
      </div>
    </article>
  );
}
