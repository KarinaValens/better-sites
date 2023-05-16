import Anchor from "./Anchor";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import Image from "next/image";
import Hamburguer from "./Hamburguer";
import NavMenusMobil from "./NavMenusMobil";
import NavMenusDesktop from "./NavMenusDesktop";
import Link from "next/link";

export default function Nav() {
  const { show } = useContext(AppContext);

  return (
    <>
      <nav className="flex">
        <Anchor href={"/"}>
          <Image src={"/media/svg/logo.svg"} alt={"logo"} width={74} height={60} placeholder="empty" priority={true} sizes="10%" />
        </Anchor>
        <Hamburguer />
        <NavMenusDesktop />
        <Link href={"/contact"} className="button center primary-button">
          Contact Us
        </Link>
      </nav>
      {show ? <NavMenusMobil /> : false}
    </>
  );
}
