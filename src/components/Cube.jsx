import {PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import React, { useRef } from 'react'

const Cube = () => {
    const textRef = useRef()
    useFrame(state=> textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  return (
    <mesh>
    <boxGeometry/>
    <meshStandardMaterial>
        <RenderTexture attach="map">
            <PerspectiveCamera
            makeDefault
            position={[0, 0, 5]}
            />
            <color attach="background" args={[0xF29DBA]}/>
            {/*Para utilizar cores Hexadecimais no Three.js, 
            precisamos substituir o "#" por "0x" antes de inserir o codigo da cor
            Para usar o RGB bsta utilizar 'rgb( 0.5, 0.5, 0.5 )'*/}
           
            <Text ref={textRef}fontSize={3} color="#555">
                Hello
            </Text>
        </RenderTexture>
    </meshStandardMaterial>
    </mesh>
  )
}

export default Cube