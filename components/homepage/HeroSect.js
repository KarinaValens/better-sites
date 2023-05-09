export default function HeroSect() {
  return (
    <div className="bg-container" style={{ backgroundImage: "url(/media/hero_sect_bg.jpg)" }}>
      <div className="glass-container">
        <h1>
          Are you ready to get a <span className="title">Better Site </span>for your business?
        </h1>
        <div className="duo-button-container">
          <button className="button primary-button">Free Risk Try</button>
          <button className="button secondary-button">Pricing</button>
        </div>
      </div>
    </div>
  );
}
