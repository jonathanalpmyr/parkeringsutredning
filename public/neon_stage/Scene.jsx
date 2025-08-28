import React from "react"
import { useGLTF } from "@react-three/drei"

export default function NeonStage(props) {
  const { nodes, materials } = useGLTF("/neon_stage/scene.gltf")
  return (
    <group {...props} dispose={null} castShadow receiveShadow>
      <group scale={0.01}>
        <group
          position={[-317.686, 369.577, -669.114]}
          rotation={[-1.564, 0.23, -1.787]}
          scale={[32.654, 30.712, 78.171]}
          castShadow
          receiveShadow
        >
          <mesh
            geometry={nodes.Cylinder067_Material002_0.geometry}
            material={materials["Material.002"]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Cylinder067_Material002_0_1.geometry}
            material={materials["Material.002"]}
            castShadow
            receiveShadow
          />
        </group>
        <mesh
          geometry={nodes.Plane_Material_0.geometry}
          material={materials.Material}
          position={[76.675, 0, -166.309]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[135.952, 146.829, 127.587]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Torus_Material003_0.geometry}
          material={materials["Material.003"]}
          position={[80.452, 226.188, -574.022]}
          scale={174.621}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Sphere_Material004_0.geometry}
          material={materials["Material.004"]}
          position={[95.951, 485.54, -756.858]}
          rotation={[-Math.PI / 2, 0, -0.279]}
          scale={4761.809}
          castShadow
          receiveShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload("/neon_stage/scene.gltf")
