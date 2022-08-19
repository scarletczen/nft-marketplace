import React from "react";
import ItemCard from "./ItemCard";
import Item1 from "../assets/images/item1.png";
import Item2 from "../assets/images/item2.png";
import Item3 from "../assets/images/item3.png";

type Props = {};

function Items({}: Props) {
  return (
    <div className="grid grid-cols-3 grid-flow-row">
      <ItemCard display={Item1} title={"Greek"} />
      <ItemCard display={Item2} title={"Greek"} />
      <ItemCard display={Item3} title={"Greek"} />
    </div>
  );
}

export default Items;
