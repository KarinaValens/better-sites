import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Burguer() {
  const { show, setShow } = useContext(AppContext);

  return (
    <button onClick={() => setShow(!show)} className={`${show ? "open" : ""} flex-columns burger-button`} /* id="burger-button" */>
      <span className="burguer-span"></span>
      <span className="burguer-span middle-top"></span>
      <span className="burguer-span middle-bottom"></span>
      <span className="burguer-span"></span>
    </button>
  );
}
