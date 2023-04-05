import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
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
  flex: 1;
`;


/* Lado direito da seção */

const Right = styled.div`
  flex: 1;
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

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/*3D model*/}
        </Left>

        <Right>
          <Title>Cada fragmento de ideia é importante!</Title>
          <WhatWeDo>
            <Line alt="-" src="./img/line.png"/>
            <Subtitle>Seu projeto, sua cara.</Subtitle>
          </WhatWeDo>
          <Desc>Não podemos dizer como é a nossa personalidade, mas podemos expressa ela atráves do que nos representa.</Desc>
          <Button>Como é sua casa dos sonhos?</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who