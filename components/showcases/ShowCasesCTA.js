import Image from "next/image";
import Link from "next/link";

export default function ShowCasesCTA() {
  return (
    <article className="cta-section bg-dark services-hero">
      <h1 className="display-text title-cta-sect">Some of the Our Websites</h1>
      <div className="flex article-info wrap">
        <div className="img-container">
          <Image src={"/media/images/pricing-1-first-sect.webp"} alt={"services 1"} fill placeholder="empty" sizes="(max-width: 700px) 100vw, 700px" priority={true} />
        </div>
        <div className="flex-columns article-text">
          <p>We take care of every detail, from the initial design to ongoing maintenance, so you can focus on your customers. Check out some of the pages we`ve developed.</p>
          <Link href={"/pricing"} className="button primary-button flex center">
            Pricing
          </Link>
        </div>
      </div>
    </article>
  );
}
