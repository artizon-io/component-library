import { readFileSync } from "fs"
import vs from "./shaders/displacementSphere.vs";
import fs from "./shaders/displacementSphere.fs";
import { OrbitControls } from "@react-three/drei";
import { Canvas, MeshProps, ThreeElements, useFrame } from "@react-three/fiber";
import React, { FC, useMemo, useRef } from "react";
import { MathUtils } from "three";

export const DisplacementSphere : FC<{

}> = ({}) => {
  const mesh = useRef<MeshProps>();
  const hover = useRef(false);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    if (!mesh.current)
      return

    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 0.85 : 0.15,
      0.02
    );
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      scale={2}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        fragmentShader={fs}
        vertexShader={vs}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );
};