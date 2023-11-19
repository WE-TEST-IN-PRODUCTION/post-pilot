interface SidebarTabDataType {
  tabText: string;
  id?: string;
  classnames: string;
}

export const sidebarTabData: SidebarTabDataType[] = [
  {
    tabText: "New post",
    id: "tab1",
    classnames:
      "block rounded-lg bg-fun-blue-500 px-4 hover:bg-fun-blue-200 hover:text-black py-2 text-sm font-medium text-white hover:cursor-pointer",
  },
  {
    tabText: "Scheduled posts",
    id: "tab2",
    classnames: "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer",
  },
  {
    tabText: "Settings",
    id: "tab3",
    classnames: "block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer",
  },
];
