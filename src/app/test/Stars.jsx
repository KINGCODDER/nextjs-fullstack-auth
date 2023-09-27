"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useControls } from "leva";

export default function Stars(props) {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
  });

  // useFrame((state, delta) => {
  //   ref.current.rotation.x -= delta / 20;
  //   ref.current.rotation.y -= delta / 20;
  // });

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
    <group rotation={[0, 0, Math.PI / 4]} scale={381}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          scale={1}
          color="white"
          size={1.5}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// export default function StarsCanvas() {
//   return (
//     <Canvas
//       frameloop="demand"
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{ position: [0, 0, 1] }}
//     >
//       <Suspense fallback={null}>
//         <Stars />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// }
