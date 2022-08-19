import Items from "./Items";

type Props = {};

function FeaturedSection({}: Props) {
  return (
    <div className="h-1/2 p-20 font-bold font-orbitron">
      <div className="flex justify-between">
        <h1 className="text-2xl md:text-4xl text-black  dark:text-white">
          Featured Items
        </h1>
        <div className="poligon grad nestButton">
          <button className="text-sm font-normal text-white flex items-center">
            <div className="poligon neutral mx-0">
              <button className="text-md md:text-xl text-white">
                View All Artwork
              </button>
            </div>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Items />
      </div>
    </div>
  );
}

export default FeaturedSection;
