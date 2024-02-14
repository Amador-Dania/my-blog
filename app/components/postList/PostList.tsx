"use client";
// Third-party libraries
import { format, parseISO } from "date-fns";

// Next.js hooks and utilities
import Link from "next/link";

//Local components
import useGetPosts from "@/app/hooks/useGetPosts";
import Loading from "../loading/Loading";

//react imports
import { ReactNode } from "react";
import Post from "@/app/types/post";

interface PostListProps {
  searchText?: string;
  filterOption?: string;
}

function PostList({ searchText, filterOption }: PostListProps) {
  const { posts, isLoading } = useGetPosts();

  const filteredPosts = (() => {
    if (!searchText) return posts;

    return posts.filter((post) => {
      switch (filterOption) {
        case "title":
          return post.title.toLowerCase().includes(searchText.toLowerCase());
        case "author":
          return post.author.name
            .toLowerCase()
            .includes(searchText.toLowerCase());
        case "content":
          return post.content.toLowerCase().includes(searchText.toLowerCase());
        default:
          return true;
      }
    });
  })();

  function RenderComponent() {
    if (isLoading) {
      return <Loading />;
    } else if (posts && posts.length > 0) {
      return (
        <div>
          {" "}
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg mb-6 shadow-lg"
            >
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600">
                  Author: {post.author.name}
                </p>
                <p className="text-sm text-gray-500">
                  {format(parseISO(post.createdAt), "yyyy-MM-dd")}
                </p>
                <p className="text-gray-700 mt-2">
                  {post.content.length > 70
                    ? `${post.content.substring(0, 70)}`
                    : post.content}
                  <Link href={`dashboard/post/${encodeURIComponent(post.id)}`}>
                    ...
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return <h1>No Posts + Create one using the create button.</h1>;
    }
  }

  return <RenderComponent />;
}

export default PostList;
