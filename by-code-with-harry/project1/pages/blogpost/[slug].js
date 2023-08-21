import styles from "../../styles/BlogPost.module.css";
import { useState } from "react";
import * as fs from "fs";

let url = "http://localhost:3000/api/getBlogs?slug=";
const Slug = (props) => {
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
    paths: [
      { params: { slug: "howToLearnFlask" } },
      { params: { slug: "howToLearnJavascript" } },
      { params: { slug: "howToLearnNextjs" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  console.log(`The SLUG IS _ _ ---- ${slug}`);
  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}

export default Slug;
