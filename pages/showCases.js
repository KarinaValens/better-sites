import { useContext } from "react";
import ShowcasesCards from "../components/showcases/ShowcasesCards";
import ShowcasesCTA from "../components/showcases/ShowcasesCTA";
import { AppContext } from "../components/context/AppContext";

export default function Showcases() {
  const { show } = useContext(AppContext);

  return (
    <>
      {!show && (
        <main>
          <ShowcasesCTA />
          <ShowcasesCards />
        </main>
      )}
    </>
  );
}
