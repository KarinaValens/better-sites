import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <article className="bg-dark cta-section">
      <h2 className="display-text title-cta-sect">Explore your potential </h2>
      <div className="flex article-info wrap">
        <div className="flex-columns article-text">
          <h2 className="stroke-dark sub-title-light">Just 1200 DKK/m</h2>
          <p>
            Welcome to Better Sites, we are here to improve your business´s online presence and help you reach more clients. Our team is dedicated to creating easy-to-use and effective websites that will help you grow your business quickly and
            efficiently.
          </p>
          <p>With our care plan, you can be confident that your website will always be up-to-date and running smoothly. Don´t wait any longer to improve your business´s online presence. Choose Better Sites today and grow fast, grow better.</p>
          <Link href={"/contact"} className="button flex center primary-button">
            Contact Us
          </Link>
        </div>
        <div className="img-container">
          <Image src={"/media/images/first_cta_sect.webp"} alt={"cta-img"} /* width={200} height={200}  */ fill placeholder="empty" /* priority={true} */ />
        </div>
      </div>
    </article>
  );
}
