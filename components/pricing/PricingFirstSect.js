import Image from "next/image";

export default function PricingFirstSection() {
  return (
    <article className="cta-section services-hero">
      <h1 className="display-text title-cta-sect">Affordable & Flexible</h1>
      <div className="flex article-info wrap">
        <div className="img-container">
          <Image src={"/media/images/pricing-1-first-sect.webp"} alt={"services 1"} fill placeholder="empty" sizes="(max-width: 700px) 100vw, 700px" /* priority={true} */ />
        </div>
        <div className="flex-columns article-text">
          <h2 className="sub-title-darck">Just 1200 DKK/m</h2>
          <p>Enjoy the convenience of paying for your website with our flexible monthly payment plans, available for up to 2 years.</p>
          <h2 className="title-display">30 days money back guaranty!!</h2>
        </div>
      </div>
    </article>
  );
}
