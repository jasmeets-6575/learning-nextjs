import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Design for your digital products.
        </h1>
        <p className={styles.description}>
          Turning your idea into Reality. We bring together the terms from the
          global tech industry
        </p>
      </div>
      <div className={styles.item}>
        <Image
          width={500}
          height={500}
          src={Hero}
          alt="Main Image"
          className={styles.img}
        />
      </div>
    </div>
  );
}
