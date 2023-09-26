import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, SpotLight } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
export default function Portal() {
  const gltf = useGLTF("./scene/scene.gltf");
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
        scale={3}
        position={[0, 3.25, 5]}
        // rotation={[-0.78, -0.5, -0.5]}
      />

      <gridHelper args={[20, 20, 0xff0000, "teal"]} />
    </mesh>
  );
}
