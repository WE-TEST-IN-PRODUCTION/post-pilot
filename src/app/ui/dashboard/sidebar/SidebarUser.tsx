"use client"

import Image from "next/image";

interface SidebarUserProps{
  name: string,
  picture: string;
}

const SidebarUser: React.FC<SidebarUserProps> = ({name, picture}) => {
  return (
    <div className="sticky inset-x-0 bottom-0">
      <a href="#" className="flex items-center gap-2  p-4">
        <Image className="rounded-full border-fun-blue-400 border-2" alt="user profile picture" src={picture} width={45} height={45} loader={() => picture}/>
        <div>
          <p className="text-xs">
            <strong className="block font-medium">{name}</strong>
          </p>
        </div>
      </a>
    </div>
  );
};

export default SidebarUser;
