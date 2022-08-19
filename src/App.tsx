import { createContext, useState } from "react";
import "./App.css";
import FeaturedSection from "./components/FeaturedSection";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

export const ThemeContext = createContext({});

function App() {
  const [dark, setDark] = useState(true);
  const handleDark = () => {
    setDark((prev) => !prev);
  };
  return (
    <div className={`App ${dark ? "dark" : ""}`}>
      <Layout>
        <Navbar handleDark={handleDark} />
        <HeroSection />
        <FeaturedSection />
      </Layout>
    </div>
  );
}

export default App;
