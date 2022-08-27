import { Logo } from './logo';
import createStorybookComponent from '../createStorybookComponent';

export default {
  title: 'Logo',
  component: Logo,
};

const Default = createStorybookComponent(Logo, {size: 50});

export {
  Default
}