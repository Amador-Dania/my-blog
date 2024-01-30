import React, { ReactNode } from "react";
import Navbar from "../navbar/Navbar";

type DashboardProps = {
  children: ReactNode;
};

function Dashboard({ children }: DashboardProps) {
  return (
    <>
      <Navbar />
      <div className="mt-[60px] p-4 min-h-screen">{children}</div>
    </>
  );
}

export default Dashboard;
