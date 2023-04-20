import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import Development from "./Development";
import Ilustration from "./Ilustration";
import ProductDesign from "./ProductDesign";
import SocialMedia from "./SocialMedia";

const data = [
  "Web Design",
  "Development",
  "Ilustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  justify-content: space-between;
  display: flex;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ListItem = styled.li`
  font-size: 100px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`

const Right = styled.div`
  flex: 1;
`

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container> 
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem> 
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : work === "Ilustration" ? (
            <Ilustration />
          ) : work === "Product Design" ? (
            <ProductDesign />
          ) : (
            <SocialMedia/>
          )}
        </Right>
      </Container>
    </Section>
  )
}

export default Works