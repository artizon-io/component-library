import { GradientShowcase } from "./gradientShowcase";
import createStorybookComponent from "../createStorybookComponent";
import React from "react";
import { colorScheme } from "../helpers";
import TestPic from "../../assets/test-pic.webp";

const Default = createStorybookComponent(GradientShowcase, {colorScheme: "orange-pink" as colorScheme, description: "some text", title: "some text", pic: TestPic});

// export default config;
export default {
  title: 'GradientShowcase',
  component: GradientShowcase,
};

export {
  Default
};