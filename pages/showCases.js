import { useContext } from "react";
import { AppContext } from "../components/context/AppContext";
import ShowcasesCards from "../components/showcases/ShowcasesCards";
import ShowcasesCTA from "../components/showcases/ShowcasesCTA";

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
