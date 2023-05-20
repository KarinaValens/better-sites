import Link from "next/link";

export default function HeroSect() {
  return (
    <div className="bg-container" style={{ backgroundImage: "url(/media/images/hero_sect_bg.jpg)" }}>
      <div className="glass-container hero flex-columns">
        <h1>
          Are you ready to get a <span className="title">Better Site </span>for your business?
        </h1>
        <div className="flex">
          <Link href={"/process"} className="button flex center primary-button">
            Free Risk Try
          </Link>
          <Link href={"/pricing"} className="button flex center secondary-button">
            Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
