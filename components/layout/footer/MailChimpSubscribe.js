import MailchimpSubscribe from "react-mailchimp-subscribe";
import ContactForm from "./ContactForm";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function MailChimpSubscribe() {
  const { mailU, mailID } = useContext(AppContext);

  const postUrl = `https://app.us9.list-manage.com/subscribe/post?u=${mailU}&id=${mailID}`;

  return <MailchimpSubscribe url={postUrl} render={({ subscribe, status, message }) => <ContactForm status={status} message={message} onValidated={(formData) => subscribe(formData)} />} />;
}
