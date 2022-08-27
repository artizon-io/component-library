import { CopyToClipboardButton } from './copyToClipboardButton';
import createStorybookComponent from "../createStorybookComponent";


const Default = createStorybookComponent(CopyToClipboardButton);

// export default config;
export default {
  title: 'CopyToClipboardButton',
  component: CopyToClipboardButton,
};

export {
  Default
};