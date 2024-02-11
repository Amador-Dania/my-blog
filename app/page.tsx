"use client";
//React import
import { useState } from "react";

//Local components
import PostList from "./components/postList/PostList";
import Dashboard from "./components/dashboard/Dashboard";
import OfflineAlert from "./components/offlineAlert/OfflineAlert";

export default function Page() {
  const [searchText, setSearchText] = useState("");
  const [filterOption, setFilterOption] = useState("title");

  return (
    <main>
      <h1 id="home">home</h1>
      <Dashboard
        searchText={searchText}
        setSearchText={setSearchText}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
      >
        <OfflineAlert />
        <PostList searchText={searchText} filterOption={filterOption} />
      </Dashboard>
    </main>
  );
}
