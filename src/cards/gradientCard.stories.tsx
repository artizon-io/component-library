import { GradientCard } from "./gradientCard";
import createStorybookComponent from "../createStorybookComponent";
import { colorScheme } from "../helpers";


const Default = createStorybookComponent(GradientCard, {title: "Some text", body: "Some text", colorScheme: "orange-pink" as colorScheme});

// export default config;
export default {
  title: 'GradientCard',
  component: GradientCard,
};

export {
  Default
};