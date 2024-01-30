"use client";
import useGetPosts from "@/app/hooks/useGetPosts";

function PostList() {
  const { posts, isLoading } = useGetPosts();
  if (isLoading) return <h1>...loading</h1>;

  return (
    <>
      {posts?.map((post) => {
        <div className="grid grid-cols-4 gap-4 " key={post.id}>
          <div className="bg-white p-4 shadow rounded-lg mb-4">
            <h2 className="text-lg font-bold">{post.title} </h2>
            <p className="text-sm text-gray-600">By {post.author.author}</p>
            <p className="text-sm text-gray-500">
              date: {post.publicationDate}
            </p>
            <p className="text-gray-800">{post.content}</p>
            <button className="text-gray-600 bg-gray-200 hover:bg-gray-300 p-2 rounded transition duration-300">
              read more
            </button>
          </div>
        </div>;
      })}
    </>
  );
}

export default PostList;
