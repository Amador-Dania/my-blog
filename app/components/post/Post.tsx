"use client";
// Third-party libraries
import { format, parseISO } from "date-fns";
import axios from "axios";

// Next.js navigation hooks
import { useRouter } from "next/navigation";

// React import
import * as React from "react";

// Local components
import Post from "@/app/types/post";

interface PostProps {
  post: Post;
}

const hostName = "http://localhost:3000";
const url = "/api/post";

export default function Post({ post }: PostProps) {
  const router = useRouter();

  function handleDeletePost() {
    try {
      axios.delete(`${hostName}${url}/${post?.id}`);
      localStorage.removeItem(url);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log("Error deleting post", error);
    }
  }

  return (
    <>
      <div className="container mx-auto p-8">
        <article className="max-w-2xl mx-auto p-4 md:p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            {post.title}
          </h1>
          <p className="text-md text-gray-600 mb-1">
            Author: {post.author.name}
          </p>
          <p className="text-md text-gray-500 mb-4">
            Publication date: {format(parseISO(post.createdAt), "yyyy-MM-dd")}
          </p>
          <div className="text-gray-700 text-lg whitespace-pre-line">
            {post.content}
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              className="flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                router.push(`/dashboard/post/edit/${post.id}`);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.207V18.5H3.793l-.353-.354a2 2 0 010-2.828l11.314-11.314a2 2 0 012.828 0z"
                />
              </svg>
              Edit
            </button>
            <button
              className="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                handleDeletePost();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Delete
            </button>
          </div>
        </article>
      </div>
    </>
  );
}
