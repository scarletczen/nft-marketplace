import Button from "../Common/Button";
import StatsTitle from "./StatsTitle";

const HeroTitle = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-6xl text-black dark:text-white relative leading-normal">
        Discover The Digital Art <br /> NFT Marketplace
        <div className="outer_circle absolute bottom-0 w-20 bg-white">
          <div className="inner_circle"></div>
        </div>
      </h1>
      <div className="w-full md:w-1/2">
        <h4 className="text-lg md:text-xl lg:text-2xl font-normal font-sans text-gray-400">
          Digital marketplace for Non-fungible tokens(NFTs). Buy, Sell, and
          discover exclusive digital assets.
        </h4>
        <div className="flex my-10">
          <Button title="Explore" variant="filled" />
          <Button title="Learn more" variant="outlined" />
        </div>
        <hr className="border-1 border-secondarydark" />
        <div className="my-10 flex justify-evenly">
          <StatsTitle title="120+" subTitle="Artwork" />
          <div className="h-15 border-l-2 border-secondarydark"></div>
          <StatsTitle title="500k+" subTitle="Auction" />
          <div className="border-l-2  border-secondarydark"></div>
          <StatsTitle title="245+" subTitle="Artist" />
        </div>
      </div>
    </>
  );
};

export default HeroTitle;
