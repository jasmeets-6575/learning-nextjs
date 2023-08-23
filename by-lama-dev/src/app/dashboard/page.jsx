"use client";
import styles from "./page.module.css";
import useSWR from "swr";

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/posts",
    fetcher
  );
  return <div className={styles.container}> Dashboard</div>;
};

export default Dashboard;

// const [data, setData] = useState([]);
// const [error, setError] = useState(false);
// const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//   const getData = async () => {
//     setIsLoading(true);
//     const res = await fetch("http://localhost:3000/api/posts", {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       setError(true);
//     }
//     const data = await res.json();
//     setData(data);
//     setIsLoading(false);
//   };
//   getData();
// }, []);
