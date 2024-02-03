import { Text3D } from "@react-three/drei";
import { useControls } from "leva";
import { useContext } from "react";

export default function Words() {
  const controls = useControls("Words", {
    position: {
      x: 1,
      y: 1,
      z: 1,
    },
    rotation: {
      x: 1,
      y: 1,
      z: 1,
    },
    scale: {
      value: 1,
      max: 10,
      min: -10,
      step: 0.1,
    },
  });

  return (
    <>
      <Text3D
        font={"./Roboto_Regular.json"}
        size={controls.scale}
        castShadow
        height={0.065}
        curveSegments={12}
        rotation={[
          controls.rotation.x,
          controls.rotation.y,
          controls.rotation.z,
        ]}
        position={[-1.8, -1.1, 3]}
      >
        Made By Umang Sachdeva
        <meshStandardMaterial color="brown" emissive={[1, 0.1, 0]} />
      </Text3D>
    </>
  );
}
