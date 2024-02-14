"use client";
//Third-Party libraries
import axios from "axios";

// Next.js navigation hooks
import { useParams, useRouter } from "next/navigation";

// React import
import * as React from "react";

// Local components
import Dashboard from "@/app/components/dashboard/Dashboard";
import useGetPosts from "@/app/hooks/useGetPosts";
import Post from "@/app/components/post/Post";
import Loading from "@/app/components/loading/Loading";
import { ro } from "date-fns/locale";

export default function OnePost() {
  const { id } = useParams();
  const router = useRouter();
  const { posts, isLoading } = useGetPosts();

  const post = posts.find((p) => p.id === Number(id));
  if (isLoading) return <Loading />;

  const hostName = "http://localhost:3000";
  const url = "/api/post";

  function deletePost() {
    axios.delete(`${hostName}${url}/${post?.id}`);
    router.push("/");
    router.refresh();
  }

  return (
    <>
      <Dashboard>
        {post ? (
          <Post post={post} deletePost={deletePost} />
        ) : (
          <p>Post not found.</p>
        )}
      </Dashboard>
    </>
  );
}
