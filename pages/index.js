import Head from "next/head";
import HeroSect from "../components/homepage/HeroSect";
import CTA from "../components/homepage/CTA";
import IconsSection from "../components/homepage/IconsSection";
import HomeCards from "../components/homepage/HomeCards";
import SecondCTA from "../components/homepage/SecondCTA";
import { useContext } from "react";
import { AppContext } from "../components/context/AppContext";

export default function Home() {
  const { show } = useContext(AppContext);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {/* the logical AND operator (&&) conditionally renders elements and hide the main when "show" is true. */}
      {!show && (
        <main>
          <HeroSect />
          <CTA />
          <IconsSection />
          <HomeCards />
          <SecondCTA />
        </main>
      )}
    </div>
  );
}
