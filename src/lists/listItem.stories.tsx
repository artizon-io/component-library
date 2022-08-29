import { ListItem } from "./listItem";
import createStorybookComponent from "../createStorybookComponent";

const Default = createStorybookComponent(ListItem, {children: ["some text"]});

// export default config;
export default {
  title: 'ListItem',
  component: ListItem,
};

export {
  Default
};