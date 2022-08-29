import { NewsletterForm } from "./newsletterForm";
import createStorybookComponent from "../createStorybookComponent";


const Default = createStorybookComponent(NewsletterForm, {});

// export default config;
export default {
  title: 'NewsletterForm',
  component: NewsletterForm,
};

export {
  Default
};