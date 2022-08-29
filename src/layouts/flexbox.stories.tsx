import { Flexbox } from "./flexbox";
import createStorybookComponent from "../createStorybookComponent";
import React from "react";

const H1 = () => <h1>Some text</h1>
const Default = createStorybookComponent(Flexbox, {gap: 20, type: "vertical", children: [<H1/>, <H1/>, <H1/>, <H1/>]});

// export default config;
export default {
  title: 'Flexbox',
  component: Flexbox,
};

export {
  Default
};