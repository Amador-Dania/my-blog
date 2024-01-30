"use client";

function CreatePost() {
  const handleSubmit = () => {
    // e.preventDefault();
  };

  // const router = useRouter();

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
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
          />
        </div>

        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Publication date
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
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
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          // onClick={() => router.push("/")}
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
