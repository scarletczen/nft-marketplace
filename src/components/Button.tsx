import React from "react";

type Props = {
  variant: "filled" | "outlined";
  title: string;
};

function Button({ variant, title }: Props) {
  if (variant === "filled") {
    return (
      <div className="poligon grad">
        <button className="text-white">{title}</button>
      </div>
    );
  } else {
    return (
      <div className="poligon grad nestButton">
        <button className="text-sm font-normal text-white flex items-center">
          <div className="poligon neutral mx-0">
            <button className="text-sm text-white">{title}</button>
          </div>
        </button>
      </div>
    );
  }
}

export default Button;
