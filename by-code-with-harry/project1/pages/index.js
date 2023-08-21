import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
          .myImg {
            border-radius: 10px;
          }
        `}
      </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hunting Coder</h1>

        <div className={styles.imageWrap}>
          {/* <Image
            className={styles.myImg}
            src="/project1/public/coder.jfif"
            alt="coder image"
            width={300}
            height={200}
          /> */}
          <img
            className={styles.myImg}
            src="/project1/public/coder.jfif"
            alt="coder image"
            width={300}
            height={200}
          />
        </div>

        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>

        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to Learn JavaScript in 2022</h3>
            <p>Js is the lang used to design the logic for web</p>
          </div>
          <div className="blogItem">
            <h3>How to Learn JavaScript in 2022</h3>
            <p>Js is the lang used to design the logic for web</p>
          </div>
          <div className="blogItem">
            <h3>How to Learn JavaScript in 2022</h3>
            <p>Js is the lang used to design the logic for web</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
