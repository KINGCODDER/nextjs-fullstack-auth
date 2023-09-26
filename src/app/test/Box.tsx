import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Box(props: any) {
  //   const texture = useLoader(TextureLoader, "../../textures/galaxy.jpg");
  return (
    <mesh {...props} recieveShadow={true} castShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  );
}
