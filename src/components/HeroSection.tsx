import React from "react";

type Props = {};

function HeroSection({}: Props) {
  return (
    <div className="flex-col items-start h-3/4">
      <h1 className="text-7xl text-white">
        Discover The Digital Art <br /> NFT Marketplace
      </h1>
      <h4 className="text-2xl text-gray-400">
        Digital marketplace for Non-fungible tokens(NFTs). Buy, Sell, and
        discover exclusive digital assets.
      </h4>
      <button className="text-xl text-white">Explore</button>
      <button className="text-xl text-white">Learn More</button>
      <div className="flex">
        <div className="text-4xl text-white">
          <h3>120+</h3>
          <h4>Artwork</h4>
        </div>

        <div className="text-4xl text-white">
          <h3>500k+</h3>
          <h4>Auction</h4>
        </div>

        <div className="text-4xl text-white">
          <h3>245+</h3>
          <h4>Artist</h4>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
