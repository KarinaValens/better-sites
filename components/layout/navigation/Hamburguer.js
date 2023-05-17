import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useRouter } from "next/router";

export default function Burguer() {
  const router = useRouter();
  const { show, setShow } = useContext(AppContext);

  /* Close the menu-mobil after navigated  the useEffect hook to listen for 
  the routeChangeStart 
  When the event occurs, the show state is update to false to hide the menu*/
  useEffect(() => {
    const handleRouteChange = () => {
      setShow(false); // Hide the menu on route change
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    /* routeChangeComplete is an event listener from next.js. 
It can listen for route changes and perform certain actions when the route change is complete */
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, setShow]);

  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <button onClick={() => setShow(!show)} className={`${show ? "open" : ""} flex-columns burger-button`} /* id="burger-button" */>
      <span className="burguer-span"></span>
      <span className="burguer-span middle-top"></span>
      <span className="burguer-span middle-bottom"></span>
      <span className="burguer-span"></span>
    </button>
  );
}
