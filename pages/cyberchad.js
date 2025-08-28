import Rotate from "@/components/Rotate"
import { CyberChad } from "@/public/cyberchad/Scene"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"

export default function Home() {
  return (
    <>
      <div>
        <Canvas shadows>
          <OrbitControls />
          {/* <ambientLight intensity={0.1} color="#777" /> */}
          {/* <Environment preset="warehouse" environmentIntensity={0.5} /> */}

          {/* <directionalLight color="purple" castShadow intensity={20} /> */}
          {/* <pointLight color="violet" intensity={8} penumbra={20} castShadow /> */}

          <color attach="background" args={["black"]} />

          <mesh position={[2, 20, 10]} castShadow receiveShadow>
            <pointLight
              color="cyan"
              intensity={100}
              penumbra={100}
              castShadow
            />
          </mesh>

          <EffectComposer>
            <Vignette
              offset={0.2} // vignette offset
              darkness={1} // vignette darkness
              eskil={false} // Eskil's vignette technique
              blendFunction={BlendFunction.NORMAL} // blend mode
            />
            <Bloom
              mipmapBlur
              luminanceThreshold={0.01}
              levels={20}
              intensity={10}
            />

            <Noise
              premultiply // enables or disables noise premultiplication
              blendFunction={BlendFunction.ADD} // blend mode
              opacity={1}
            />
          </EffectComposer>

          <Rotate>
            <CyberChad />
          </Rotate>
        </Canvas>
      </div>
    </>
  )
}
