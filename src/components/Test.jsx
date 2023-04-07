import { OrbitControls} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    scroll-snap-align: center;
`

const Test = () => {
  return (
    <Container>
        <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3, 2, 1]}/>
            <Cube/>
        </Canvas>
    </Container>
  )
}

export default Test