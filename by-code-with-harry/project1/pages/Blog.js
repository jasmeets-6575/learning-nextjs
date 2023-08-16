import { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

let url = "http://localhost:3000/api/blogs";

const blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((a) => {
        return a.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

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
export default blog;
