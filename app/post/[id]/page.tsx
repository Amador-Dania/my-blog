"use client";
// Third-party libraries
import { format, parseISO } from "date-fns";

// Next.js navigation hooks
import { useParams, useRouter } from "next/navigation";

// React import
import * as React from "react";

// Local components
import Dashboard from "@/app/components/dashboard/Dashboard";
import useGetPosts from "@/app/hooks/useGetPosts";

export default function Post() {
  const { id } = useParams();
  const router = useRouter();
  const { posts, isLoading } = useGetPosts();

  const post = posts.find((p) => p.id === Number(id));
  if (isLoading) return <h1>...loading</h1>;

  return (
    <>
      <Dashboard>
        <div className="container mx-auto p-8">
          <article className="max-w-2xl mx-auto p-4 md:p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              {post?.title}
            </h1>
            <p className="text-md text-gray-600 mb-1">
              Publish by : {post?.author}
            </p>
            <p className="text-md text-gray-500 mb-4">
              Publication date:{" "}
              {post && post.publication_date
                ? format(parseISO(post.publication_date), "yyyy-MM-dd")
                : "N/A"}
            </p>
            <div className="text-gray-700 text-lg whitespace-pre-line">
              {post?.content}
            </div>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded my-4"
              onClick={() => router.push("/")}
            >
              Go back
            </button>
          </article>
        </div>
      </Dashboard>
    </>
  );
}
