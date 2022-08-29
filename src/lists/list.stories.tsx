import { List } from "./list";
import createStorybookComponent from "../createStorybookComponent";
import React from "react";

const LI = () => <li>Some text</li>
const Default = createStorybookComponent(List, {children: [<LI/>, <LI/>, <LI/>, <LI/>]});

// export default config;
export default {
  title: 'List',
  component: List,
};

export {
  Default
};