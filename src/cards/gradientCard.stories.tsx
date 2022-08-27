import { GradientCard } from "./gradientCard";
import createStorybookComponent from "../createStorybookComponent";


const Default = createStorybookComponent(GradientCard, {title: "Some text", body: "Some text", colorScheme: "orange-pink"});

// export default config;
export default {
  title: 'GradientCard',
  component: GradientCard,
};

export {
  Default
};