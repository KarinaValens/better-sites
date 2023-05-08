import Anchor from "./Anchor";

export default function NavMenusDesktop() {
  return (
    <div className="navigation-desktop">
      <Anchor href={"/services"}>Services</Anchor>
      <Anchor href={"/porccess"}>Our Process</Anchor>
      <Anchor href={"/contact"}>Contact</Anchor>
      <Anchor href={"/showcases"}>Showcases</Anchor>
    </div>
  );
}
