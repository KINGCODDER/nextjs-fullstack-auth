"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, Environment, PerspectiveCamera } from "@react-three/drei";
import Portal from "./Portal";
import Words from "./Words";
import OrbitControls from "./Controls";
import Box from "./Box";
import { Suspense } from "react";
import Loader from "./Loader";

export default function Model3D() {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <Environment background={"only"} files={"./textures/galaxy.hdr"} />
        {/* <Environment background={false} files={"./textures/envmap.hdr"} /> */}

        {/* <Portal /> */}
        {/* <Words /> */}
        <PerspectiveCamera
          target={[1, 5, 0]}
          fov={50}
          position={[-1.75, 10.85, 20.35]}
        />

        <OrbitControls />
        <Portal />
        <ambientLight color={"white"} intensity={0.2} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
