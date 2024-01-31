// React import
import { useEffect, useState } from "react";

// Third-party libraries
import axios from "axios";

// Local types or models
import Post from "../types/post";

function useGetPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/post")
      .then((res) => {
        const data = res.data.res;
        if (Array.isArray(data)) {
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
