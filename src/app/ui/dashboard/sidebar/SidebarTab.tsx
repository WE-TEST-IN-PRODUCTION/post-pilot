"use client"

interface SidebarTabProps{
    tabText: string;
    classnames: string;
    id: string;
    onTabClick: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarTab: React.FC<SidebarTabProps> = ({ tabText, classnames, onTabClick, id}) => {

  const handleClick = (tabId: string) => {
    onTabClick(tabId);
  }

  return (
    <div>
      <li onClick={() => handleClick(id)}>
        <a className={classnames}>
          {tabText}
        </a>
      </li>
    </div>
  );
};

export default SidebarTab;
