"use client";
//React import
import { useState } from "react";

//Local components
import PostList from "./components/postList/PostList";
import Dashboard from "./components/dashboard/Dashboard";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [filterOption, setFilterOption] = useState("title");

  return (
    <main>
      <Dashboard
        searchText={searchText}
        setSearchText={setSearchText}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
      >
        <PostList searchText={searchText} filterOption={filterOption} />
      </Dashboard>
    </main>
  );
}
