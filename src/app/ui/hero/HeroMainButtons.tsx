"use client"

import useAuth from "@/app/hooks/useAuth";

const HeroMainButtons: React.FC = () => {
  const { authenticate } = useAuth();

  return (
    <div className="flex flex-row space-x-12">
      <a
        onClick={authenticate}
        className="rounded-md border-2 border-fun-blue-400 text-fun-blue-400 font-semibold
        p-2 hover:bg-fun-blue-500 hover:text-white hover:cursor-pointer"
      >
        Sign in
      </a>
      <a
        className="rounded-md border-2 border-white text-white font-semibold p-2 
        hover:bg-white hover:text-black hover:cursor-pointer"
      >
        View on Github
      </a>
    </div>
  );
};

export default HeroMainButtons;
