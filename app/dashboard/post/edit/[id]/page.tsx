"use client";
import CreatePost from "@/app/components/createPost/CreatePost";
import Dashboard from "@/app/components/dashboard/Dashboard";
import useGetPosts from "@/app/hooks/useGetPosts";
import { useParams } from "next/navigation";

function PostEdit() {
  const { id } = useParams();
  const { posts } = useGetPosts();
  const post = posts.find((p) => p.id === Number(id));

  return (
    <>
      <Dashboard>
        {post ? <CreatePost existingPost={post} /> : <p>Post not found</p>}
      </Dashboard>
    </>
  );
}

export default PostEdit;
