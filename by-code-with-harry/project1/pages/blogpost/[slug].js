import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import { useEffect, useState } from "react";

let url = "http://localhost:3000/api/getBlogs?slug=";
const slug = () => {
  const [blog, setBlog] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`${url}${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((data) => {
        setBlog(data);
      });
  }, [router.isReady]);
  return (
    <>
      <div className="container">
        <main className={styles.main}>
          <h1 className={styles.title}>{blog && blog.title}</h1>
          <p className={styles.content}>{blog && blog.content}</p>
        </main>
      </div>
    </>
  );
};
export default slug;
