import { Heading } from "./heading";
import createStorybookComponent from "../createStorybookComponent";


const Default = createStorybookComponent(Heading, {mainText: "some text", secondaryText: "some text some text."});

// export default config;
export default {
  title: 'Heading',
  component: Heading,
};

export {
  Default
};