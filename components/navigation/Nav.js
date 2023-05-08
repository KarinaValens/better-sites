import Anchor from "./Anchor";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import Image from "next/image";
import Hamburguer from "./Hamburguer";

export default function Nav() {
  const { show } = useContext(AppContext);

  return (
    <nav>
      <Anchor href={"/"}>
        <Image src={"/media/logo.svg"} alt={"logo"} width={74} height={60} />
      </Anchor>
      <Hamburguer />
      
    </nav>
  );
}
