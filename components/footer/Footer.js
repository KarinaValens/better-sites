import ContactForm from "./ContactForm";
import LongLogo from "./LongLogo";

export default function Footer() {
  return (
    <footer>
      <LongLogo />
      <ContactForm />
      <div className="title-address"></div>
      <div className="social"></div>
    </footer>
  );
}
