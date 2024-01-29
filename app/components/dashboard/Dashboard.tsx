import React, { ReactNode } from "react";

type DashboardProps = {
  children: ReactNode;
};

function Dashboard({ children }: DashboardProps) {
  return <div className="mt-[60px] p-4 min-h-screen">{children}</div>;
}

export default Dashboard;
