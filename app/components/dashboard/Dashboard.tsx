// React import
import React, { Dispatch, ReactNode, SetStateAction } from "react";
// Local components
import Navbar from "../navbar/Navbar";

interface DashboardProps {
  children: ReactNode;
  searchText?: string;
  setSearchText?: Dispatch<SetStateAction<string>>;
  filterOption?: string;
  setFilterOption?: Dispatch<SetStateAction<string>>;
}

function Dashboard({
  children,
  searchText,
  setSearchText,
  filterOption,
  setFilterOption,
}: DashboardProps) {
  return (
    <>
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
      />
      <div className="mt-[60px] p-4 min-h-screen">{children}</div>
    </>
  );
}

export default Dashboard;
