import NeonStage from "@/public/neon_stage/Scene"
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
          {/* <Environment preset="studio" environmentIntensity={0} /> */}

          {/* <directionalLight color="purple" castShadow intensity={20} /> */}
          {/* <pointLight color="violet" intensity={8} penumbra={20} castShadow /> */}

          <mesh position={[0.85, 2.15, -10.75]} castShadow receiveShadow>
            <spotLight color="violet" intensity={10} penumbra={2} castShadow />

            {/* <boxGeometry /> */}
            {/* <meshStandardMaterial emissive="pink" emissiveIntensity={4} /> */}
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
              intensity={40}
            />

            <Noise
              premultiply // enables or disables noise premultiplication
              blendFunction={BlendFunction.ADD} // blend mode
              opacity={1}
            />
          </EffectComposer>

          <NeonStage />
        </Canvas>
      </div>
    </>
  )
}
