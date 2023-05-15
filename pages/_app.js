import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import AppContextProvider from "../components/context/AppContext";

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}
