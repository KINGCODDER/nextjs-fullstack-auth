import { useControls } from "leva";
import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelperProps } from "react-three-fiber";

export default function Lights() {
  const directionalLightRef2 = useRef(null);
  //   const directionalLightRef = useRef<DirectionalLight>(null!);
  //   useHelper(directionalLightRef2, DirectionalLightHelper, 1, "red");

  //   const light = useControls("Ambient Light", {
  //     visible: {
  //       value: true,
  //       onChange: (v) => {
  //         directionalLightRef2.current.visible = v;
  //       },
  //     },
  //     position: {
  //       x: 1,
  //       y: 1,
  //       z: 1,
  //       onChange: (v) => {
  //         console.log(v);
  //         directionalLightRef2.current.position.copy(v);
  //       },
  //     },
  //     color: {
  //       value: "white",
  //     },
  //     intensity: {
  //       value: 1.0,
  //       min: 0,
  //       max: 1.0,
  //       step: 0.1,
  //     },
  //   });
  return (
    <>
      {/* <directionalLightHelper
        ref={directionalLightRef}
        // position={[10, 10, 10]}
        color="red"
      /> */}

      <directionalLight position={[61, 10, -16]} color="red" intensity={4} />
      <directionalLight
        position={[-40, -11, 7]}
        color="#003ad7"
        intensity={4}
      />

      {/* <directionalLightHelper /> */}
    </>
  );
}
