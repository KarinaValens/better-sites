import Image from "next/image";
import React from "react";

export default function LongLogo() {
  return (
    <div className="logo-concept flex-columns">
      <div className="long-logo flex">
        <Image src={"/media/logo.svg"} alt={"logo"} width={40} height={40} placeholder="empty" priority={true} sizes="10%" />
        <h3>etter Sites</h3>
      </div>
      <p>Focus on your business, we will handle your website</p>
    </div>
  );
}
