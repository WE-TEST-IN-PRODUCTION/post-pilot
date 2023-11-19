import * as React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardPostForm from "./DashboardPostForm";

export interface DashboardPageProps {
  name: string;
  picture: string;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ name, picture }) => {
  return (
    <main>
      <DashboardHeader />
      <DashboardPostForm />
    </main>
  );
};

export default DashboardPage;
