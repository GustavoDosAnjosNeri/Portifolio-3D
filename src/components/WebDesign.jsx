import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Cadeira from './Cadeira'

const WebDesign = () => {
  return (
    <Canvas>
    <Cadeira/>
    <OrbitControls enableZoom={false} autoRotate />
  </Canvas>
  )
}

export default WebDesign