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
  });

  return (
    <>
      <Text3D
        font={"./Roboto_Regular.json"}
        size={0.9}
        castShadow
        height={0.065}
        curveSegments={12}
        rotation={[6.3, 19.1, 0]}
        position={[-12, -8.9, 30]}
      >
        Made By Umang Sachdeva
        <meshStandardMaterial color="brown" emissive={[1, 0.1, 0]} />
      </Text3D>
    </>
  );
}
