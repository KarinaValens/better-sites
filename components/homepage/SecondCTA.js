import Image from "next/image";
import React from "react";

export default function SecondCTA() {
  return (
    <article className="flex wrap article-info ">
      <div className="flex-columns  cta-2-title">
        <h2>Do you still have questions? </h2>
        <h2>Let`s have a talk </h2>
        <button className="button primary-button">Contact Us</button>
      </div>
      <div className="flex-columns img-group">
        <div className="flex">
          <div className="small-img-group">
            <Image src={"/media/images/1_second_cta.webp"} fill alt={"CTA 2cd sect"} /* fill */ placeholder="empty" sizes="(max-width: 700px) 100vw, 700px" />
          </div>
          <div className="small-img-group">
            <Image src={"/media/images/2_second_cta.webp"} fill alt={"CTA 2cd sect"} /* fill */ placeholder="empty" sizes="(max-width: 700px) 100vw, 700px" />
          </div>
        </div>
        <div className="img-container">
          <Image src={"/media/images/3_second_cta.webp"} alt={"CTA 2cd sect"} fill placeholder="empty" sizes="(max-width: 700px) 100vw, 700px" />
        </div>
      </div>
    </article>
  );
}
