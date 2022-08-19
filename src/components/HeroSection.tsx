import React from "react";

type Props = {};

function HeroSection({}: Props) {
  return (
    <div className="flex-col p-20 font-bold items-start h-3/4 font-orbitron">
      <h1 className="text-6xl text-white relative leading-normal">
        Discover The Digital Art <br /> NFT Marketplace
        <div className="outer_circle absolute bottom-0 w-20 bg-white">
          <div className="inner_circle"></div>
        </div>
      </h1>
      <div className="w-1/2">
        <h4 className="text-2xl font-normal font-sans text-gray-400">
          Digital marketplace for Non-fungible tokens(NFTs). Buy, Sell, and
          discover exclusive digital assets.
        </h4>

        <div className="flex my-10">
          <div className="poligon grad">
            <button className="text-xl text-white">Explore</button>
          </div>
          <div className="poligon">
            <button className="text-xl text-white">Learn more</button>
          </div>
        </div>
        <hr className="border-1 border-secondarydark" />
        <div className="my-10 flex justify-evenly my-10">
          <div className="text-4xl text-white">
            <h3>120+</h3>
            <h6 className="text-lg font-normal">Artwork</h6>
          </div>
          <div className="h-15 border-l-2 border-secondarydark"></div>
          <div className="text-4xl text-white">
            <h3>500k+</h3>
            <h6 className="text-lg font-normal">Auction</h6>
          </div>
          <div className="border-l-2  border-secondarydark"></div>
          <div className="text-4xl text-white">
            <h3>245+</h3>
            <h6 className="text-lg font-normal">Artist</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
