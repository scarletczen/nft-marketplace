import ItemCard from "./ItemCard";
import Item1 from "../../assets/images/item1.png";
import Item2 from "../../assets/images/item2.png";
import Item3 from "../../assets/images/item3.png";
import Item4 from "../../assets/images/item4.png";

const Items = () => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row">
      <ItemCard display={Item1} title={"Neon Green"} />
      <ItemCard display={Item2} title={"Museum"} />
      <ItemCard display={Item3} title={"404"} />
      <ItemCard display={Item4} title={"Thinker"} />
    </div>
  );
};

export default Items;
