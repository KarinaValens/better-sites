import Footer from "./footer/Footer";
import Nav from "./navigation/Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
