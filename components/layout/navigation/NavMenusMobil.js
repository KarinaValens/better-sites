import Anchor from "./Anchor";

export default function NavMenusMobil() {
  return (
    <div className="menus-mobil flex-columns">
      <Anchor href={"/services"}>Services</Anchor>
      <Anchor href={"/porccess"}>Our Process</Anchor>
      <Anchor href={"/contact"}>Contact</Anchor>
      <Anchor href={"/showcases"}>Showcases</Anchor>
    </div>
  );
}
