import Image from "next/image";
import Link from "next/link";

export default function ServicesFirstSection() {
  return (
    <article className="cta-section services-hero">
      <h1 className="display-text title-cta-sect">Subscription base services</h1>
      <div className="flex article-info wrap services-article">
        
        <div className="img-container">
          <Image src={"/media/images/services_1_cta.webp"} alt={"services 1"} fill placeholder="empty" sizes="(max-width: 700px) 100vw, 700px" /* priority={true} */ />
        </div>

        <div className="flex-columns article-text service-article-text">
          <h2 className="sub-title-dack">Just 1200 DKK/m</h2>
          <p>Focus on your business while we take care of your online presence. Our expert team will ensure your website is running smoothly, so you can reach more customers and grow your brand. </p>
          <p>Connect with your customers like never before.</p>
          <div className="flex">
            <Link href={"/process"} className="button center flex primary-button">
              Free Risk Try
            </Link>
            <Link href={"/pricing"} className="button center flex secondary-button">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
