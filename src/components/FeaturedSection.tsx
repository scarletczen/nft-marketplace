import React from "react";

type Props = {};

function FeaturedSection({}: Props) {
  return (
    <div className="h-1/2 font-orbitron">
      <div className="flex justify-between">
        <h1 className="text-5xl text-white">Featured Items</h1>
        <button className="text-2xl text-white">View All Artwork</button>
      </div>
      <div className=""></div>
    </div>
  );
}

export default FeaturedSection;
