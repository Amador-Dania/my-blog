// Third-party libraries
import axios from "axios";
import { format } from "date-fns";

//  Next.js hooks and utilities
import { useRouter } from "next/navigation";

// React import
import { useState } from "react";

import Post from "@/app/types/post";
interface newPostInterface {
  name: string;
  title: string;
  content: string;
  createdAt: string;
}

const hostName = "http://localhost:3000";
const url = "/api/post";

function UsePostManager(existingPost: Post | undefined) {
  const [newPost, setNewPost] = useState<newPostInterface>({
    name: existingPost?.author.name || "",
    title: existingPost?.title || "",
    content: existingPost?.content || "",
    createdAt: format(existingPost?.createdAt || new Date(), "yyyy-MM-dd"),
  });
  const [errorMessage, setErrorMessage] = useState("");

  const isEditing = !!existingPost;

  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !newPost.name ||
      !newPost.title ||
      !newPost.content ||
      !newPost.createdAt
    ) {
      setErrorMessage("All fields must be filled out.");
      return;
    }

    if (isEditing) {
      try {
        axios.patch(`${hostName}${url}/${existingPost.id}`, {
          title: newPost.title,
          content: newPost.content,
          name: newPost.name,
        });

        localStorage.removeItem(url);
        router.push("/");
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      axios
        .post(`${hostName}${url}`, newPost, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          localStorage.removeItem(url);
          router.push("/");
        })
        .catch((error) => {
          setErrorMessage(error.response.data.message || "An error occurred");
          console.error("Error creating the post", error.response);
        });
    }
  };

  return {
    handleSubmit,
    newPost,
    setNewPost,
    errorMessage,
    setErrorMessage,
    isEditing,
  };
}

export default UsePostManager;
