import { SubHeading } from "./subheading";
import createStorybookComponent from "../createStorybookComponent";


const Default = createStorybookComponent(SubHeading, {children: "some text"});

// export default config;
export default {
  title: 'Subheading',
  component: SubHeading,
};

export {
  Default
};