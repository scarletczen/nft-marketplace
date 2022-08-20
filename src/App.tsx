import { useState } from "react";
import FeaturedSection from "./components/FeaturedSection/FeaturedSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import GlassBackground from "./components/Common/GlassBackground";

function App() {
  const [dark, setDark] = useState(true);
  const handleDark = () => {
    setDark((prev) => !prev);
  };
  return (
    <div className={`App ${dark ? "dark" : ""}`}>
      <GlassBackground>
        <Navbar handleDark={handleDark} />
        <HeroSection />
        <FeaturedSection />
      </GlassBackground>
    </div>
  );
}

export default App;
