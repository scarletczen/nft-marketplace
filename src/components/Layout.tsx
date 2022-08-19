import React from "react";
import PrimaryBlob from "../assets/blobs/primary.svg";
import SecondaryBlob from "../assets/blobs/secondary.svg";
interface Props {
  children: JSX.Element[];
}

function Layout({ children }: Props) {
  return (
    <>
      <div className="relative">
        <div className="relative w-screen h-screen bg-dark">
          <img
            className="absolute -top-20 left-40 h-2/4 w-1/4"
            src={PrimaryBlob}
          />
          <img
            className="absolute -top-20 -left-20 w-1/4"
            src={SecondaryBlob}
          />
          <img
            className="absolute top-0 right-0 h-1/4 w-1/4"
            src={SecondaryBlob}
          />
          <img
            className="absolute bottom-0 right-0 h-1/4 w-1/4"
            src={SecondaryBlob}
          />
          <img
            className="absolute -bottom-10 -left-20 h-2s/4 w-1/4"
            src={PrimaryBlob}
          />
        </div>
        <div className="relative w-screen h-screen bg-dark">
          <img
            className="absolute -top-20 left-40 h-2/4 w-1/4"
            src={PrimaryBlob}
          />
          <img
            className="absolute -top-20 -left-20 w-1/4"
            src={SecondaryBlob}
          />
          <img
            className="absolute top-0 right-0 h-1/4 w-1/4"
            src={SecondaryBlob}
          />
          <img
            className="absolute bottom-0 right-0 h-1/4 w-1/4"
            src={SecondaryBlob}
          />
          <img
            className="absolute -bottom-10 -left-20 h-2s/4 w-1/4"
            src={PrimaryBlob}
          />
        </div>
      </div>
      <div className="glass absolute top-0 z-10 h-max w-screen">{children}</div>
    </>
  );
}

export default Layout;
