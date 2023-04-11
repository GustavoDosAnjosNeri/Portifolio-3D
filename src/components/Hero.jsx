import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';

const Section = styled.div` 
  height: 90vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* Lado esquerdo da seção*/

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: fit-content;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 17px;

  :hover{
    background-color: #ca4a97;
  }
`;

/* Lado direito da seção */

const Right = styled.div`
  flex: 3;
  position: relative;
  height: 100%;
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  animation: animate 2s infinite ease alternate;
  @keyframes animate{
    to{
      transform: translateY(-20px)
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Seja específico! Nós amamos isso.</Title>
          <WhatWeDo>
            <Line alt="-" src="./img/line.png"/>
            <Subtitle>O que você deseja?</Subtitle>
          </WhatWeDo>
          <Desc>Quanto mais específico você for sobre sua ideias, mais empolgados vamos ficar</Desc>
          <Button>Saiba mais</Button>
        </Left>

        <Right>
          <Canvas  camera={{fov: 25, position: [5, 5, 5]}}>
              <OrbitControls enableZoom={false}/>
              <ambientLight intensity={1}/>
              <directionalLight position={[3, 2, 1]}/>
              <Sphere args={[1, 100, 200]} scale={1.5}>
                <MeshDistortMaterial color="#2b0d44" attach="material" distort={0.5} speed={2}/>
              </Sphere>
          </Canvas>
          <Img alt="Viagem na lua" src="./img/moon.png"/> 
        </Right>
      </Container>
    </Section>
  )
}

export default Hero