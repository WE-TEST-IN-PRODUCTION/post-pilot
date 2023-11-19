import { LinkedInButton } from "../buttons/LinkedInButton";

const HeroPageHeader: React.FC = () => {
  return (
    <header className="flex flex-row justify-between pt-6 px-36 items-center">
      <h1 className="bg-gradient-to-br from-[#5b37eb] to-[#37eba9] bg-clip-text text-transparent text-4xl font-bold">
        post-pilot
      </h1>
      <div className="flex flex-row space-x-8 font-medium text-[#A2A3A3]">
        <span className="hover:text-white cursor-pointer">Documentation</span>
        <span className="hover:text-white cursor-pointer">About us</span>
      </div>
    </header>
  );
};

export default HeroPageHeader;
