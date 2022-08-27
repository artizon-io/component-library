import { ArticleCard } from "./articleCard";
import createStorybookComponent from "../createStorybookComponent";


const Default = createStorybookComponent(ArticleCard, {date: "26 Jul", title: "Some title"});

// export default config;
export default {
  title: 'ArticleCard',
  component: ArticleCard,
};

export {
  Default
};