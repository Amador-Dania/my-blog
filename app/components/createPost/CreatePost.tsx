"use client";
import { Post } from "@prisma/client";
// Third-party libraries
import axios from "axios";
import { format } from "date-fns";

//  Next.js hooks and utilities
import { useRouter } from "next/navigation";

// React import
import { useState } from "react";

interface newPostInterface {
  name: string;
  title: string;
  content: string;
  createdAt: string;
}

function CreatePost() {
  const [newPost, setNewPost] = useState<newPostInterface>({
    name: "",
    title: "",
    content: "",
    createdAt: format(new Date(), "yyyy-MM-dd"),
  });
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const hostName = "http://localhost:3000";
  const url = "/api/post";
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
    axios
      .post(`${hostName}${url}`, newPost, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        localStorage.removeItem(url);
        router.push("/");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message || "An error occurred");
        console.error("Error creating the post", error.response);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={newPost.title}
            onChange={(e) => {
              setNewPost({
                ...newPost,
                title: e.target.value,
              });
              setErrorMessage("");
            }}
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Author
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={newPost.name}
            onChange={(e) => {
              setNewPost({ ...newPost, name: e.target.value });
              setErrorMessage("");
            }}
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Publication date : {newPost.createdAt}
          </label>
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            id="content"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows={4}
            value={newPost.content}
            onChange={(e) => {
              setNewPost({
                ...newPost,
                content: e.target.value,
              });
              setErrorMessage("");
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Post
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default CreatePost;
