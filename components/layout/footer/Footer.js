import ContactForm from "./ContactForm";
import LongLogo from "./LongLogo";
import MailChimpSubscribe from "./MailChimpSubscribe";
import Social from "./Social";
import TitleAdress from "./TitleAdress";

export default function Footer() {
  return (
    <footer className="flex wrap">
      <LongLogo />
      {/* <ContactForm /> */}
      <MailChimpSubscribe />
      <TitleAdress />
      <Social />
    </footer>
  );
}
