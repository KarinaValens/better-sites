import Image from "next/image";

export default function ServicesHero() {
  return (
    <article className="cta-section services-hero">
      <h1 className="display-text title-cta-sect">Subscription base services</h1>
      <div className="flex article-info wrap">
        <div className="flex-columns article-text">
          <h2 className="sub-title-darck">Just 1200 DKK/m</h2>
          <p>Focus on your business while we take care of your online presence. Our expert team will ensure your website is running smoothly, so you can reach more customers and grow your brand. </p>
          <p>Connect with your customers like never before.</p>
          <div className="flex ">
            <button className="button primary-button">Free Risk Try</button>
            <button className="button secondary-button">Pricing</button>
          </div>
        </div>
        <div className="img-container">
          <Image src={"/media/images/services_1_cta.webp"} alt={"logo"} /* width={200} height={200}  */ fill placeholder="empty" /* priority={true} */ />
        </div>
      </div>
    </article>
  );
}
