import React from "react";
import { DescriptionType } from "../../../@types";

const Description:React.FC<DescriptionType> = ({ classes, text }) => <p className={classes}>{text}</p>;

Description.defaultProps = {
  classes: "font-sans text-sm mb-12",
};

export default Description;
