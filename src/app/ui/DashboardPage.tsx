import * as React from "react";
import DashboardHeader from "./dashboard/DashboardHeader";

export interface DashboardPageProps {
  name: string;
  picture: string;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ name, picture }) => {
  return (
    <main>
      <DashboardHeader />
    </main>
  );
};

export default DashboardPage;
