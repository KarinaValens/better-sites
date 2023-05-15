import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Anchor({ children, href, className }) {
  const router = useRouter();
  //Active State 1. useState to keep track of whether the anchor is currently active
  const [isActive, setIsActive] = useState(false);
  //Active State 2. useEffect to update the isActive state whenever the router.pathname or href props change.
  useEffect(() => {
    setIsActive(router.pathname === href);
  }, [router.pathname, href]);

  function handleClick(e) {
    e.preventDefault();
    router.push(href);
  }
  //Active State 3. adding the active class to the className prop when isActive is true, so that the anchor has the desired styling when it's active.
  return (
    <div>
      <a className={`${className}${isActive ? " active" : ""}`} href={href} onClick={handleClick}>
        {children}
      </a>
    </div>
  );
}
