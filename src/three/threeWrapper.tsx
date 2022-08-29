import styled from "@emotion/styled";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { FC, ReactNode, useMemo, useRef } from "react";


const StyledThreeWrapper = styled.div<{
  readonly height: number;
}>`
  height: ${props => props.height}px;
`;


export const ThreeWrapper : FC<{
  readonly orbitControls: boolean;
  readonly children: ReactNode;
  readonly height: number;

} & typeof Canvas> = ({ children, orbitControls, height }) => {
  return (
    <StyledThreeWrapper height={height}>
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
        {children}
        <axesHelper />
        {orbitControls && <OrbitControls />}
      </Canvas>
    </StyledThreeWrapper>
  );
};

export default ThreeWrapper;
