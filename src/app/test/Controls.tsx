import { useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

extend({ OrbitControls });

export default function Controls() {
  const { camera, gl } = useThree();
  return (
    <OrbitControls
      // attach={"orbitControls"}
      // args={[camera, gl.domElement]}
      // enableZoom={false}
      // maxPolarAngle={Math.PI / 2}
      // minPolarAngle={Math.PI / 2}
      enableZoom={false}
      maxPolarAngle={Math.PI * 0.5}
      // maxPolarAngle={Math.PI / 2}
      // minPolarAngle={Math.PI / 2}
    />
  );
}
