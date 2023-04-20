import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Mac from "./Mac";


const WebDesign = () => {
  return (
    <>
      {/*Ao inves de usar o <Stage>(Que serve para colocar padrões de luz prontas).
      vou utilizar o ambientLLight para a luz e o Camera para o "ZOOM"}*/}

      <Canvas camera={{ position: [0, 0, 8] }}>
      <ambientLight intensity={1}></ambientLight>
        <Suspense fallback={null}>
        <Mac />
        <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </>
  );
};

export default WebDesign;