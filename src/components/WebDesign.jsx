import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Stage } from '@react-three/drei'
import Web from './Web'

const WebDesign = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5]}}>
      <Stage environment="city" intensity={0.3}>
        <Web/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default WebDesign