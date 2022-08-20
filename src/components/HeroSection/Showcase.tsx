import Face1 from "../../assets/images/face1.jpg";
import Face2 from "../../assets/images/face2.jpg";
import Stars from "../../assets/graphics/stars.png";
import CustomButton from "../Common/CustomButton";

const Showcase = () => {
  return (
    <div className="absolute hidden md:block h-full w-1/3 lg:w-1/2 top-20 right-20">
      <div className="relative h-full w-full">
        <img className="absolute left-1/2" src={Stars} alt="stars" />
        <img
          className="absolute bottom-1/2 left-14 h-10"
          src={Stars}
          alt="stars"
        />
        <img
          className="heroFirst absolute top-0 right-0 clippedImage"
          src={Face2}
        />
        <img
          className="heroSecond absolute z-10 top-1/3 bottom-1/3 left-1/3  clippedImage"
          src={Face1}
        />
        <div className="z-20 text-white text-xl absolute bottom-1/3 right-0">
          <CustomButton />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
