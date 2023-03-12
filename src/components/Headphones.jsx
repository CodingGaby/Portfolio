import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Headphones(props) {
  const { nodes, materials } = useGLTF('/headphones-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Skullcandy_Crusher_M_Skullcandy_Crusher_0.geometry} material={materials.M_Skullcandy_Crusher} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

export default Headphones;
useGLTF.preload('/headphones-transformed.glb')
