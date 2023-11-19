import React from "react";
import DashboardPostForm from "./DashboardPostForm";
import MainPanelScheduledPosts from "./mainpanel/MainPanelScheduledPosts";
import MainPanelSettings from "./mainpanel/MainPanelSettings";

interface DashboardMainPanelProps {
    selectedTab: string;
}

const DashboardMainPanel:React.FC<DashboardMainPanelProps> = ({ selectedTab }) => {

  const renderSelectedComponent = () => {
    switch (selectedTab) {
      case "tab1":
        return <DashboardPostForm />;
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
