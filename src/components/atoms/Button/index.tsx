import React from "react";
import { ButtonType } from "../../../@types";

const Button:React.FC<ButtonType> = ({ classes, label, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`${classes} ${disabled ? "opacity-25" : ""}`}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: "Next",
  classes:
    "rounded-md text-white text-sm text-center bg-blue-700 flex-auto min-w-0 block w-full py-2 mt-6 font-bold",
};

export default Button;
