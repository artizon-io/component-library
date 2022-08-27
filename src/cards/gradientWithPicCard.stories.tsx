import { GradientWithPicCard } from "./gradientWithPicCard";
import createStorybookComponent from "../createStorybookComponent";
import testPic from "../../assets/test-pic.webp";


const Default = createStorybookComponent(GradientWithPicCard, {colorScheme: "orange-pink", pic: testPic});

// export default config;
export default {
  title: 'GradientWithPicCard',
  component: GradientWithPicCard,
};

export {
  Default
};