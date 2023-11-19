import Image from "next/image";
import React from "react";

const DashboardHeader: React.FC = () => {
  return (
    <header className="bg-fun-blue-800 flex flex-row justify-between p-4  text-white ">
      <div className="flex flex-row items-center space-x-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <div className="">
        <button className="rounded-full hover:bg-black/50 p-2">
          <Image
            className="rounded-full"
            src="/assets/logout-icon.png"
            height={40}
            width={40}
            alt="logout icon"
          />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
