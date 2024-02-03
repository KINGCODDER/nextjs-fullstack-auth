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
import { useControls } from "leva";

export default function Model3D() {
  return (
    <Canvas>
      <Stars />
      <Suspense fallback={<Loader />}>
        <Lights />
        <Environment background={"only"} files={"./textures/galaxy.hdr"} />
        <Float speed={0.5} rotationIntensity={0.6} floatIntensity={0.6}>
          <Portal />
        </Float>

        <PerspectiveCamera fov={20} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
