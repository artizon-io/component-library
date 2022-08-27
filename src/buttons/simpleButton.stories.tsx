import { SimpleButton } from "./simpleButton";
import createStorybookComponent from "../createStorybookComponent";


const Default = createStorybookComponent(SimpleButton, {children: "Some text"});

// export default config;
export default {
  title: 'SimpleButton',
  component: SimpleButton,
};

export {
  Default,
};