import { useState } from "react";
import "./App.css";
import PrimaryBlob from "./assets/blobs/primary.svg";
import SecondaryBlob from "./assets/blobs/secondary.svg";
import FeaturedSection from "./components/FeaturedSection";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar />
        <HeroSection />
        <FeaturedSection />
      </Layout>
    </div>
  );
}

export default App;
