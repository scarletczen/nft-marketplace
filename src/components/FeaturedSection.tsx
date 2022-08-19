import Items from "./Items";

function FeaturedSection() {
  return (
    <div className="h-1/2 p-10 md:p-20 font-bold font-orbitron">
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-black  dark:text-white">
          Featured Items
        </h1>
        <div className="poligon grad nestButton">
          <button className="text-sm font-normal text-white flex items-center">
            <div className="poligon neutral mx-0">
              <button className="text-xs sm:text-md md:text-xl text-white">
                View All Artwork
              </button>
            </div>
          </button>
        </div>
      </div>
      <Items />
    </div>
  );
}

export default FeaturedSection;
