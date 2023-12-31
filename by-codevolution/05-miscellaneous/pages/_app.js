import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import "../styles/layout.css";
function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <Component.getLayout>
        <Component {...pageProps} />;
      </Component.getLayout>
    );
  }
  return (
    <>
      <Head>
        <title>Codevolution</title>
        <meta name="description" content="Awesome YouTube channel" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
