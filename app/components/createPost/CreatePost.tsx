"use client";
import axios from "axios";
import { format } from "date-fns";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface newPostInterface {
  title: string;
  author: string;
  publicationDate: string;
  content: string;
}

function CreatePost() {
  const [newPost, setNewPost] = useState<newPostInterface>({
    title: "",
    author: "",
    publicationDate: format(new Date(), "yyyy-MM-dd"),
    content: "",
  });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/post", newPost)
      .then((response) => {
        console.log("Post enviado con exito", response.data);
        router.push("/");
      })
      .catch((error) => {
        console.error("Error al crear el post:", error);
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
            onChange={(e) =>
              setNewPost({
                ...newPost,
                title: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={newPost.author}
            onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Publication date : {newPost.publicationDate}
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
            }}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
