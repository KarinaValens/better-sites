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
      <nav className="flex">
        <Anchor href={"/"}>
          <Image src={"/media/svg/logo.svg"} alt={"logo"} width={74} height={60} placeholder="empty" priority={true} sizes="10%" />
        </Anchor>
        <NavMenusDesktop />
        <button className="button  primary-button">Contact Us</button>
        <Hamburguer />
      </nav>
      {show ? <NavMenusMobil /> : false}
    </>
  );
}
