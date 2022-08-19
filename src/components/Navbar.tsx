import SearchIcon from "../assets/icons/search.svg";
import Logo from "../assets/icons/nft-logo.svg";
import Button from "./Button";
interface Props {
  handleDark: () => void;
}

function Navbar({ handleDark }: Props) {
  return (
    <>
      <div className="w-full h-20 px-20 py-5 grid grid-cols-3 md:grid-cols-3 font-orbitron font-bold text-sm ">
        <div className="flex justify-start items-center text-black dark:text-white">
          <img className="h-10 w-10 primaryFilter mx-1" src={Logo} alt="logo" />
          <h2 className="mx-1 text-lg">Nft- market</h2>
          <button
            onClick={handleDark}
            className="mx-2 text-sm border-2 border-black dark:border-white rounded p-1 text-black hover:text-white dark:text-white hover:bg-secondary transition-all"
          >
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
          <img
            className="whiteFilter h-6 w-6 mx-6"
            src={SearchIcon}
            alt="search"
          />
          <Button title="Log in" variant="outlined" />
          <Button title="Connect Wallet" variant="filled" />
        </div>
        <hr className="col-span-12 mt-5 border-1 border-secondarydark" />
      </div>
    </>
  );
}

export default Navbar;
