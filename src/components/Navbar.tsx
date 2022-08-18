import React from "react";
import SearchIcon from "../assets/icons/search.svg";
type Props = {};

function Navbar({}: Props) {
  return (
    <div className="w-full h-20 flex justify-between">
      <div className="flex w-1/4 justify-evenly items-center  text-white text-2xl">
        <h2>Logo</h2>
        <h2>Nft-market</h2>
      </div>
      <div className="flex w-1/4 justify-between items-center text-white text-2xl">
        <h2>Discover</h2>
        <h2>Features</h2>
        <h2>Market</h2>
        <h2>Explore</h2>
      </div>
      <div className="flex w-1/4 justify-evenly items-center text-white text-2xl">
        <img className="whiteFilter h-6 w-6" src={SearchIcon} alt="search" />
        <button>Connect Wallet</button>
      </div>
    </div>
  );
}

export default Navbar;
