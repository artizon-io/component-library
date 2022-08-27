import { NewsletterCard } from "./newsletterCard";
import createStorybookComponent from "../createStorybookComponent";
import testPic from "../../assets/test-pic.webp";


const Default = createStorybookComponent(NewsletterCard, {title: "Some text", bulletPointsTitle: "Some text", bulletPoints: ["Some text", "Some text", "Some text"]});

// export default config;
export default {
  title: 'NewsletterCard',
  component: NewsletterCard,
};

export {
  Default
};