import { Footer } from "./footer";
import createStorybookComponent from "../createStorybookComponent";


const Default = createStorybookComponent(Footer, {navs: ['[link]()', '[link]()', '[link]()', '[link]()', '[link]()', '[link]()'], copyright: "some text"});

// export default config;
export default {
  title: 'Footer',
  component: Footer,
};

export {
  Default
};