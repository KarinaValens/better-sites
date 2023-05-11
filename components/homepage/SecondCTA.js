import Image from "next/image";
import React from "react";

export default function SecondCTA() {
  return (
    <article className="flex wrap article-info ">
      <div className="flex-columns article-text cta-2-title">
        <h2>Do you still have questions? </h2>
        <h2>Let`s have a talk </h2>
        <button className="button primary-button">Contact Us</button>
      </div>
      <div className="flex-columns img-group">
        <div className="flex">
          <Image src={"/media/images/first_cta_sect.webp"} width={230} height={200} alt={"CTA 2cd sect"} /* fill */ placeholder="empty" sizes="(max-width: 700px) 100vw, 700px" />
          <Image src={"/media/images/first_cta_sect.webp"} width={230} height={200} alt={"CTA 2cd sect"} /* fill */ placeholder="empty" sizes="(max-width: 700px) 100vw, 700px" />
        </div>
        <div className="img-container">
          <Image src={"/media/images/first_cta_sect.webp"} alt={"CTA 2cd sect"} fill placeholder="empty" sizes="(max-width: 700px) 100vw, 700px" />
        </div>
      </div>
    </article>
  );
}
