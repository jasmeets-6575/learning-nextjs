import styles from "../../styles/BlogPost.module.css";
import { useState } from "react";

let url = "http://localhost:3000/api/getBlogs?slug=";
const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

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

export async function getStaticPaths() {
  return {
    paths: [{ params: {} }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.query;
  let data = await fetch(`${url}${slug}`);
  let myBlog = await data.json();
  return {
    props: { myBlog },
  };
}

export default slug;
