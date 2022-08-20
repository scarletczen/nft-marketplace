import PrimaryBlob from "../../assets/blobs/primary.svg";
import SecondaryBlob from "../../assets/blobs/secondary.svg";
interface Props {
  children: JSX.Element[];
}

const GlassBackground = ({ children }: Props) => {
  return (
    <>
      <div className="relative w-full h-full bg-white dark:bg-darkColor">
        <img className="absolute top-0 left-40 h-15 w-1/3" src={PrimaryBlob} />
        <img
          className="absolute top-1/4 right-0 h-15 w-1/3"
          src={PrimaryBlob}
        />
        <img
          className="absolute bottom-1/4 left-0 h-15 w-1/4"
          src={PrimaryBlob}
        />
        <img className="absolute -top-20 -left-20 w-1/4" src={SecondaryBlob} />
        <img
          className="absolute top-0 right-0 h-1/4 w-1/4"
          src={SecondaryBlob}
        />
        <img
          className="absolute bottom-1/4 right-0 h-1/4 w-1/4"
          src={SecondaryBlob}
        />
        <div className="relative glass z-10 h-full w-full">{children}</div>
      </div>
    </>
  );
};

export default GlassBackground;
