import HeroPageHeader from "./hero/HeroPageHeader";
import HeroPageMain from "./hero/HeroPageMain";

const HeroPage: React.FC = () => {
  return (
    <div className="font-figtree">
      <HeroPageHeader />
      <HeroPageMain />
    </div>
  );
};

export default HeroPage;
