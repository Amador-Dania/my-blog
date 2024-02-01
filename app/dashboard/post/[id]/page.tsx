"use client";

// Next.js navigation hooks
import { useParams } from "next/navigation";

// React import
import * as React from "react";

// Local components
import Dashboard from "@/app/components/dashboard/Dashboard";
import useGetPosts from "@/app/hooks/useGetPosts";
import Post from "@/app/components/post/Post";
import Loading from "@/app/components/loading/Loading";

export default function OnePost() {
  const { id } = useParams();
  const { posts, isLoading } = useGetPosts();

  const post = posts.find((p) => p.id === Number(id));
  if (isLoading) return <Loading />;

  return (
    <>
      <Dashboard>
        {post ? <Post post={post} /> : <p>Post not found.</p>}
      </Dashboard>
    </>
  );
}
