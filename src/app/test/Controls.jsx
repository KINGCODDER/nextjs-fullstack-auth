import { useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

extend({ OrbitControls });

export default function Controls() {
  const { camera, gl } = useThree();
  return (
    <OrbitControls
      attach={"orbitControls"}
      args={[camera, gl.domElement]}
      enableZoom={false}
      maxPolarAngle={Math.PI * 0.5}
    />
  );
}
