import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import ReactLogo from './React'

const Development = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.3}>
        <ReactLogo/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate={true}/>
    </Canvas>
  )
};

export default Development