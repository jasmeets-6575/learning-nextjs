import styles from "../../styles/BlogPost.module.css";
import { useState } from "react";
import * as fs from "fs";

let url = "http://localhost:3000/api/getBlogs?slug=";
const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  function createMarkup() {
    return { __html: c };
  }

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>{blog && blog.title}</h1>

          {blog && (
            <div
              dangerouslySetInnerHTML={createMarkup(blog.content)}
              className={styles.content}
            ></div>
          )}
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
  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}

export default Slug;
