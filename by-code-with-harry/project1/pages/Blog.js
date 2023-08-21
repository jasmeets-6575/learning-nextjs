import { useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";

let url = "http://localhost:3000/api/blogs";

const blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blog, index) => {
          return (
            <div key={index}>
              <Link href={`/blogpost/${blog.slug}`}>
                <h3 className={styles.blogItemh3}>{blog.title}</h3>
              </Link>
              <p className={styles.blogItemP}>
                {blog.content.substr(0, 200)}...
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myFile;
  let allBlogs = [];
  data.forEach((item) => {
    myFile = fs.readFileSync("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  });
  return {
    props: { allBlogs },
  };
}
export default blog;
