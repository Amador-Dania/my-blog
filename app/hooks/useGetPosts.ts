import { useEffect, useState } from "react";
import Post from "../types/post";
import axios from "axios";

function useGetPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/post")
      .then((res) => {
        const data = res.data.res;
        if (Array.isArray(data)) {
          console.log(data);
          setPosts(data);
          setIsLoading(false);
        } else {
          setIsLoading(true);
          console.log('Error: "posts" is not an Array');
        }
      })
      .catch((error) => {
        console.log("Error", error);
        setIsLoading(true);
      });
  }, []);

  return { posts, setPosts, isLoading };
}

export default useGetPosts;
