"use client";
//  Next.js hooks and utilities
import { useRouter } from "next/navigation";

// React import
import React, { Dispatch, SetStateAction } from "react";

//Local imports
import useNetworkStatus from "@/app/hooks/useNetworkStatus";

interface NavbarProps {
  searchText?: string;
  setSearchText?: Dispatch<SetStateAction<string>>;
  filterOption?: string;
  setFilterOption?: Dispatch<SetStateAction<string>>;
}

function Navbar({
  searchText,
  setSearchText,
  filterOption,
  setFilterOption,
}: NavbarProps) {
  const router = useRouter();
  const { isOnline } = useNetworkStatus();
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-10">
      <div className="p-2 md:p-4 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-700">
            M y B L O G
          </h1>
          <h1 className="text-xs md:text-sm font-bold text-gray-700">
            Where the inspiration begins...
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0 space-y-2 md:space-y-0 space-x-0 md:space-x-4">
          <input
            type="text"
            id="Search"
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText && setSearchText(e.target.value)}
          />
          <select
            className="p-2 border border-gray-300 rounded-md"
            id="select-option"
            value={filterOption}
            onChange={(e) => setFilterOption && setFilterOption(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="content">Content</option>
            <option value="author">Author</option>
          </select>
          <div>
            <button
              disabled={!isOnline}
              className={`${
                isOnline ? "bg-green-500 hover:bg-green-700" : "bg-gray-500"
              } text-white font-bold py-2 px-4 rounded-md`}
              type="button"
              onClick={() =>
                router.push("/dashboard/create", { scroll: false })
              }
            >
              Create a new post
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
