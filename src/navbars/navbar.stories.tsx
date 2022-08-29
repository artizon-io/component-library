import { Navbar } from "./navbar";
import createStorybookComponent from "../createStorybookComponent";

const Default = createStorybookComponent(Navbar, {});

// export default config;
export default {
  title: 'Navbar',
  component: Navbar,
};

export {
  Default
};