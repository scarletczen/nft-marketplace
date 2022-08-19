import HeroTitle from "./HeroTitle";
import Showcase from "./Showcase";

function HeroSection() {
  return (
    <div className="relative flex-col p-20 font-bold items-start h-3/4 font-orbitron">
      <HeroTitle />
      <Showcase />
    </div>
  );
}

export default HeroSection;
