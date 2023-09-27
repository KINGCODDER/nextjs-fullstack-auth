"use client";

import { Canvas } from "@react-three/fiber";
import {
  Preload,
  Environment,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei";

import Portal from "./Portal";
import { useRef } from "react";
import OrbitControls from "./Controls";
import { Suspense } from "react";
import Loader from "./Loader";
import Lights from "./Light";
import Stars from "./Stars";
import Box from "./Box";

export default function Model3D() {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 5, 55], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <Stars />
        <Lights />
        <Environment background={"only"} files={"./textures/galaxy.hdr"} />
        {/* <Environment background={false} files={"./textures/envmap.hdr"} /> */}
        {/* <Portal /> */}
        {/* <Words /> */}
        {/* <Box /> */}
        <PerspectiveCamera fov={20} />

        <OrbitControls />
        <Portal />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
