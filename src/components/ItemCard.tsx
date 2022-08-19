import React from "react";

type Props = {
  display: any;
  title: string;
};

function ItemCard({ display, title }: Props) {
  return (
    <div>
      <div className="h-4/5 w-2/3 bg-gray-700 p-2  clippedImage">
        <img className="h-full w-full" src={display} alt="nft" />
      </div>

      <h4>{title}</h4>
    </div>
  );
}

export default ItemCard;
