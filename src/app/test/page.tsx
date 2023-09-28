"use client";

import { Canvas } from "@react-three/fiber";
import {
  Preload,
  Environment,
  PerspectiveCamera,
  Float,
} from "@react-three/drei";

import Portal from "./Portal";
import { useRef } from "react";
import OrbitControls from "./Controls";
import { Suspense } from "react";
import Loader from "./Loader";
import Lights from "./Light";
import Stars from "./Stars";
import Words from "./Words";

export default function Model3D() {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 5, 55], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <Stars />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Lights />
        <Environment background={"only"} files={"./textures/galaxy.hdr"} />
        <Float speed={0.5} rotationIntensity={0.6} floatIntensity={0.6}>
          <Words />
          <Portal />
        </Float>
        <PerspectiveCamera fov={20} />
        <OrbitControls />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
