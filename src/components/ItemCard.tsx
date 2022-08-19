interface Props {
  display: any;
  title: string;
}

function ItemCard({ display, title }: Props) {
  return (
    <div className="flex-col">
      <div className="h-4/5 w-2/3 bg-gray-700 p-2  clippedImage">
        <img className="h-full w-full" src={display} alt="nft" />
      </div>
      <h4 className="text-black dark:text-white">{title}</h4>
    </div>
  );
}

export default ItemCard;
