import SidebarTabs from "./sidebar/SidebarTabs";
import SidebarUser from "./sidebar/SidebarUser";
import { UserProfileInfoType } from "./DashboardPage";

export interface SidebarProps{
  name: string;
  picture: string;
  onTabClick: (React.Dispatch<React.SetStateAction<string>>);
}

const DashboardSidebar: React.FC<SidebarProps> = ({ name, picture, onTabClick }) => {
  return (
    <div className="flex h-screen flex-col justify-between border-e text-white fixed">
      <SidebarTabs onTabClick={onTabClick} />
      <SidebarUser name={name} picture={picture} />
    </div>
  );
};

export default DashboardSidebar;
