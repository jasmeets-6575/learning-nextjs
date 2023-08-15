import styles from "../styles/Blog.module.css";
import Link from "next/link";

const blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <Link href={"/blogpost/learn-javascript"}>
            <h3 className={styles.blogItemh3}>
              How to Learn JavaScript in 2022
            </h3>
          </Link>
          <p>Js is the lang used to design the logic for web</p>
        </div>
        <div>
          <h3 className={styles.blogItemh3}>How to Learn JavaScript in 2022</h3>
          <p>Js is the lang used to design the logic for web</p>
        </div>
        <div>
          <h3 className={styles.blogItemh3}>How to Learn JavaScript in 2022</h3>
          <p>Js is the lang used to design the logic for web</p>
        </div>
      </main>
    </div>
  );
};
export default blog;
