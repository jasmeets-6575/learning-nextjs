import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const Navbar = () => {
  return (
    <div>
      <Link href="/">Lamamia</Link>
      <div>
        {links.map((link) => {
          const { id, title, url } = link;
          return (
            <>
              <div key={id}>
                <Link href={url} className={styles.link}>
                  {title}
                </Link>
              </div>
            </>
          );
        })}
        <button>Logout</button>
      </div>
    </div>
  );
};
export default Navbar;
