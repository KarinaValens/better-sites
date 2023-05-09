import Head from "next/head";
import HeroSect from "../components/homepage/HeroSect";
import CTA from "../components/homepage/CTA";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <HeroSect />
        <CTA />
      </main>
    </div>
  );
}
