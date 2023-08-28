import Footer from "@/components/Header";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About Jasmeet</title>
        <meta name="description" content="Free tutorials on web development" />
      </Head>
      <h1 className="content">About</h1>
    </>
  );
}

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
export default About;
