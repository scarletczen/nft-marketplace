import { useState } from "react";
import "./App.css";
import FeaturedSection from "./components/FeaturedSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import GlassBackground from "./components/GlassBackground";

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
