import { Text3D } from "@react-three/drei";

export default function Words() {
  return (
    <>
      <Text3D
        font={"./Roboto_Regular.json"}
        size={0.275}
        height={0.065}
        curveSegments={12}
        rotation={[-0.78, -0.5, -0.5]}
        position={[-10, 10, 0]}
      >
        Made By Umang Sachdeva
        <meshStandardMaterial color={[1, 0.15, 0.1]} emissive={[1, 0.1, 0]} />
      </Text3D>
    </>
  );
}
