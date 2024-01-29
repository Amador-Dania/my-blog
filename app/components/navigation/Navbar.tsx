"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Navbar() {
  const [searchText, setSearchText] = useState("");
  const [filterOption, setFilterOption] = useState("title");

  const router = useRouter();
  const handleSearch = () => {
    console.log(`Buscar ${searchText} en ${filterOption}`);
    // Implementa la lógica de búsqueda
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white z-10">
        <div className="p-4 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-700">M y B L O G</h1>
            <h1 className="text-sm font-bold text-gray-700">
              Where the inspiration begins...
            </h1>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Buscar..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <select
              className="p-2 border border-gray-300 rounded-md"
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <option value="title">Title</option>
              <option value="content">Content</option>
              <option value="author">Author</option>
            </select>
            <button
              className="ml-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              className="ml-2 bg-green-500 text-white p-2 rounded-md hover:bg-green-700"
              type="button"
              onClick={() => router.push("/dashboard/create")}
            >
              Create a new post
            </button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Navbar;
