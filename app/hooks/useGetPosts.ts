// React import
import { useEffect, useState } from "react";

// Third-party libraries
import axios from "axios";

// Local types or models
import Post from "../types/post";

const hostName = "http://localhost:3000";
const url = "/api/post";

function useGetPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedPost = localStorage.getItem(url);

    if (storedPost) {
      setPosts(JSON.parse(storedPost));
      setIsLoading(false);
    } else {
      axios
        .get(hostName + url)
        .then((res) => {
          const data = res.data.res;
          if (Array.isArray(data)) {
            setPosts(data);
            setIsLoading(false);
          } else {
            setIsLoading(true);
            console.log('Error: "posts" is not an Array');
          }
          localStorage.setItem("posts", JSON.stringify(data));
        })
        .catch((error) => {
          console.log("Error", error);
          setIsLoading(true);
        });
    }
  }, []);

  return { posts, isLoading };
}

export default useGetPosts;
