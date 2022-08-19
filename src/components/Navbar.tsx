import SearchIcon from "../assets/icons/search.svg";
import Logo from "../assets/icons/nft-logo.svg";
interface Props {
  handleDark: () => void;
}

function Navbar({ handleDark }: Props) {
  return (
    <>
      <div className="w-full h-20 px-20 py-5 grid grid-cols-2 md:grid-cols-3 font-orbitron font-bold text-sm ">
        <div className="flex justify-start items-center text-black dark:text-white">
          <img className="h-10 w-10 primaryFilter mx-1" src={Logo} alt="logo" />
          <h2 className="mx-1 text-lg">Nft- market</h2>
          <button onClick={handleDark} className="mx-2 text-sm">
            Dark mode
          </button>
        </div>
        <div className="justify-between hidden md:flex items-center text-black dark:text-white ">
          <h2 className="dark:text-white ">Discover</h2>
          <h2>Features</h2>
          <h2>Market</h2>
          <h2>Explore</h2>
        </div>
        <div className="justify-end hidden md:flex items-center text-white ">
          <img className="whiteFilter h-6 w-6" src={SearchIcon} alt="search" />
          <div className="poligon grad nestButton">
            <button className="text-sm font-normal text-white flex items-center">
              <div className="poligon neutral mx-0">
                <button className="text-sm text-white">Log in</button>
              </div>
            </button>
          </div>
          <div className="poligon grad">
            <button className="">Connect Wallet</button>
          </div>
        </div>
        <hr className="col-span-12 mt-5 border-1 border-secondarydark" />
      </div>
    </>
  );
}

export default Navbar;
