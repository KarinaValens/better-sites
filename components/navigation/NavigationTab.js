import { useContext } from "react";
import AppContext from "../context/AppContext";
import Anchor from "./Anchor";

import React from "react";
import Image from "next/image";

export default function Nav() {
  //const { show } = useContext(AppContext);
  return (
    <nav>
      <Anchor href={"/"}>
        <Image src={"/media/logo.svg"} alt={"logo"} width={74} height={60} />
      </Anchor>
    </nav>
  );
}
