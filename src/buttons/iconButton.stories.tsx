import { IconButton } from "./iconButton";
import createStorybookComponent from "../createStorybookComponent";


const Github = createStorybookComponent(IconButton, {type: "github", children: "Some text"});
const Link = createStorybookComponent(IconButton, {type: "link", children: "Some text"});

// export default config;
export default {
  title: 'IconButton',
  component: IconButton,
};

export {
  Github,
  Link
};