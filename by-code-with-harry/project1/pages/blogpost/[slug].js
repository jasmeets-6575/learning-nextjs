import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div className="container">
        <main className={styles.main}>
          <div>Title of the page is {slug}</div>
          <hr />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            blanditiis, voluptate animi reprehenderit velit libero sequi
            necessitatibus? Officia, fugit ea!
          </p>
        </main>
      </div>
    </>
  );
};
export default slug;
