export default function HeroSect() {
  return (
    <div className="bg-container" style={{ backgroundImage: "url(/media/images/hero_sect_bg.jpg)" }}>
      <div className="glass-container hero flex-columns">
        <h2>
          Are you ready to get a <span className="title">Better Site </span>for your business?
        </h2>
        <div className="flex">
          <button className="button primary-button">Free Risk Try</button>
          <button className="button secondary-button">Pricing</button>
        </div>
      </div>
    </div>
  );
}
