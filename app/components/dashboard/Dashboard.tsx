// React import
import React, { Dispatch, Fragment, ReactNode, SetStateAction } from "react";
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
    <div data-testid="dashboard">
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
      />
      <div className="mt-[200px] sm:mt-[100px] p-4 min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default Dashboard;
