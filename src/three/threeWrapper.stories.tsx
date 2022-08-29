import ThreeWrapper from "./threeWrapper";
import { DisplacementSphere } from "./displacementSphere";
import createStorybookComponent from "../createStorybookComponent";
import React from "react";

const Default = createStorybookComponent(ThreeWrapper, {children: <mesh/>, height: 500, orbitControls: true});

// export default config;
export default {
  title: 'ThreeWrapper',
  component: ThreeWrapper,
};

export {
  Default
};