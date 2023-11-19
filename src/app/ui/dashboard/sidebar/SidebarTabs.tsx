"use client"

import React from "react";
import { sidebarTabData } from "./utils/sidebarTabData";
import SidebarTab from "./SidebarTab";

export interface SidebarTabProps {
    onTabClick: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarTabs: React.FC<SidebarTabProps> = ({ onTabClick }) => {

  return (
    <div className="px-4 py-6">
      <ul className="mt-6 space-y-1">
        {sidebarTabData.map((tab: any, key: number) => {
          return <SidebarTab classnames={tab.classnames} tabText={tab.tabText} key={key} onTabClick={onTabClick} id={tab.id} />;
        })}
      </ul>
    </div>
  );
};

export default SidebarTabs;
