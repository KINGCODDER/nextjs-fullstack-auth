import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  SpotLight,
  useHelper,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

export default function Portal() {
  const gltf = useGLTF("./scene/scene.gltf");
  const camera = useRef();
  useHelper(camera, THREE.CameraHelper);
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={gltf.scene}
        scale={20}
        position={[2, 2.65, 9.5]}
        // position={[11, 2.65, 2.75]}
        rotation={[0, 0.25, 0]}
        // rotation={[0, 1.4, 0]}
      />
      <axesHelper args={[5]} />
      <gridHelper args={[20, 20, 0xff0000, "teal"]} />
    </mesh>
  );
}
