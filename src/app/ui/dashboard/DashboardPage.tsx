"use client"

import * as React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardMainPanel from "./DashboardMainPanel";

export interface UserProfileInfoType {
  name: string,
  picture: string
}

const DashboardPage: React.FC<UserProfileInfoType> = ({ name, picture }) => {

  const [tab, setTab] = React.useState<string>("tab1");

  return (
    <main>
      <DashboardSidebar  name={name} picture={picture} onTabClick={setTab} />
      <DashboardMainPanel selectedTab={tab} name={name} picture={picture} />
    </main>
  );
};

export default DashboardPage;
