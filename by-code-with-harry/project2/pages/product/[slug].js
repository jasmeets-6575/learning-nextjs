import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  return <h1>The slug is: {slug}</h1>;
};
export default Post;
