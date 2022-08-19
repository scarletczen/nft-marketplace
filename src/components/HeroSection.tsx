import Face1 from "../assets/images/face1.jpg";
import Face2 from "../assets/images/face2.jpg";

function HeroSection() {
  return (
    <div className="relative flex-col p-20 font-bold items-start h-3/4 font-orbitron">
      <h1 className="text-4xl md:text-6xl text-black dark:text-white relative leading-normal">
        Discover The Digital Art <br /> NFT Marketplace
        <div className="outer_circle absolute bottom-0 w-20 bg-white">
          <div className="inner_circle"></div>
        </div>
      </h1>
      <div className="w-full md:w-1/2">
        <h4 className="text-xl md:text-2xl font-normal font-sans text-gray-400">
          Digital marketplace for Non-fungible tokens(NFTs). Buy, Sell, and
          discover exclusive digital assets.
        </h4>

        <div className="flex my-10">
          <div className="poligon grad">
            <button className="text-md md:text-xl text-white">Explore</button>
          </div>
          <div className="poligon grad nestButton">
            <button className="text-sm font-normal text-white flex items-center">
              <div className="poligon neutral mx-0">
                <button className="text-md md:text-xl text-white">
                  Learn more
                </button>
              </div>
            </button>
          </div>
        </div>
        <hr className="border-1 border-secondarydark" />
        <div className="my-10 flex justify-evenly my-10">
          <div className="text-2xl md:text-4xl text-black dark:text-white">
            <h3>120+</h3>
            <h6 className="text-lg font-normal">Artwork</h6>
          </div>
          <div className="h-15 border-l-2 border-secondarydark"></div>
          <div className="text-2xl md:text-4xl text-black dark:text-white">
            <h3>500k+</h3>
            <h6 className="text-lg font-normal">Auction</h6>
          </div>
          <div className="border-l-2  border-secondarydark"></div>
          <div className="text-2xl md:text-4xl text-black dark:text-white">
            <h3>245+</h3>
            <h6 className="text-lg font-normal">Artist</h6>
          </div>
        </div>
      </div>
      <div className="absolute hidden md:block h-full w-1/2 top-20 right-20">
        <div className="relative h-full w-full">
          <img
            className="heroFirst absolute top-0 right-0  clippedImage"
            src={Face2}
          />
          <img
            className="heroSecond absolute z-10 top-1/3 bottom-1/3 left-1/3  clippedImage"
            src={Face1}
          />
          <div className="z-20 text-white text-xl absolute bottom-1/3 right-0">
            <div className="poligon neutral">
              <button className="text-sm font-normal text-white flex items-center">
                <div className="mr-5">
                  <h5>Current Bid</h5>
                  <h6 className="text-gray-400">0.99 eth</h6>
                </div>
                <div className="mr-5">
                  <h5>Current Bid</h5>
                  <h6 className="text-gray-400">25 hrs</h6>
                </div>
                <div className="poligon grad">
                  <button className="text-sm text-white">Start Bid</button>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
