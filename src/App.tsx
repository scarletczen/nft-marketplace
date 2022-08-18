import { useState } from "react";
import "./App.css";
import PrimaryBlob from "./assets/blobs/primary.svg";
import SecondaryBlob from "./assets/blobs/secondary.svg";
import FeaturedSection from "./components/FeaturedSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="relative w-screen h-screen bg-dark">
        <img
          className="absolute -top-20 left-40 h-2/4 w-1/4"
          src={PrimaryBlob}
        />
        <img className="absolute -top-20 -left-20 w-1/4" src={SecondaryBlob} />
        <img
          className="absolute top-0 right-0 h-1/4 w-1/4"
          src={SecondaryBlob}
        />
        <img
          className="absolute bottom-0 right-0 h-1/4 w-1/4"
          src={SecondaryBlob}
        />
        <img
          className="absolute -bottom-10 -left-20 h-2s/4 w-1/4"
          src={PrimaryBlob}
        />
        <div className="glass absolute z-10 h-screen w-screen">
          <Navbar />
          <HeroSection />
          <FeaturedSection />
        </div>
      </div>
    </div>
  );
}

export default App;
