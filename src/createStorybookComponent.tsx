import React, { FC, ReactNode } from 'react';
import { GlobalStyleProvider } from './globalStyleProvider';
import { ThemeToggleButton } from './buttons/themeToggleButton';
import styled from '@emotion/styled';


const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// A higher order component that returns a component with its storybook config
export default function createStorybookComponent<Props>(Component : FC<Props>, args : Props) :
  typeof GlobalStyleProvider
  // [{
  //   readonly title: string;
  //   readonly component: FC<any>;
  // }, typeof GlobalStyleProvider]
  {
  // const config = {
  //   title: Component.displayName,
  //   component: Component,
  // }

  const WrappedComponent = () =>
    <GlobalStyleProvider>
      <StyledContainer>
        <Component {...args}/>
        <ThemeToggleButton/>
      </StyledContainer>
    </GlobalStyleProvider>

  // return [config, WrappedComponent];
  return WrappedComponent;
}

