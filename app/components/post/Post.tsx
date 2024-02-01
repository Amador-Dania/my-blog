"use client";
// Third-party libraries
import { format, parseISO } from "date-fns";

// Next.js navigation hooks
import { useRouter } from "next/navigation";

// React import
import * as React from "react";

// Local components
import Post from "@/app/types/post";

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  return (
    <>
      <div className="container mx-auto p-8">
        <article className="max-w-2xl mx-auto p-4 md:p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            {post.title}
          </h1>
          <p className="text-md text-gray-600 mb-1">Author: {post.author}</p>
          <p className="text-md text-gray-500 mb-4">
            Publication date:{" "}
            {format(parseISO(post.publication_date), "yyyy-MM-dd")}
          </p>
          <div className="text-gray-700 text-lg whitespace-pre-line">
            {post.content}
          </div>
          <button
            className="text-black font-bold py-2 px-4 rounded my-4 flex items-center"
            onClick={() => router.push("/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Go back
          </button>
        </article>
      </div>
    </>
  );
}
