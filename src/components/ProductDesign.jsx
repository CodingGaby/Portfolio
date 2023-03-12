import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Stage } from '@react-three/drei'
import Headphones from './Headphones'

const ProductDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Headphones/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default ProductDesign