export default function ServicesForm() {
  return (
    <div className="bg-container" style={{ backgroundImage: "url(/media/images/3_second_cta.webp)" }}>
      <div className="glass-container hero flex-columns">
        <h2>
          Let`s get started with your <span className="title">Better Site </span>
        </h2>
        <form className="flex-columns services-form">
          <label className="flex" htmlFor="full-name">
            Full Name
            <input type="text" name="full-name" />
          </label>
          <label className="flex" htmlFor="email">
            Email
            <input type="email" name="email" />
          </label>
          <label className="flex" htmlFor="email">
            Company`s Name
            <input type="email" name="email" />
          </label>
          <label className="flex" htmlFor="email">
            Company`s URL
            <input type="email" name="email" />
          </label>
        </form>

        <div className="flex">
          <button className="button primary-button">Send</button>
          <button className="button secondary-button">Dismis</button>
        </div>
      </div>
    </div>
  );
}
