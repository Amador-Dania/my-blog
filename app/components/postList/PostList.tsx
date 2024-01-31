"use client";
import useGetPosts from "@/app/hooks/useGetPosts";
import { format, parseISO } from "date-fns";
import Link from "next/link";

function PostList() {
  const { posts, isLoading } = useGetPosts();
  if (isLoading) return <h1>...loading</h1>;

  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg mb-6 shadow-lg"
        >
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {post.title}
            </h2>
            <p className="text-sm text-gray-600">Author: {post.author}</p>
            <p className="text-sm text-gray-500">
              Publish on:{" "}
              {format(parseISO(post.publication_date), "yyyy-MM-dd")}
            </p>
            <p className=" text-gray-700 mt-2">
              {post.content.length > 70
                ? `${post.content.substring(0, 70)}`
                : post.content}
              <Link href={`/post/${encodeURIComponent(post.id)}`}>...</Link>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostList;
