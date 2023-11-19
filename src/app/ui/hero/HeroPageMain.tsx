import HeroMainButtons from "./HeroMainButtons";
import HeroMainContent from "./HeroMainContent";

const HeroPageMain: React.FC = () => {
  return (
    <main className="flex flex-col py-36 px-[30%] text-center items-center space-y-8">
      <HeroMainContent />
      <HeroMainButtons />
    </main>
  );
};

export default HeroPageMain;
