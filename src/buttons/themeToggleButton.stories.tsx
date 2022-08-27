import createStorybookComponent from "../createStorybookComponent";
import React from "react";


const Dummy = () => (<span></span>);

const Default = createStorybookComponent(Dummy);

// export default config;
export default {
  title: 'ThemeToggleButton',
  component: Dummy,
};

export {
  Default
};