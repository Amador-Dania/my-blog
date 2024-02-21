"use client";

// Local imports
import Post from "@/app/types/post";
import usePostManager from "./usePostManager";

interface PostManagerProps {
  existingPost?: Post;
}

function PostManager({ existingPost }: PostManagerProps) {
  const {
    handleSubmit,
    newPost,
    setNewPost,
    errorMessage,
    setErrorMessage,
    isEditing,
  } = usePostManager(existingPost);

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4" id="post-manager">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={newPost.title}
            onChange={(e) => {
              setNewPost({
                ...newPost,
                title: e.target.value,
              });
              setErrorMessage("");
            }}
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Author
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={newPost.name}
            onChange={(e) => {
              setNewPost({ ...newPost, name: e.target.value });
              setErrorMessage("");
            }}
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Publication date : {newPost.createdAt}
          </label>
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            id="content"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows={4}
            value={newPost.content}
            onChange={(e) => {
              setNewPost({
                ...newPost,
                content: e.target.value,
              });
              setErrorMessage("");
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isEditing ? "Save Changes" : "Create Post"}
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default PostManager;
