import { EmailInput } from "./emailInput";
import createStorybookComponent from "../createStorybookComponent";


const Default = createStorybookComponent(EmailInput, {});

// export default config;
export default {
  title: 'EmailInput',
  component: EmailInput,
};

export {
  Default
};