import Anchor from "./Anchor";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import Image from "next/image";
import Hamburguer from "./Hamburguer";
import NavMenusMobil from "./NavMenusMobil";
import NavMenusDesktop from "./NavMenusDesktop";

export default function Nav() {
  const { show } = useContext(AppContext);

  return (
    <>
      <nav>
        <Anchor href={"/"}>
          <Image src={"/media/logo.svg"} alt={"logo"} width={74} height={60} placeholder="empty" priority={true} sizes="10%" />
        </Anchor>
        <NavMenusDesktop />
        <button className="contact-button primary-button">Contact Us</button>
        <Hamburguer />
      </nav>
      {show ? <NavMenusMobil /> : false}
    </>
  );
}
