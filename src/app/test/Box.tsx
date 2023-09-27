import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Box(props: any) {
  //   const texture = useLoader(TextureLoader, "../../textures/galaxy.jpg");
  const myMesh = useRef(null!);

  return (
    <mesh {...props} recieveShadow={true} castShadow ref={myMesh}>
      <boxBufferGeometry />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  );
}
