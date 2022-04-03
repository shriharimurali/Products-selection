import React from "react";
import { TitleType } from "../../../@types";

const Title:React.FC<TitleType> = ({ classes, title }) => <h1 className={classes}>{title}</h1>;

Title.defaultProps = {
  classes: "font-sans font-semibold text-2xl mb-4",
};

export default Title;
