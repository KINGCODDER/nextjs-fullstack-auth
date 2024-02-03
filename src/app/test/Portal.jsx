import { useGLTF } from "@react-three/drei";

export default function Portal() {
  const gltf = useGLTF("./scene/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={gltf.scene}
        scale={2.2}
        position={[0, 0.1, 1]}
        rotation={[0, 0.1, 0]}
      />
    </mesh>
  );
}
