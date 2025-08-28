import { Document } from "@/components/Documents"
import { Environment, OrbitControls, View } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { EffectComposer } from "@react-three/postprocessing"
import { Fluid } from "@whatisjery/react-fluid-distortion"
import { Lighting } from "."

export default function Home() {
  return (
    <>
      {/* <div
        style={{
          pointerEvents: "none",
          height: "100vh",
          width: "30vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Hey!</h1>
      </div> */}

      <div>
        <Canvas>
          <OrbitControls />
          <Environment preset="sunset" />
          <Document image="/document.jpg" scale={3} />
          {/* <mesh>
            <meshStandardMaterial color="red" />
            <boxGeometry />
          </mesh> */}{" "}
          <EffectComposer>
            <Fluid
              fluidColor="darkblue"
              // curl={0}
              velocityDissipation={0.99}
              // intensity={10}
              blend={20}
              radius={1.8}
              swirl={10}
              // pressure={0.8}
              distortion={0.1}
            />
          </EffectComposer>
          <View.Port />
        </Canvas>
      </div>
    </>
  )
}
