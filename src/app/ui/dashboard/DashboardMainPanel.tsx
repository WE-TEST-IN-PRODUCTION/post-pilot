import React from "react";
import MainPanelScheduledPosts from "./mainpanel/MainPanelScheduledPosts";
import MainPanelSettings from "./mainpanel/MainPanelSettings";
import MainPanelPost from "./mainpanel/MainPanelPost";

interface DashboardMainPanelProps {
    selectedTab: string;
    name: string;
    picture: string;
}

const DashboardMainPanel:React.FC<DashboardMainPanelProps> = ({ selectedTab, name, picture }) => {

  const renderSelectedComponent = () => {
    switch (selectedTab) {
      case "tab1":
        return <MainPanelPost name={name} picture={picture} />;
      case "tab2":
        return <MainPanelScheduledPosts />;
      case "tab3":
        return <MainPanelSettings />;
      default:
        return <div>No hay componente seleccionado</div>;
    }
  };

  return (
    <div className="p-8 text-white flex flex-col items-center space-y-4">
      {renderSelectedComponent()}
    </div>
  );
};

export default DashboardMainPanel;
