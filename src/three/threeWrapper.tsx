import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { FC, ReactNode, useMemo, useRef } from "react";


export const ThreeWrapper : FC<{
  readonly orbitControls: boolean;
  readonly children: ReactNode;

} & typeof Canvas> = ({ children, orbitControls }) => {
  return (
    <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
      {children}
      <axesHelper />
      {orbitControls && <OrbitControls />}
    </Canvas>
  );
};

export default ThreeWrapper;
