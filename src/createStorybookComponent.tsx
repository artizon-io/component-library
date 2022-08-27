import React, { FC, ReactNode } from 'react';
import { GlobalStyleProvider } from './globalStyleProvider';
import { ThemeToggleButton } from './buttons/themeToggleButton';
import styled from '@emotion/styled';


const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > .comp {
    flex: 1;
  }
`;

// A higher order component that returns a component with its storybook config
export default function createStorybookComponent(Component : FC<any>, args? : any) :
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
        <Component className="comp" {...args}/>
        <ThemeToggleButton/>
      </StyledContainer>
    </GlobalStyleProvider>

  // return [config, WrappedComponent];
  return WrappedComponent;
}

