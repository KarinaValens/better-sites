import ContactForm from "./ContactForm";
import LongLogo from "./LongLogo";
import Social from "./Social";
import TitleAdress from "./TitleAdress";

export default function Footer() {
  return (
    <footer className="flex">
      <LongLogo />
      <ContactForm />
      <TitleAdress />
      <Social />
    </footer>
  );
}
