"use client";
import Dashboard from "@/app/components/dashboard/Dashboard";
import useGetPosts from "@/app/hooks/useGetPosts";
import { useParams } from "next/navigation";
import PostManager from "@/app/components/postManager/PostManager";

function PostEdit() {
  const { id } = useParams();
  const { posts } = useGetPosts();
  const post = posts.find((p) => p.id === Number(id));

  return (
    <>
      <Dashboard>
        {post ? <PostManager existingPost={post} /> : <p>Post not found</p>}
      </Dashboard>
    </>
  );
}

export default PostEdit;
