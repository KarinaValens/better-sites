import { useContext } from "react";
import ShowcasesCTA from "../components/showcases/ShowcasesCTA";
import ShowcasesCards from "../components/showcases/ShowcasesCards";
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
