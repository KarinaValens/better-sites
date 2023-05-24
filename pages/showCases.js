import { useContext } from "react";
import ShowCasesCTA from "../components/showcases/ShowCasesCTA";
import { AppContext } from "../components/context/AppContext";

export default function Showcases() {
  const { show } = useContext(AppContext);

  return (
    <>
      {!show && (
        <main>
          <ShowCasesCTA />
        </main>
      )}
    </>
  );
}
